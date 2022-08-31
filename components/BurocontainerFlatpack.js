import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from 'next/image';
const BurocontainerFlatpack = ({ data }) => {
    const [width] = windowSize();
    return (
        <>
            <div className="intro-img" >
                <Image
                    width={1920}
                    height={1080}
                    objectFit="cover"
                    objectPosition=" center"
                    src={width > 768 ? data.image1 : data.mobileImage1}
                    priority
                />
                <div className='MainPgFlatPack'>
                    <div className='bg-light p-5'>
                        <div >
                        <p className='ResFontSi'>
                            Die sehr einfach montierende <br/><b>Flat-Pack Container,</b> werden an die<br/> Montageorte geliefert.
                        </p>
                        <p className='ResFontSi'>
                            <b>Flatpack-Container,</b> die aus<br/> Boden-, Decken-, Fenster-, Tür- und<br/> Sandwichpaneelen bestehen und <br/>sich leicht zusammenfügen lassen,<br/> können vom Endnutzer leicht<br/> zusammengebaut werden.<br/><b> Flatpack ist eine großartige<br/> Gelegenheit für alle,<br/>
                            die günstigere Preise wollen!</b>
                        </p>
                        <div className='text-center'>
                        <Link href={`${data.href}`}>
                            <button className="btn btn-dark btnglow">JETZT ZUM SHOP</button>
                        </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='FlatPackHP text-left '>
                    <h1 className='fw-600'>FlatPack</h1>
                    <h4 className='fw-600'>Bau dein Container selbst</h4>
                </div>
            </div>
        </>
    )
}
export default BurocontainerFlatpack