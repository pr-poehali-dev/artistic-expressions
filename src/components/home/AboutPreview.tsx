import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-art-light dark:bg-transparent">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/placeholder.svg" 
              alt="Художник за работой" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight">
              О моем творческом пути
            </h2>
            <p className="text-muted-foreground">
              Мое хобби - рисование. В своих работах я стремлюсь передать красоту окружающего мира, 
              моменты счастья, истории, которые трогают душу. Мои картины созданы для тех, кто 
              ценит искренность, ищет вдохновение и хочет окружить себя прекрасным.
            </p>
            <p className="text-muted-foreground">
              Я работаю различными материалами, но в основном акварелью. Рисую на разные темы: 
              пейзажи, цветы, растения, животные, еда и многое другое.
            </p>
            <div className="pt-2">
              <Button asChild className="bg-art-primary hover:bg-art-primary/90">
                <Link to="/about">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;