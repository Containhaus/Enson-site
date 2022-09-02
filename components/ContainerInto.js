import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from "next/image";
const ContainerInto = ({ data, className }) => {
  const [width] = windowSize();
  const router = useRouter();
  const test = () => {
    if (router.asPath === "/burocontainer") {
      if (width < 768) {
        return data.mobileImage1;
      }
      return data.image;
    } else {
      if (width < 768) {
        return data.mobileImage1;
      }
      return data.image;
    }
  };
  return (
    <>
      <div className="intro-img container-fluid p-0">
        <Image
          width={1920}
          height={1080}
          objectFit="cover"
          objectPosition=" center"
          quality={80}
          
          src={test()}
        />
        <div className="intro-content  mx-3">
          <h1 className={`text-dark mb-0 fw-600`}>{data.title.second}</h1>
          <h5 className={`mt-1 fw-500`}>Direkt ab Werk</h5>
          <Link href={`${router.asPath === "/" ? data.homeHref : data.href}`}>
            <button className="intro-button ">{router.asPath === "/" ? data.homeButton : data.pageButton}</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ContainerInto;
