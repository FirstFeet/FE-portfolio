import c_1 from "../public/assets/images/team/certificate1.jpg";
import c_2 from "../public/assets/images/team/certificate2.jpg";
import c_3 from "../public/assets/images/team/certificate3.webp";

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

export const achievments=[
    {title:"First", description:"This is first card. Here are the biggest enterprise technology acquisitions of 2021 order",imageTop:true,image:c_1},
    {title:"Second",description:"This is Second card. Here are the biggest enterprise technology acquisitions of 2021 order",imageTop:true,image:c_2},
    {title:"Third",description:"This is Third card",imageTop:true,image:c_3},
    {title:"Fourth",description:"This is Fourth card",imageTop:true,image:c_1}];

export const API_URL = "https://api-portfolio-ten.vercel.app";