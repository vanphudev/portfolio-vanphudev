import React from "react";
import {Helmet} from "react-helmet";

const MyComponent = () => (
   <>
      <Helmet>
         <meta
            property='og:description'
            content="Welcome to my portfolio. I'm Nguyễn Văn Phú, a Frontend Developer. Here, you can explore my work in Information Technology. Feel free to reach out if you have any questions."
         />
         <meta property='og:image' content='https://www.vanphudev.id.vn/Image_Personal.jpg' />
         <meta property='og:image:alt' content='Nguyễn Văn Phú - vanphudev' />
         <meta property='og:url' content='https://www.vanphudev.id.vn' />
         <meta property='og:site_name' content='www.vanphudev.id.vn' />
         <meta property='og:type' content='website' />
         <meta property='og:locale' content='vi_VN' />
         <meta property='og:locale:alternate' content='en_US' />
         <meta property='article:author' content='Nguyễn Văn Phú - vanphudev - www.vanphudev.id.vn' />
         <meta property='article:published_time' content='August, 2024' />
         <meta
            name='keywords'
            content='Nguyễn Văn Phú, vanphudev, Frontend Developer, Information Technology, Portfolio, HUIT, HUFI'
         />
         <link rel='canonical' href='https://vanphudev.id.vn' />
         <meta name='robots' content='index, follow' />
         <meta itemprop='name' content='vanphudev - Nguyễn Văn Phú' />
         <meta name='googlebot' content='index, follow' />
         <meta name='bingbot' content='index, follow' />
         <meta
            itemprop='description'
            content='Nguyễn Văn Phú - Portfolio vanphudev - Frontend Developer - Information Technology'
         />
         <meta itemprop='image' content='https://www.vanphudev.id.vn/Image_Personal.jpg' />
         <meta name='geo.region' content='VN-SG' />
         <meta name='geo.placename' content='Ho Chi Minh City' />
         <meta name='geo.position' content='10.754792;106.6952276' />
         <meta name='ICBM' content='10.754792, 106.6952276' />
         <meta property='article:publisher' content='https://www.facebook.com/vanphu.huit' />
         <meta property='article:author' content='https://www.facebook.com/vanphu.huit' />
         <meta property='article:section' content='Portfolio' />
         <meta property='article:tag' content='Nguyễn Văn Phú' />
         <meta property='article:tag' content='vanphudev' />
         <meta property='article:tag' content='Frontend Developer' />
         <meta property='article:tag' content='Information Technology' />
         <meta property='article:tag' content='Portfolio' />
         <meta property='article:tag' content='HUIT' />
         <meta property='article:tag' content='HUFI' />
         <meta property='article:tag' content='HTML' />
         <meta property='article:tag' content='CSS' />
         <meta property='article:tag' content='JavaScript' />
         <meta property='article:tag' content='ReactJS' />
         <meta property='article:tag' content='NodeJS' />
         <meta property='article:tag' content='MySQL' />
         <meta property='article:tag' content='PHP' />
         <meta property='article:tag' content='Laravel' />
         <meta property='article:tag' content='Bootstrap' />
         <script type='application/ld+json'>
            {`
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "vanphudev - Nguyễn Văn Phú",
            "description": "Welcome to my portfolio. I'm Nguyễn Văn Phú, a Frontend Developer. Here, you can explore my work in Information Technology. Feel free to reach out if you have any questions.",
            "url": "https://www.vanphudev.id.vn",
            "inLanguage": "vi"
          }
        `}
         </script>
      </Helmet>
      {/* Your component content */}
   </>
);

export default MyComponent;
