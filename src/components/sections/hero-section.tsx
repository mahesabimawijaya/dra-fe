import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { imgUrls } from "@/data/data";
import Image from "next/image";
import { Button } from "../ui/button";
import { Camera, Clapperboard, Gamepad2, Music, Pizza } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="w-full md:px-10 flex flex-col items-center md:pt-10 overflow-x-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-screen-xl h-[60vh] rounded-lg"
      >
        <CarouselContent>
          {imgUrls.map((imgUrl, index) => (
            <CarouselItem key={index}>
              <div className="w-full relative h-[60vh] md:rounded-lg">
                <Image src={`/${imgUrl}`} alt="hero-1" fill className="object-cover object-center md:rounded-lg brightness-50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute flex flex-col top-1/4 left-10 lg:left-30 text-white gap-10 max-w-50 lg:max-w-80">
          <h1 className="text-3xl lg:text-[45px] leading-10 lg:leading-14 font-bold">Same Faces, New Stories</h1>
          <Link href={"#pricing"} className="w-fit">
            <Button className="w-fit bg-white text-black hover:text-white hover:bg-black cursor-pointer">Register Now</Button>
          </Link>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <section id="services" className="flex items-center flex-wrap justify-center gap-x-14 gap-y-3 lg:gap-20 py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="p-5 rounded-full border shadow-md">
            <Music />
          </div>
          <h3>Music</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="p-5 rounded-full border shadow-md">
            <Pizza />
          </div>
          <h3>Food</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="p-5 rounded-full border shadow-md">
            <Gamepad2 />
          </div>
          <h3>Games</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="p-5 rounded-full border shadow-md">
            <Camera />
          </div>
          <h3>Photos</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="p-5 rounded-full border shadow-md">
            <Clapperboard />
          </div>
          <h3>Entertainment</h3>
        </div>
      </section>
    </section>
  );
}
