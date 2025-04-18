import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-art-light dark:bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="text-xl font-semibold text-art-primary mb-4">Влада Охапкина</div>
            <p className="text-muted-foreground max-w-xs">
              Делюсь с вами красотой окружающего мира через свои работы, создаю моменты счастья и истории, которые трогают душу.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="text-lg font-medium">Страницы</div>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-art-primary transition-colors">Главная</Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-art-primary transition-colors">Галерея</Link>
              <Link to="/about" className="text-muted-foreground hover:text-art-primary transition-colors">Обо мне</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-art-primary transition-colors">Контакты</Link>
            </nav>
          </div>
          
          <div className="space-y-3">
            <div className="text-lg font-medium">Контакты</div>
            <div className="text-muted-foreground">
              <p className="mb-2">Для покупки картин свяжитесь со мной</p>
              <p className="mb-2">ВКонтакте: <a href="#" className="text-art-primary hover:underline">Моя страница ВК</a></p>
              <p>Email: art@example.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Влада Охапкина. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;