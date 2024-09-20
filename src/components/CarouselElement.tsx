import { Carousel } from "flowbite-react";

export default function CarouselElement() {
    const images: string[] = [
        "https://comidolar.com.ar/assets/img/wide.webp",
        "https://comidolar.com.ar/assets/img/colegio.webp",
        "https://comidolar.com.ar/assets/img/mundiallogo.webp",
        "https://comidolar.com.ar/assets/img/colegio2.webp"
    ]

    return (
        <Carousel className="bg-neutral-300 dark:bg-neutral-700 rounded-xl p-2 fb-carousel">
            {
                images.map(
                    image =>
                        <img
                            key={'Imagen del carousel: ' + image.split('/')[3].split('.')[0]}
                            className="carousel-image object-contain"
                            src={image} alt="Imagen del Carousel de ComiDolar">
                        </img>
                )
            }
        </Carousel>
    )
}