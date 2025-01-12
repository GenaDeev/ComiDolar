import { useCallback } from "react";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const CarouselElement: React.FC = () => {
  const options: EmblaOptionsType = { loop: true };
  const slides: string[] = [
    "https://comidolar.com.ar/assets/img/wide-c.webp",
    "https://comidolar.com.ar/assets/img/colegio.webp",
    "https://comidolar.com.ar/assets/img/mundialbanner.webp",
    "https://comidolar.com.ar/assets/img/colegio2.webp",
  ];

  // Initialize Embla carousel with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (autoplay) {
      const action =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;
      action();
    }
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section
      className="embla"
      style={{
        width: "100%",
        height: "200px",
        marginBottom: "8px",
        position: "relative",
      }}
    >
      <div
        className="embla__viewport"
        style={{ overflow: "hidden", width: "100%", height: "100%" }}
        ref={emblaRef}
      >
        <div
          className="embla__container"
          style={{
            display: "flex",
            transition: "transform 0.3s ease",
            height: "100%",
          }}
        >
          {slides.map((slide, index) => (
            <div
              className="embla__slide"
              style={{ position: "relative", flex: "0 0 100%" }}
              key={`slide-${index}`}
            >
              <img
                className="w-full h-full object-cover bg-zinc-200 dark:bg-darkless rounded-xl"
                src={slide}
                alt={`Imagen número ${index + 1} del carrusel`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="embla__controls"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
          justifySelf: "end",
        }}
      >
        <div className="embla__dots" style={{ display: "flex", gap: "0.5rem" }}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={`dot-${index}`}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot border-2 ${
                index === selectedIndex
                  ? "embla__dot--selected border-green-500"
                  : " border-zinc-200 dark:border-darkless"
              }`}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselElement;
