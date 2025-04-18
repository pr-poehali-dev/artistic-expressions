import Layout from "@/components/layout/Layout";
import { Palette, Brush, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="bg-art-light dark:bg-transparent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4">Обо мне</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Познакомьтесь с моей историей, творческим путем и подходом к искусству
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/placeholder.svg" 
              alt="Художник за работой" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Моя история</h2>
            <p className="text-muted-foreground">
              Искусство всегда было частью моей жизни. С раннего детства я проявляла интерес к рисованию,
              и со временем это увлечение переросло в настоящую страсть. В своих работах я стремлюсь передать
              красоту окружающего мира, моменты счастья и истории, которые трогают душу.
            </p>
            <p className="text-muted-foreground">
              Мои картины созданы для тех, кто ценит искренность, ищет вдохновение и хочет окружить себя прекрасным.
              Я постоянно совершенствую свои навыки, экспериментирую с различными техниками и материалами.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <Palette className="w-10 h-10 text-art-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Материалы</h3>
            <p className="text-muted-foreground">
              Я работаю различными материалами, но в основном предпочитаю акварель за её прозрачность, чистоту и способность
              передавать тончайшие оттенки и настроения.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <Brush className="w-10 h-10 text-art-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Стиль</h3>
            <p className="text-muted-foreground">
              Мой стиль можно описать как реалистичный с элементами импрессионизма. Я стремлюсь к тому, чтобы каждая картина
              рассказывала свою уникальную историю и вызывала эмоции.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <Award className="w-10 h-10 text-art-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Достижения</h3>
            <p className="text-muted-foreground">
              Мои работы нашли свое место в частных коллекциях ценителей искусства. Я также участвовала в нескольких
              местных выставках, где мои картины получили положительные отзывы.
            </p>
          </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Мой творческий процесс</h2>
          <p>
            Вдохновение для моих работ я черпаю из окружающего мира - прогулок на природе, путешествий, интересных встреч. 
            Перед началом работы я делаю эскизы, подбираю цветовую палитру, продумываю композицию.
          </p>
          <p>
            Для меня важно не просто технически правильно изобразить объект, но передать его суть, настроение, атмосферу.
            Я уделяю особое внимание деталям, которые делают каждую работу уникальной и живой.
          </p>
          <p>
            Мне нравится экспериментировать с цветом и светом, искать новые способы передачи текстуры и объема.
            Иногда я комбинирую акварель с другими материалами для создания интересных эффектов.
          </p>
          
          <h2>Темы моих работ</h2>
          <p>
            В моем творчестве преобладают следующие темы:
          </p>
          <ul>
            <li><strong>Пейзажи</strong> - изображение природы в разное время года, городские виды</li>
            <li><strong>Цветы и растения</strong> - ботанические зарисовки, цветочные композиции</li>
            <li><strong>Животные</strong> - портреты домашних питомцев, дикие животные в естественной среде</li>
            <li><strong>Натюрморты</strong> - композиции с фруктами, едой, предметами быта</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;