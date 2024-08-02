import styled from "styled-components";
import {Biography} from "../../data/constants";
import {getYears} from "../../utils/dateFooter";
import "../../styles/contactFooter.scss";

const FooterContainer = styled.div`
   width: 100%;
   padding: 2rem 0;
   display: flex;
   justify-content: center;
`;

const FooterWrapper = styled.footer`
   width: 100%;
   max-width: 1200px;
   display: flex;
   flex-direction: column;
   gap: 14px;
   align-items: center;
   padding: 1rem;
   color: ${({theme}) => theme.text_primary};
`;

const Logo = styled.h1`
   background: linear-gradient(200deg, #1b8b00 0%, #a2d240 74%);
   background-clip: text;
   color: transparent;
   font-weight: 900;
   font-size: 40px;
   font-family: "Montserrat Alternates", sans-serif;
   font-style: italic;
   @media (max-width: 1010px) {
      font-size: 28px;
   }
`;

const Nav = styled.nav`
   width: 100%;
   max-width: 800px;
   margin-top: 0.5rem;
   display: flex;
   flex-direction: row;
   gap: 2rem;
   justify-content: center;
   @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      text-align: center;
      font-size: 12px;
   }
`;

const NavLink = styled.a`
   color: ${({theme}) => theme.text_primary};
   text-decoration: none;
   font-size: 1.2rem;
   transition: color 0.2s ease-in-out;
   &:hover {
      color: ${({theme}) => theme.primary};
   }
   @media (max-width: 974px) {
      font-size: 1rem;
   }
`;

const Copyright = styled.p`
   margin-top: 1.5rem;
   font-size: 0.9rem;
   color: ${({theme}) => theme.soft2};
   text-align: center;
`;

function Footer() {
   return (
      <FooterContainer>
         <FooterWrapper>
            <Logo>vanphudev</Logo>
            <Nav>
               <NavLink href='#about'>About</NavLink>
               <NavLink href='#skills'>Skills</NavLink>
               <NavLink href='#projects'>Projects</NavLink>
               <NavLink href='#education'>Education</NavLink>
            </Nav>
            <ul className='contactFooter'>
               <li className='icon-content'>
                  <a
                     href={Biography.linkedin}
                     aria-label='Linkedin'
                     data-social='linkedin'
                     target='_blank'
                     rel='noreferrer'>
                     <div className='filled' />
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-linkedin'
                        viewBox='0 0 16 16'
                        space='preserve'>
                        <path
                           d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z'
                           fill='currentColor'
                        />
                     </svg>
                  </a>
                  <div className='tooltip'>Linkedin</div>
               </li>
               <li className='icon-content'>
                  <a href={Biography.github} aria-label='Github' data-social='github' target='_blank' rel='noreferrer'>
                     <div className='filled' />
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-github'
                        viewBox='0 0 16 16'
                        space='preserve'>
                        <path
                           d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8'
                           fill='currentColor'
                        />
                     </svg>
                  </a>
                  <div className='tooltip'>Github</div>
               </li>
               <li className='icon-content'>
                  <a
                     href={Biography.facebook}
                     aria-label='Facebook'
                     data-social='facebook'
                     target='_blank'
                     rel='noreferrer'>
                     <div className='filled' />
                     <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0,0,256,256'>
                        <g transform='translate(-29.44,-29.44) scale(1.23,1.23)'>
                           <g
                              fill='currentColor'
                              fillRule='nonzero'
                              stroke='none'
                              strokeWidth={1}
                              strokeLinecap='butt'
                              strokeLinejoin='miter'
                              strokeMiterlimit={10}
                              strokeDasharray=''
                              strokeDashoffset={0}
                              fontFamily='none'
                              fontWeight='none'
                              fontSize='none'
                              textAnchor='none'
                              style={{mixBlendMode: "normal"}}>
                              <g transform='scale(4,4)'>
                                 <path d='M32,6c-14.358,0 -26,11.642 -26,26c0,13.035 9.603,23.799 22.113,25.679v-18.789h-6.433v-6.834h6.433v-4.548c0,-7.529 3.668,-10.833 9.926,-10.833c2.996,0 4.583,0.223 5.332,0.323v5.965h-4.268c-2.656,0 -3.584,2.52 -3.584,5.358v3.735h7.785l-1.055,6.834h-6.73v18.843c12.69,-1.72 22.481,-12.57 22.481,-25.733c0,-14.358 -11.641,-26 -26,-26z' />
                              </g>
                           </g>
                        </g>
                     </svg>
                  </a>
                  <div className='tooltip'>Facebook</div>
               </li>
               <li className='icon-content'>
                  <a
                     href={Biography.instagram}
                     aria-label='Instagram'
                     data-social='instagram'
                     target='_blank'
                     rel='noreferrer'>
                     <div className='filled' />
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-instagram'
                        viewBox='0 0 16 16'
                        space='preserve'>
                        <path
                           d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334'
                           fill='currentColor'
                        />
                     </svg>
                  </a>
                  <div className='tooltip'>Instagram</div>
               </li>
               <li className='icon-content'>
                  <a href={Biography.zalo} aria-label='Zalo' data-social='zalo' target='_blank' rel='noreferrer'>
                     <div className='filled' />
                     <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0,0,256,256'>
                        <g transform='translate(-23.04,-23.04) scale(1.18,1.18)'>
                           <g
                              fill='currentColor'
                              fillRule='nonzero'
                              stroke='none'
                              strokeWidth={1}
                              strokeLinecap='butt'
                              strokeLinejoin='miter'
                              strokeMiterlimit={10}
                              strokeDasharray=''
                              strokeDashoffset={0}
                              fontFamily='none'
                              fontWeight='none'
                              fontSize='none'
                              textAnchor='none'
                              style={{mixBlendMode: "normal"}}>
                              <g transform='scale(5.12,5.12)'>
                                 <path d='M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h6.58008c-3.57109,3.71569 -5.58008,8.51808 -5.58008,13.5c0,5.16 2.11016,10.09984 5.91016,13.83984c0.12,0.21 0.21977,1.23969 -0.24023,2.42969c-0.29,0.75 -0.87023,1.72961 -1.99023,2.09961c-0.43,0.14 -0.70969,0.56172 -0.67969,1.01172c0.03,0.45 0.36078,0.82992 0.80078,0.91992c2.87,0.57 4.72852,-0.2907 6.22852,-0.9707c1.35,-0.62 2.24133,-1.04047 3.61133,-0.48047c2.8,1.09 5.77938,1.65039 8.85938,1.65039c4.09369,0 8.03146,-0.99927 11.5,-2.88672v3.88672c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM33,15c0.55,0 1,0.45 1,1v9c0,0.55 -0.45,1 -1,1c-0.55,0 -1,-0.45 -1,-1v-9c0,-0.55 0.45,-1 1,-1zM18,16h5c0.36,0 0.70086,0.19953 0.88086,0.51953c0.17,0.31 0.15875,0.69977 -0.03125,1.00977l-4.04883,6.4707h3.19922c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1h-5c-0.36,0 -0.70086,-0.19953 -0.88086,-0.51953c-0.17,-0.31 -0.15875,-0.69977 0.03125,-1.00977l4.04883,-6.4707h-3.19922c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1zM27.5,19c0.61,0 1.17945,0.16922 1.68945,0.44922c0.18,-0.26 0.46055,-0.44922 0.81055,-0.44922c0.55,0 1,0.45 1,1v5c0,0.55 -0.45,1 -1,1c-0.35,0 -0.63055,-0.18922 -0.81055,-0.44922c-0.51,0.28 -1.07945,0.44922 -1.68945,0.44922c-1.93,0 -3.5,-1.57 -3.5,-3.5c0,-1.93 1.57,-3.5 3.5,-3.5zM38.5,19c1.93,0 3.5,1.57 3.5,3.5c0,1.93 -1.57,3.5 -3.5,3.5c-1.93,0 -3.5,-1.57 -3.5,-3.5c0,-1.93 1.57,-3.5 3.5,-3.5zM27.5,21c-0.10375,0 -0.20498,0.01131 -0.30273,0.03125c-0.19551,0.03988 -0.37754,0.11691 -0.53711,0.22461c-0.15957,0.1077 -0.2966,0.24473 -0.4043,0.4043c-0.10769,0.15957 -0.18473,0.3416 -0.22461,0.53711c-0.01994,0.09775 -0.03125,0.19898 -0.03125,0.30273c0,0.10375 0.01131,0.20498 0.03125,0.30273c0.01994,0.09775 0.04805,0.19149 0.08594,0.28125c0.03789,0.08977 0.08482,0.17607 0.13867,0.25586c0.05385,0.07979 0.11578,0.15289 0.18359,0.2207c0.06781,0.06781 0.14092,0.12975 0.2207,0.18359c0.15957,0.10769 0.3416,0.18473 0.53711,0.22461c0.09775,0.01994 0.19898,0.03125 0.30273,0.03125c0.10375,0 0.20498,-0.01131 0.30273,-0.03125c0.68428,-0.13959 1.19727,-0.7425 1.19727,-1.46875c0,-0.83 -0.67,-1.5 -1.5,-1.5zM38.5,21c-0.10375,0 -0.20498,0.01131 -0.30273,0.03125c-0.09775,0.01994 -0.19149,0.04805 -0.28125,0.08594c-0.08977,0.03789 -0.17607,0.08482 -0.25586,0.13867c-0.07979,0.05385 -0.15289,0.11578 -0.2207,0.18359c-0.13562,0.13563 -0.24648,0.29703 -0.32227,0.47656c-0.03789,0.08976 -0.066,0.1835 -0.08594,0.28125c-0.01994,0.09775 -0.03125,0.19898 -0.03125,0.30273c0,0.10375 0.01131,0.20498 0.03125,0.30273c0.01994,0.09775 0.04805,0.19149 0.08594,0.28125c0.03789,0.08977 0.08482,0.17607 0.13867,0.25586c0.05385,0.07979 0.11578,0.15289 0.18359,0.2207c0.06781,0.06781 0.14092,0.12975 0.2207,0.18359c0.07979,0.05385 0.16609,0.10078 0.25586,0.13867c0.08976,0.03789 0.1835,0.066 0.28125,0.08594c0.09775,0.01994 0.19898,0.03125 0.30273,0.03125c0.10375,0 0.20498,-0.01131 0.30273,-0.03125c0.68428,-0.13959 1.19727,-0.7425 1.19727,-1.46875c0,-0.83 -0.67,-1.5 -1.5,-1.5z' />
                              </g>
                           </g>
                        </g>
                     </svg>
                  </a>
                  <div className='tooltip'>Zalo</div>
               </li>
            </ul>
            <Copyright>&copy; {getYears()} vanphudev. All rights reserved - Powered by vanphudev</Copyright>
         </FooterWrapper>
      </FooterContainer>
   );
}

export default Footer;
