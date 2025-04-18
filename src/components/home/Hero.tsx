import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-art-light dark:bg-transparent">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Искусство, которое <span className="text-art-primary">трогает душу</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Добро пожаловать в мою художественную галерею! Я создаю картины, в которых 
            стремлюсь передать красоту окружающего мира и моменты счастья.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-art-primary hover:bg-art-primary/90">
              <Link to="/gallery">Смотреть работы</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Связаться со мной</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/placeholder.svg" 
            alt="Художественная работа" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;