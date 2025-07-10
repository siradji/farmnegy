import Image from "next/image"


function Card({ image, title, content }: { image: any, title: string, content: string }) {

    return (
        <div className="border border-[#e4e4e4] bg-white w-full">
            <Image alt={title} src={image} width={272} height={202} className="w-full" />
            <div className="px-6 pt-3.5 pb-8 flex flex-col text-center items-center justify-center">
                <h4 className="font-bold text-2xl">{title}</h4>
                <p className="my-6 leading-5" dangerouslySetInnerHTML={{ __html: content }} />

                <Image alt={title} src={require("@/assets/icons/quick_more.png")} width={28} height={16} />
            </div>
        </div>
    )
}

export default Card