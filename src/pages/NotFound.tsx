import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-art-light dark:bg-transparent p-4">
      <h1 className="text-5xl font-bold text-art-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Страница не найдена</h2>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Похоже, вы пытаетесь найти страницу, которая не существует или была перемещена.
      </p>
      <Button asChild className="bg-art-primary hover:bg-art-primary/90">
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
};

export default NotFound;