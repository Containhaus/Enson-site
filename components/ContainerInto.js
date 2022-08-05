import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";

const ContainerInto = ({ data,className }) => {
  const [width] = windowSize();
const textColor = ()=>{
  if(width < 768 ){
   if(router.asPath === "/burocontainer"){
    return "text-dark"
   }
   if(router.asPath === "/wohncontainer"){
    return "text-dark"
   }
   if(router.asPath === "/sanitar-container"){
    return "text-light"
   }
   if(router.asPath === "/flat-pack"){
    return "text-dark"
   }
   if(router.asPath === "/special-edition"){
    return "text-dark"
   }
  }else{
    if(router.asPath === "/burocontainer"){
      return "text-dark"
     }
    else if(router.asPath === "/wohncontainer"){
      return "text-dark"
     }
     if(router.asPath === "/sanitar-container"){
      return "text-dark"
     }
     if(router.asPath === "/flat-pack"){
      return "text-dark"
     }
     if(router.asPath === "/special-edition"){
      return "text-light"
     }
  }

}
const textColorContent = ()=>{
  if(width < 768 ){
  if(router.asPath === "/"){
    return data.MainpgClass
  }
   if(router.asPath === "/burocontainer"){
    return "text-dark"
   }
   if(router.asPath === "/wohncontainer"){
    return "text-dark"
   }
   if(router.asPath === "/sanitar-container"){
    return "text-light"
   }
   if(router.asPath === "/flat-pack"){
    return "text-dark"
   }
   if(router.asPath === "/special-edition"){
    return "text-dark"
   }
  }else{
    if(router.asPath === "/"){
      return data.MainpgClass
    }
    if(router.asPath === "/burocontainer"){
      return "text-light"
     }
    else if(router.asPath === "/wohncontainer"){
      return "text-dark"
     }
     if(router.asPath === "/sanitar-container"){
      return "text-dark"
     }
     if(router.asPath === "/flat-pack"){
      return "text-dark"
     }
     if(router.asPath === "/special-edition"){
      return "text-light"
     }
  }

}
  const router = useRouter();
  const test = () => {
    if (router.asPath === "/") {
      if (width < 768) {
        return data.mobileImage;
      }
      return data.image;
    } else {
      if (width < 768) {
        return data.mobileImage1;
      }
      return data.image1;
    }
  };


  return (
  
  <>
     <div className="intro-img" style={{ backgroundImage: `url(${test()})` }}>
      
 
       <div className="intro-content">
        <h1 className={`${textColor()} fw-600`}>{data.title.second}</h1>

        <h5 className={`mt-1  ${router.asPath ==="/sanitar-container" || router.asPath === "/special-edition" ? 'text-danger' : "text-danger"}`}>Direkt ab Werk</h5>
         <h5 className={`${textColorContent()} fw-600`}>{data.content.first}</h5>
        <Link href={`${router.asPath === "/" ? data.homeHref:data.href}`}>
           <button className="intro-button">{router.asPath === "/" ? data.homeButton:data.pageButton}</button>
         </Link>
       </div>
     </div>
  
  </>
   
  );
};

export default ContainerInto;
