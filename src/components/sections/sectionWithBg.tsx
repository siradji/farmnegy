"use client";

import { User } from "lucide-react";
import Image from "next/image"


function SectionWithBg({ bgUrl, subtitle, title, description, icons }: { bgUrl: any, subtitle: string, title: string, description: string, icons?: Array<{
    name: string,
    image: any
}> }) {

    return (
        <section style={{ backgroundImage: `url(${bgUrl})` }} className={`bg-no-repeat bg-cover relative h-screen w-full`}>
            <div className="absolute inset-0 z-10 bg-black/60 backdrop-brightness-90 shadow-inner"></div>
            <div className="flex text-center pt-20 px-8 flex-col z-20 relative h-full w-full justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <span className="uppercase text-3xl text-white mb-2">{subtitle}</span>
                    <div className="w-10 h-px bg-white" />
                </div>
                <h2 className="text-white capitalize leading-[1.2em]  font-light text-7xl my-8 w-[90%]">{title}</h2>
                <p className="text-2xl text-white" dangerouslySetInnerHTML={{ __html: description }} />
                <a className="mt-8 flex flex-col justify-center items-center  absolute top-[80%] left-1/2 " href="">
                    <span className="uppercase text-sm text-white mb-1">Scroll</span>
                    <Image alt="Arrow Down" src={require("@/assets/icons/btn_down.png")} width={15} height={35} />
                </a>
                <div className="flex gap-20 mt-20">
                    {icons?.map(({ name, image: Image }, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <Image size={60} color="white" />
                            <p className="uppercase text-2xl mt-8 text-white" dangerouslySetInnerHTML={{ __html: name }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionWithBg