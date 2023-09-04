import React from "react"
import { Carousel } from "react-responsive-carousel"

interface CarouselContainerProps {}

export const CarouselContainer: React.FC<CarouselContainerProps> = ({}) => {
    const images = [
        "https://imagens-cdn.canalrural.com.br/wp-content/uploads/safra-do-ibge-2023-erdenrson-araujo-trilux-cna.jpg",
        "https://www.portaldoagronegocio.com.br/img/cache/cover//storage/images/notices/607452f8cbeeb.jpg",
    ]
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
