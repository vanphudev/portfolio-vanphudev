import React from "react";
import styled from "styled-components";
import {Certificates} from "../../data/constants";

const Container = styled.div`
   background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: relative;
   z-index: 1;
   align-items: center;
`;

export const Wrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   width: 100%;
   max-width: 1350px;
   padding: 10px 0px 100px 0;
   gap: 12px;
`;

export const Title = styled.div`
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

export const Desc = styled.div`
   font-size: 18px;
   text-align: center;
   max-width: 600px;
   padding: 0 20px;
   color: ${({theme}) => theme.text_secondary};
   @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 16px;
   }
`;

const ListCard = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   gap: 12px;
   margin-top: 40px;
`;

const CardCertificate = styled.div`
   width: 320px;
   height: max-content;
   padding: 20px;
   color: ${({theme}) => theme.text_primary};
   background: linear-gradient(${({theme}) => (theme.isDark ? "#212121, #212121" : "#ffffff, #ffffff")}) padding-box,
      linear-gradient(
            145deg,
            transparent 35%,
            rgba(34, 195, 42, 0.9556197478991597),
            rgba(253, 187, 45, 0.9444152661064426)
         )
         border-box;
   border: 4px solid transparent;
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   cursor: pointer;
   transform-origin: right bottom;
   transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
   &:hover {
      rotate: 4deg;
   }
   @media (max-width: 480px) {
      width: 300px;
      &:hover {
         rotate: 1deg;
      }
   }
   @media (max-width: 320px) {
      width: 250px;
      &:hover {
         rotate: 1deg;
      }
   }
`;

const MainContent = styled.div`
   max-width: 100%;
   flex: 1;
`;

const Header = styled.div``;
const Image = styled.div`
   width: 100%;
   height: 200px;
   border-radius: 10px;
   overflow: hidden;
   margin: 16px 0;
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   transition: all 0.5s ease-in-out;
   &:hover {
      transform: scale(1.05);
   }
   @media (max-width: 480px) {
      height: 160px;
   }
   @media (max-width: 320px) {
      height: 120px;
   }
`;

const Img = styled.img`
   width: 100%;
   height: 180px;
   background-color: ${({theme}) => theme.white};
   border-radius: 10px;
   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
   object-fit: cover;
   transition: all 0.5s ease-in-out;
   @media (max-width: 480px) {
      height: 140px;
   }
   @media (max-width: 320px) {
      height: 100px;
   }
`;

const Description = styled.div`
   font-weight: 400;
   color: ${({theme}) => theme.text_primary};
   overflow: hidden;
   font-size: 14px;
   margin: 8px;
   display: -webkit-box;
   width: 100%;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   text-overflow: ellipsis;
   @media (max-width: 480px) {
      font-size: 12px;
   }
   @media (max-width: 320px) {
      font-size: 8px;
   }
`;

const Categories = styled.div`
   display: flex;
   gap: 8px;
   padding: 8px 0;
`;

const CertificatesText = styled.div`
   background-color: rgba(253, 187, 45, 0.9444152661064426);
   padding: 4px 8px;
   font-weight: 600;
   text-transform: uppercase;
   font-size: 12px;
   border-radius: 50em;
`;

const Footer = styled.div`
   font-weight: 600;
   color: #717171;
   margin-right: 4px;
`;

const SpanDate = styled.span`
   font-size: 12px;
   font-weight: 900;
   color: #717171;
   margin-right: 4px;
`;

const Page = styled.a`
   color: rgba(253, 187, 45, 0.9444152661064426);
   text-decoration: none;
   font-weight: 600;
   &:hover {
      color: #40c9ff;
   }
   @media (max-width: 480px) {
      font-size: 12px;
   }
   @media (max-width: 320px) {
      font-size: 10px;
   }
`;

const NameCer = styled.div`
   font-size: 22px;
   font-weight: 600;
   color: ${({theme}) => theme.text_primary};
   margin: 8px 0;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   text-overflow: ellipsis;
   text-align: center;
   @media (max-width: 480px) {
      font-size: 18px;
   }
   @media (max-width: 320px) {
      font-size: 15px;
   }
`;

const Certificate = () => {
   return (
      <Container id='projects'>
         <Wrapper>
            <Title>Certificates</Title>
            <Desc>
               This is a list of certifications that I have earned. These certifications represent my efforts,
               continuous learning, and discipline in the field of Web development.
            </Desc>
            <ListCard>
               {Certificates &&
                  Certificates.map((certificate, index) => (
                     <CardCertificate key={index}>
                        <MainContent>
                           <Header>
                              <SpanDate>Date Issued</SpanDate>
                              <span>{certificate.DateIssued}</span>
                           </Header>
                           <Image>
                              <Img src={certificate.img} alt='Certificate' />
                           </Image>
                           <NameCer>{certificate.name}</NameCer>
                           <Categories>
                              {certificate.programmingLanguages.map((category, index) => (
                                 <CertificatesText key={index}>{category}</CertificatesText>
                              ))}
                           </Categories>
                           <Description>{certificate.desc}</Description>
                        </MainContent>
                        <Footer>
                           <SpanDate>Issued By</SpanDate>
                           <Page href={certificate.Page} target='_blank' rel='noreferrer'>
                              {certificate.IssuedBy}
                           </Page>
                           <br />
                           <SpanDate>Certification Link</SpanDate>
                           <Page href={certificate.VerificationLink} target='_blank' rel='noreferrer'>
                              Certification Link
                           </Page>
                        </Footer>
                     </CardCertificate>
                  ))}
            </ListCard>
         </Wrapper>
      </Container>
   );
};
export default Certificate;
