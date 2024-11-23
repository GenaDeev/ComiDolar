import { Carousel } from "flowbite-react";

export default function CarouselElement() {
    const images: string[] = [
        "https://comidolar.com.ar/assets/img/wide-c.webp",
        "https://comidolar.com.ar/assets/img/colegio.webp",
        "https://comidolar.com.ar/assets/img/mundialbanner.webp",
        "https://comidolar.com.ar/assets/img/colegio2.webp"
    ]

    return (
        <Carousel className="bg-zinc-300 dark:bg-darkless rounded-xl p-2 fb-carousel">
            {
                images.map(
                    image =>
                        <img
                            key={'Imagen del carousel: ' + image.split('/')[3].split('.')[0]}
                            className="carousel-image object-cover h-full"
                            src={image} alt="Imagen del Carousel de ComiDolar">
                        </img>
                )
            }
        </Carousel>
    )
}
