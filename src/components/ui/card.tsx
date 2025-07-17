import Image, { StaticImageData } from "next/image"

import quick_more from "@/assets/icons/quick_more.png"


function Card({ image, title, content }: { image: StaticImageData, title: string, content: string }) {

    return (
        <div className="border border-[#e4e4e4] bg-white w-full">
            <Image alt={title} src={image} width={272} height={202} className="w-full" />
            <div className="md:px-6 px-4 pt-3.5 pb-8 flex flex-col text-center items-center justify-center">
                <h4 className="font-bold text-base md:text-2xl">{title}</h4>
                <p className="md:my-6 !my-3 leading-5 md:text-base text-sm" dangerouslySetInnerHTML={{ __html: content }} />

                <Image alt={title} src={quick_more} className="md:h-4 md:w-7 w-4 h-2" width={28} height={16} />
            </div>
        </div>
    )
}

export default Card