import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const actions = [
   {icon: <FacebookIcon style={{color: "white"}} />, name: "Facebook"},
   {icon: <GitHubIcon style={{color: "white"}} />, name: "Github"},
   {icon: <LinkedInIcon style={{color: "white"}} />, name: "LinkedIn"},
   {icon: <InstagramIcon style={{color: "white"}} />, name: "Instagram"},
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
         icon={<SpeedDialIcon size='large' />}
         onClose={handleClose}
         onOpen={handleOpen}
         open={open}
         FabProps={{
            sx: {
               backgroundColor: "#F4D03F",
               backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
               boxShadow: "none",
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
               FabProps={{
                  sx: {
                     backgroundColor: "#F4D03F",
                     backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
                     boxShadow: "none",
                     "&:hover": {
                        backgroundColor: "#FAD35D",
                        backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
                     },
                  },
               }}
            />
         ))}
      </SpeedDial>
   );
}
