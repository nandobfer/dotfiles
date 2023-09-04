import React from "react"
import { Carousel } from "react-responsive-carousel"

interface CarouselContainerProps {}

export const CarouselContainer: React.FC<CarouselContainerProps> = ({}) => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop={true} interval={7000} transitionTime={1000}>
            {images
                .filter((image) => image != "")
                .map((image) => (
                    <div key={images.indexOf(image)} className="image" style={{ width: "100%" }}>
                        <img src={image} alt={image} />
                    </div>
                ))}
        </Carousel>
    )
}
