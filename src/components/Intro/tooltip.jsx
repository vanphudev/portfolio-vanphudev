import React from "react";
import "../../styles/tooltip.scss";
import "../../styles/tooltips/Tooltipinstagram.scss";
import "../../styles/tooltips/TooltipLinkedin.scss";
import "../../styles/tooltips/tooltipFacebook.scss";
import "../../styles/tooltips/TooltipGithub.scss";
import "../../styles/tooltips/TooltipZalo.scss";
import "../../styles/tooltips/tooltipGmail.scss";

export const TooltipLinkedin = ({nameUser, username, link, text, ui}) => {
   return (
      <div className='tooltip-container tooltip-container-TooltipLinkedin'>
         <div className='tooltip'>
            <div className='profile'>
               <div className='user'>
                  <div className='img'>{ui}</div>
                  <div className='details'>
                     <div className='name'>{nameUser}</div>
                     <div className='username'>@{username}</div>
                  </div>
               </div>
               <div className='about'>Welcome</div>
            </div>
         </div>
         <div className='text'>
            <a className='icon' href={link} target='_blank' rel='noreferrer'>
               <div className='layer'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span className='fab fa-linkedin'>
                     <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='53' height='53' viewBox='0 0 48 48'>
                        {" "}
                        <path
                           fill='#0078d4'
                           d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'
                        />
                        <path
                           d='M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18 c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12 c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z'
                           opacity='.05'
                        />
                        <path
                           d='M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534 c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5 c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489 c0,1.459-1.057,2.511-2.512,2.511H15.966z'
                           opacity='.07'
                        />
                        <path
                           fill='#fff'
                           d='M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13 c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5 c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z'
                        />{" "}
                     </svg>
                  </span>
               </div>
            </a>
         </div>
      </div>
   );
};

export const TooltipInstagram = ({nameUser, username, link, text, ui}) => {
   return (
      <div className='tooltip-container tooltip-container-TooltipInstagram'>
         <div className='tooltip'>
            <div className='profile'>
               <div className='user'>
                  <div className='img'>{ui}</div>
                  <div className='details'>
                     <div className='name'>{nameUser}</div>
                     <div className='username'>@{username}</div>
                  </div>
               </div>
               <div className='about'>Welcome</div>
            </div>
         </div>
         <div className='text'>
            <a className='icon' href={link} target='_blank' rel='noreferrer'>
               <div className='layer'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span className='fab instagramSVG'>
                     <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='53' height='53' viewBox='0 0 48 48'>
                        {" "}
                        <radialGradient
                           id='yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1'
                           cx='19.38'
                           cy='42.035'
                           r='44.899'
                           gradientUnits='userSpaceOnUse'>
                           <stop offset='0' stopColor='#fd5' />
                           <stop offset='.328' stopColor='#ff543f' />
                           <stop offset='.348' stopColor='#fc5245' />
                           <stop offset='.504' stopColor='#e64771' />
                           <stop offset='.643' stopColor='#d53e91' />
                           <stop offset='.761' stopColor='#cc39a4' />
                           <stop offset='.841' stopColor='#c837ab' />
                        </radialGradient>
                        <path
                           fill='url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)'
                           d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z'
                        />
                        <radialGradient
                           id='yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2'
                           cx='11.786'
                           cy='5.54'
                           r='29.813'
                           gradientTransform='matrix(1 0 0 .6663 0 1.849)'
                           gradientUnits='userSpaceOnUse'>
                           <stop offset='0' stopColor='#4168c9' />
                           <stop offset='.999' stopColor='#4168c9' stopOpacity='0' />
                        </radialGradient>
                        <path
                           fill='url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)'
                           d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z'
                        />
                        <path
                           fill='#fff'
                           d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'
                        />
                        <circle cx='31.5' cy='16.5' r='1.5' fill='#fff' />
                        <path
                           fill='#fff'
                           d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z'
                        />{" "}
                     </svg>
                  </span>
               </div>
            </a>
         </div>
      </div>
   );
};

export const Tooltipfacebook = ({nameUser, username, link, text, ui}) => {
   return (
      <div className='tooltip-container tooltip-container-Tooltipfacebook'>
         <div className='tooltip'>
            <div className='profile'>
               <div className='user'>
                  <div className='img'>{ui}</div>
                  <div className='details'>
                     <div className='name'>{nameUser}</div>
                     <div className='username'>@{username}</div>
                  </div>
               </div>
               <div className='about'>Welcome</div>
            </div>
         </div>
         <div className='text'>
            <a className='icon' href={link} target='_blank' rel='noreferrer'>
               <div className='layer'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span className='fab facebookSVG'>
                     <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='53' height='53' viewBox='0 0 48 48'>
                        {" "}
                        <linearGradient
                           id='Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1'
                           x1='9.993'
                           x2='40.615'
                           y1='9.993'
                           y2='40.615'
                           gradientUnits='userSpaceOnUse'>
                           <stop offset='0' stopColor='#2aa4f4' />
                           <stop offset='1' stopColor='#007ad9' />
                        </linearGradient>
                        <path
                           fill='url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)'
                           d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'
                        />
                        <path
                           fill='#fff'
                           d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'
                        />{" "}
                     </svg>
                  </span>
               </div>
            </a>
         </div>
      </div>
   );
};

export const TooltipGithub = ({nameUser, username, link, text, ui, theme}) => {
   return (
      <div className='tooltip-container tooltip-container-TooltipGithub'>
         <div className='tooltip'>
            <div className='profile'>
               <div className='user'>
                  <div className='img'>{ui}</div>
                  <div className='details'>
                     <div className='name'>{nameUser}</div>
                     <div className='username'>@{username}</div>
                  </div>
               </div>
               <div className='about'>Welcome</div>
            </div>
         </div>
         <div className='text'>
            <a className='icon' href={link} target='_blank' rel='noreferrer'>
               <div className='layer'>
                  <span
                     style={
                        !theme ? {color: "#000000", borderColor: "#000000"} : {color: "#ffffff", borderColor: "#ffffff"}
                     }
                  />
                  <span
                     style={
                        !theme ? {color: "#000000", borderColor: "#000000"} : {color: "#ffffff", borderColor: "#ffffff"}
                     }
                  />
                  <span
                     style={
                        !theme ? {color: "#000000", borderColor: "#000000"} : {color: "#ffffff", borderColor: "#ffffff"}
                     }
                  />
                  <span
                     style={
                        !theme ? {color: "#000000", borderColor: "#000000"} : {color: "#ffffff", borderColor: "#ffffff"}
                     }
                  />
                  <span className='fab githubSVG' style={!theme ? {color: "#000000", borderColor: "#000000"} : {}}>
                     <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='53' height='53' viewBox='0 0 64 64'>
                        {" "}
                        <path d='M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z' />{" "}
                     </svg>
                  </span>
               </div>
            </a>
         </div>
      </div>
   );
};

export const TooltipZalo = ({nameUser, username, link, text, ui}) => {
   return (
      <div className='tooltip-container tooltip-container-Tooltipfacebook'>
         <div className='tooltip'>
            <div className='profile'>
               <div className='user'>
                  <div className='img'>{ui}</div>
                  <div className='details'>
                     <div className='name'>{nameUser}</div>
                     <div className='username'>@{username}</div>
                  </div>
               </div>
               <div className='about'>Welcome</div>
            </div>
         </div>
         <div className='text'>
            <a className='icon' href={link} target='_blank' rel='noreferrer'>
               <div className='layer'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span className='fab zaloSVG'>
                     <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='53' height='53' viewBox='0 0 48 48'>
                        <path
                           fill='#2962ff'
                           d='M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10 c4.722,0,8.883-2.348,11.417-5.931V36H15z'
                        />
                        <path
                           fill='#eee'
                           d='M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19 c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742 c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083 C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z'
                        />
                        <path
                           fill='#2962ff'
                           d='M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75 S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z'
                        />
                        <path fill='#2962ff' d='M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z' />
                        <path
                           fill='#2962ff'
                           d='M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75 S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5 c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z'
                        />
                        <path
                           fill='#2962ff'
                           d='M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5 c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z'
                        />
                     </svg>
                  </span>
               </div>
            </a>
         </div>
      </div>
   );
};

export const TooltipGmail = ({nameUser, username, link, text, ui}) => {
   return (
      <div className='tooltip-container tooltip-container-TooltipGmail'>
         <div className='tooltip'>
            <div className='profile'>
               <div className='user'>
                  <div className='img'>{ui}</div>
                  <div className='details'>
                     <div className='name'>{nameUser}</div>
                     <div className='username'>@{username}</div>
                  </div>
               </div>
               <div className='about'>Welcome</div>
            </div>
         </div>
         <div className='text'>
            <a className='icon' href={link} target='_blank' rel='noreferrer'>
               <div className='layer'>
                  <span style={{color: "#4caf50", borderColor: "#4caf50"}} />
                  <span style={{color: "#1e88e5", borderColor: "#1e88e5"}} />
                  <span style={{color: "#e53935", borderColor: "#e53935"}} />
                  <span style={{color: "#fbc02d", borderColor: "#fbc02d"}} />
                  <span className='fab gmailSVG'>
                     <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='53' height='53' viewBox='0 0 48 48'>
                        {" "}
                        <path fill='#4caf50' d='M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z'></path>
                        <path fill='#1e88e5' d='M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z'></path>
                        <polygon
                           fill='#e53935'
                           points='35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17'></polygon>
                        <path
                           fill='#c62828'
                           d='M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z'></path>
                        <path
                           fill='#fbc02d'
                           d='M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z'></path>{" "}
                     </svg>
                  </span>
               </div>
            </a>
         </div>
      </div>
   );
};
