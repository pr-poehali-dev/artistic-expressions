import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Качественные материалы",
    description: "Использую только высококачественные художественные материалы для создания долговечных работ"
  },
  {
    title: "Индивидуальный подход",
    description: "Каждое произведение создается с особым вниманием к деталям и индивидуальным стилем"
  },
  {
    title: "Возможность заказа",
    description: "Принимаю заказы на создание картин по вашим пожеланиям и предпочтениям"
  }
];

const Features = () => {
  return (
    <section className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-12">Преимущества моих работ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-art-primary" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;