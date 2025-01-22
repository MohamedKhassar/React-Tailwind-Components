import { FiHeart } from "react-icons/fi"
import ImageCard from "./ImageCard"
import { BiBookmark } from "react-icons/bi"
import { SlShare } from "react-icons/sl"

const Card = () => {
    const cardData = [
        "https://images.pexels.com/photos/30309178/pexels-photo-30309178/free-photo-of-vibrant-parrot-perched-on-a-balcony-railing.jpeg",
    ]
    return (
        <div className="flex flex-wrap items-start justify-between gap-7 m-7">
            {cardData.map((card, i) =>
                <ImageCard key={i} imgSrc={card}>
                    <h1 className="text-xl">Lorem ipsum</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel semper neque, sed viverra velit. Donec vel condimentum nunc. Nullam tincidunt, justo vitae bibendum finibus, velit ligula euismod purus, at pellentesque odio felis nec enim. Donec vel lectus in felis consectetur condimentum.</p>
                    <div className="space-x-4">
                        <button className="p-3 bg-stone-500/50 rounded-md hover:bg-stone-500/80 backdrop-blur-lg"><FiHeart className="size-4" /></button>
                        <button className="p-3 bg-stone-500/50 rounded-md hover:bg-stone-500/80 backdrop-blur-lg"><BiBookmark className="size-4" /></button>
                        <button className="p-3 bg-stone-500/50 rounded-md hover:bg-stone-500/80 backdrop-blur-lg"><SlShare className="size-4" /></button>
                    </div>
                </ImageCard>
            )}
        </div>
    )
}

export default Card