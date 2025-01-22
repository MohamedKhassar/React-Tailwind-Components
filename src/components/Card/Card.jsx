import { FiHeart } from "react-icons/fi"
import ImageCard from "./ImageCard"
import { BiBookmark } from "react-icons/bi"
import { SlShare } from "react-icons/sl"

const Card = () => {
    const cardData = [
        "https://images.pexels.com/photos/30309178/pexels-photo-30309178/free-photo-of-vibrant-parrot-perched-on-a-balcony-railing.jpeg",
        "https://images.pexels.com/photos/17779696/pexels-photo-17779696/free-photo-of-grassland-over-lake.jpeg",
        "https://images.pexels.com/photos/28034420/pexels-photo-28034420/free-photo-of-a-small-green-bird-sitting-on-a-branch.jpeg",
        "https://images.pexels.com/photos/10885310/pexels-photo-10885310.jpeg",
        "https://images.pexels.com/photos/30322719/pexels-photo-30322719/free-photo-of-swallowtail-butterfly-on-lavender-bloom.jpeg",
        "https://images.pexels.com/photos/6249418/pexels-photo-6249418.jpeg",
        "https://images.pexels.com/photos/6249418/pexels-photo-6249418.jpeg",
        "https://images.pexels.com/photos/30320508/pexels-photo-30320508/free-photo-of-abstract-floral-blur-with-vibrant-iris-flowers.jpeg"
    ]
    return (
        <div className="flex flex-wrap items-start justify-between m-7 space-y-4">
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