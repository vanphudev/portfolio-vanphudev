import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Biography} from "../../data/constants";

const actions = [
   {icon: <FacebookIcon sx={{fontSize: 35}} style={{color: "white"}} />, name: "Facebook", href: Biography.facebook},
   {icon: <GitHubIcon sx={{fontSize: 35}} style={{color: "white"}} />, name: "Github", href: Biography.github},
   {icon: <LinkedInIcon sx={{fontSize: 35}} style={{color: "white"}} />, name: "LinkedIn", href: Biography.linkedin},
   {icon: <InstagramIcon sx={{fontSize: 35}} style={{color: "white"}} />, name: "Instagram", href: Biography.instagram},
];

export default function SpeedDialTooltipOpen() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [width, setWidth] = React.useState(window.innerWidth);

   React.useEffect(() => {
      const handleResize = () => {
         setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [width]);

   if (width > 1400) {
      return null;
   }

   return (
      <SpeedDial
         ariaLabel=''
         sx={{position: "fixed", bottom: "20px", left: "20px"}}
         icon={<AlternateEmailIcon sx={{fontSize: 40}} />}
         onClose={handleClose}
         onOpen={handleOpen}
         open={open}
         FabProps={{
            sx: {
               backgroundColor: "#F4D03F",
               backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
               boxShadow:
                  "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
               "&:hover": {
                  backgroundColor: "#FAD35D",
                  backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
               },
            },
         }}>
         {actions.map((action) => (
            <SpeedDialAction
               key={action.name}
               icon={action.icon}
               tooltipTitle={action.name}
               onClick={handleClose}
               href={action.href ? action.href : "#"}
               target='_blank'
               FabProps={{
                  sx: {
                     width: "50px",
                     height: "50px",
                     backgroundColor: "#F4D03F",
                     backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
                     boxShadow:
                        "box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
                     "&:hover": {
                        backgroundColor: "#FAD35D",
                        backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
                        transform: "scale(1.2)",
                        transition: "all 0.2s ease",
                     },
                  },
               }}
            />
         ))}
      </SpeedDial>
   );
}
