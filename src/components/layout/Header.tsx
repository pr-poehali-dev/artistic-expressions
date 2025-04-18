import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-semibold text-art-primary">Влада Охапкина</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-art-primary transition-colors">
            Главная
          </Link>
          <Link to="/gallery" className="text-foreground hover:text-art-primary transition-colors">
            Галерея
          </Link>
          <Link to="/about" className="text-foreground hover:text-art-primary transition-colors">
            Обо мне
          </Link>
          <Link to="/contact" className="text-foreground hover:text-art-primary transition-colors">
            Контакты
          </Link>
          <Button variant="default" className="bg-art-primary hover:bg-art-primary/90">
            Заказать картину
          </Button>
        </nav>
        
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-foreground hover:text-art-primary py-2 transition-colors">
                Главная
              </Link>
              <Link to="/gallery" className="text-foreground hover:text-art-primary py-2 transition-colors">
                Галерея
              </Link>
              <Link to="/about" className="text-foreground hover:text-art-primary py-2 transition-colors">
                Обо мне
              </Link>
              <Link to="/contact" className="text-foreground hover:text-art-primary py-2 transition-colors">
                Контакты
              </Link>
              <Button variant="default" className="mt-4 bg-art-primary hover:bg-art-primary/90">
                Заказать картину
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;