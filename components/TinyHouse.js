import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from "next/image";
const ContainerInto = ({ data, className }) => {
    const [width] = windowSize();
  
  
    const router = useRouter();
  
    return (
        <>
            <div className="intro-img">
                <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition=" center"
                    src={width < 768 ? data.mobileImage: data.image}
                    
                    priority
                />
                <div className="intro-content ">
                    <h1 className={`${width < 768?data.mobileTitleColor: data.titleColor} fw-600`}>{data.title.second}</h1>
                    <h5 className={`${data.direktColor} mt-1 fw-600`}>Direkt ab Werk</h5>
                    <h5 className={` fw-400`}>{data.content.first}</h5>
                    <Link href={`${router.asPath === "/" ? data.homeHref : data.href}`}>
                        <button className="intro-button ">{router.asPath === "/" ? data.homeButton : data.pageButton}</button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default ContainerInto;