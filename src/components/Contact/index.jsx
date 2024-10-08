import React from "react";
import styled from "styled-components";
import {useRef} from "react";
import emailjs from "@emailjs/browser";
import {Snackbar} from "@mui/material";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: relative;
   z-index: 1;
   align-items: center;
   @media (max-width: 960px) {
      padding: 0px;
   }
`;

const Wrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   width: 100%;
   max-width: 1350px;
   padding: 0px 0px 80px 0px;
   gap: 12px;
   @media (max-width: 960px) {
      flex-direction: column;
   }
`;

const Title = styled.div`
   font-size: 42px;
   text-align: center;
   font-weight: 600;
   margin-top: 20px;
   color: ${({theme}) => theme.text_primary};
   @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
   }
`;

const Desc = styled.div`
   font-size: 18px;
   text-align: center;
   max-width: 600px;
   color: ${({theme}) => theme.text_secondary};
   @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 16px;
   }
`;

const ContactForm = styled.form`
   width: 80%;
   display: flex;
   flex-direction: column;
   background-color: ${({theme}) => theme.card};
   padding: 32px;
   border-radius: 16px;
   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
   margin-top: 28px;
   gap: 12px;
`;

const ContactTitle = styled.div`
   font-size: 35px;
   margin-bottom: 6px;
   font-weight: 600;
   color: ${({theme}) => theme.text_primary};
   text-align: center;
   transition: all 0.3s ease-in-out;
   @media (max-width: 974px) {
      font-size: 30px;
   }
   @media (max-width: 768px) {
      font-size: 28px;
   }
   @media (max-width: 480px) {
      font-size: 22px;
   }
   @media (max-width: 320px) {
      font-size: 20px;
   }
`;

const ContactInput = styled.input`
   flex: 1;
   background-color: transparent;
   border: 1px solid ${({theme}) => theme.text_secondary};
   outline: none;
   font-size: 17px;
   color: ${({theme}) => theme.text_primary};
   border-radius: 12px;
   padding: 10px 10px;
   &:focus {
      border: 1px solid ${({theme}) => theme.primary};
   }
   @media (max-width: 974px) {
      font-size: 20px;
   }
   @media (max-width: 768px) {
      font-size: 18px;
   }
   @media (max-width: 480px) {
      font-size: 16px;
   }
   @media (max-width: 320px) {
      font-size: 16px;
   }
`;

const ContactInputMessage = styled.textarea`
   flex: 1;
   max-width: 100%;
   background-color: transparent;
   border: 1px solid ${({theme}) => theme.text_secondary};
   outline: none;
   font-size: 23px;
   color: ${({theme}) => theme.text_primary};
   border-radius: 12px;
   padding: 12px 16px;
   resize: vertical;
   height: 150px;
   max-height: 400px;
   overflow: hidden;
   &:focus {
      border: 1px solid ${({theme}) => theme.primary};
   }
   @media (max-width: 974px) {
      font-size: 20px;
   }
   @media (max-width: 768px) {
      font-size: 17px;
   }
   @media (max-width: 480px) {
      font-size: 14px;
   }
   @media (max-width: 320px) {
      font-size: 12px;
   }
`;

const ContactButton = styled.button`
   align-items: center;
   background: rgb(34, 195, 42);
   background: linear-gradient(254deg, rgba(34, 195, 42, 1) 0%, rgba(253, 187, 45, 1) 100%);
   border: 0;
   border-radius: 8px;
   box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
   box-sizing: border-box;
   color: #ffffff;
   display: flex;
   font-family: Phantomsans, sans-serif;
   font-size: 18px;
   justify-content: center;
   line-height: 1em;
   max-width: 100%;
   min-width: 140px;
   padding: 3px;
   text-decoration: none;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   white-space: nowrap;
   cursor: pointer;
   transition: all 0.3s;
   &:hover {
      outline: 0;
   }
   &:active {
      outline: 0;
      transform: scale(0.9);
   }
`;

const SpanButtonSend = styled.span`
   background-color: rgb(5, 6, 45);
   padding: 16px 24px;
   border-radius: 6px;
   width: 100%;
   height: 100%;
   transition: 300ms;
   &:hover {
      background: none;
   }
`;

const Label = styled.label`
   font-size: 20px;
   color: ${({theme}) => theme.text_primary};
   @media (max-width: 974px) {
      font-size: 22px;
   }
   @media (max-width: 768px) {
      font-size: 19px;
   }
   @media (max-width: 480px) {
      font-size: 15px;
   }
   @media (max-width: 320px) {
      font-size: 13px;
   }
`;

const Contact = () => {
   const [open, setOpen] = React.useState(false);
   const form = useRef();
   const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm("service_tox7kqs", "template_nv7k7mj", form.current, "SybVGsYS52j2TfLbi").then(
         (result) => {
            setOpen(true);
            form.current.reset();
         },
         (error) => {
            console.log(error.text);
         }
      );
   };

   return (
      <Container>
         <Wrapper>
            <Title>Contact</Title>
            <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
            <ContactForm ref={form} onSubmit={handleSubmit}>
               <ContactTitle>Contact for more information</ContactTitle>
               <Label>Email</Label>
               <ContactInput placeholder='Your Email' name='from_email' />
               <Label>Phone</Label>
               <ContactInput placeholder='Your Phone Ex: (+84) ...' name='from_phone' />
               <Label>Name</Label>
               <ContactInput placeholder='Your Name' name='from_name' />
               <Label>Subject</Label>
               <ContactInput placeholder='Subject' name='subject' />
               <Label>Message</Label>
               <ContactInputMessage placeholder='Message' name='message' />
               <ContactButton type='submit' value='Send'>
                  <SpanButtonSend>Send</SpanButtonSend>
               </ContactButton>
            </ContactForm>
            <Snackbar
               open={open}
               autoHideDuration={6000}
               onClose={() => setOpen(false)}
               message='Email sent successfully!'
               severity='success'
            />
         </Wrapper>
      </Container>
   );
};

export default Contact;
