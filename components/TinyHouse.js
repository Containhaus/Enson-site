import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from "next/image";
const ContainerInto = ({ data, className }) => {
    const [width] = windowSize();
    const textColor = () => {
        if (width < 768) {
            if (router.asPath === "/mybigfamily") {
                return "text-light"
            }
            if (router.asPath === "/amazingCountary") {
                return "text-light"
            }
            if (router.asPath === "/feelGood") {
                return "text-light"
            }
            if (router.asPath === "/freedom") {
                return "text-light"
            }
            if (router.asPath === "/MyLittleFamily") {
                return "text-light"
            }
            if (router.asPath === "/Spectecular") {
                return "text-light"
            }
        } else {
            if (router.asPath === "/mybigfamily") {
                return "text-light"
            }
            else if (router.asPath === "/amazingCountary") {
                return "text-light"
            }
            if (router.asPath === "/feelGood") {
                return "text-light"
            }
            if (router.asPath === "/freedom") {
                return "text-light"
            }
            if (router.asPath === "/MyLittleFamily") {
                return "text-light"
            }
            if (router.asPath === "/Spectecula") {
                return "text-light"
            }
        }
    }
    const textColorContent = () => {
        if (width < 768) {
            if (router.asPath === "/") {
                return data.MainpgClass
            }
            if (router.asPath === "/mybigfamily") {
                return "text-light"
            }
            if (router.asPath === "/amazingCountary") {
                return "text-light"
            }
            if (router.asPath === "/feelGood") {
                return "text-light"
            }
            if (router.asPath === "/freedom") {
                return "text-light"
            }
            if (router.asPath === "/MyLittleFamily") {
                return "text-light"
            }
            if (router.asPath === "/Spectecular") {
                return "text-light"
            }
        } else {
            if (router.asPath === "/") {
                return data.MainpgClass
            }
            if (router.asPath === "/mybigfamily") {
                return "text-light"
            }
            else if (router.asPath === "/amazingCountary") {
                return "text-light"
            }
            if (router.asPath === "/feelGood") {
                return "text-light"
            }
            if (router.asPath === "/freedom") {
                return "text-light"
            }
            if (router.asPath === "/MyLittleFamily") {
                return "text-light"
            }
            if (router.asPath === "/Spectecular") {
                return "text-light"
            }
        }

    }
    const textColorContentDirekt = () => {
        if (width < 768) {
            if (router.asPath === "/") {
                return "text-danger"
            }
            if (router.asPath === "/mybigfamily") {
                return "text-danger"
            }
            if (router.asPath === "/amazingCountary") {
                return "text-danger"
            }
            if (router.asPath === "/feelGood") {
                return "text-danger"
            }
            if (router.asPath === "/freedom") {
                return "text-light"
            }
            if (router.asPath === "/MyLittleFamily") {
                return "text-danger"
            }
            if (router.asPath === "/Spectecular") {
                return "text-danger"
            }
        } else {
            if (router.asPath === "/") {
                return "text-danger"
            }
            if (router.asPath === "/mybigfamily") {
                return "text-danger"
            }
            else if (router.asPath === "/amazingCountary") {
                return "text-danger"
            }
            if (router.asPath === "/feelGood") {
                return "text-danger"
            }
            if (router.asPath === "/freedom") {
                return "text-light"
            }
            if (router.asPath === "/MyLittleFamily") {
                return "text-light"
            }if (router.asPath === "/Spectecular") {
                return "text-light"
            }
        }
    }
    const router = useRouter();
    const test = () => {
        if (router.asPath === "/") {


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
            <div className="intro-img">
                <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition=" center"
                    src={data.image}
                    priority
                />
                <div className="intro-content ">
                    <h1 className={`${data.titleColor} fw-600`}>{data.title.second}</h1>
                    <h5 className={`mt-1 text-light fw-600`}>Direkt ab Werk</h5>
                    <h5 className={`${textColorContent()} fw-400`}>{data.content.first}</h5>
                    <Link href={`${router.asPath === "/" ? data.homeHref : data.href}`}>
                        <button className="intro-button ">{router.asPath === "/" ? data.homeButton : data.pageButton}</button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default ContainerInto;
