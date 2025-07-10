import cardImage1 from "@/assets/homepage/last_img_01.jpg"
import cardImage2 from "@/assets/homepage/last_img_02.jpg"
import cardImage3 from "@/assets/homepage/last_img_03.jpg"
import cardImage5 from "@/assets/homepage/last_img_05.jpg"
import Card from "../ui/card"


const cards = [
    {
        image: cardImage1,
        title: "About Company",
        content: "Company creating a happy future<br /> with healthy food culture."
    }, 
    {
        image: cardImage2,
        title: "About Company",
        content: "Company creating a happy future<br /> with healthy food culture."
    }, 
    {
        image: cardImage3,
        title: "About Company",
        content: "Company creating a happy future<br /> with healthy food culture."
    }, 
    {
        image: cardImage5,
        title: "About Company",
        content: "Company creating a happy future<br /> with healthy food culture."
    }
]

function CardsSection() {

    return (
        <section className={`p-8`}>
            <div className="flex gap-6 sm:flex-row flex-col">
                {cards.map((card, index) => (
                    <Card key={index} content={card.content} image={card.image} title={card.title} />
                ))}
            </div>
        </section>
    )
}

export default CardsSection