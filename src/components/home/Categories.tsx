import { Link } from "react-router-dom";

const categories = [
  {
    id: "landscapes",
    title: "Пейзажи",
    description: "Красота природы в разное время года",
    image: "/placeholder.svg"
  },
  {
    id: "flowers",
    title: "Цветы и растения",
    description: "Яркие и нежные цветочные композиции",
    image: "/placeholder.svg"
  },
  {
    id: "animals",
    title: "Животные",
    description: "Портреты домашних и диких животных",
    image: "/placeholder.svg"
  }
];

const Categories = () => {
  return (
    <section className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-12">Мои работы по категориям</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={`/gallery?category=${category.id}`}
            className="group"
          >
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="text-white text-xl font-medium p-4">{category.title}</h3>
              </div>
            </div>
            <p className="text-muted-foreground">{category.description}</p>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Link 
          to="/gallery" 
          className="inline-flex items-center text-art-primary hover:underline font-medium"
        >
          Смотреть все работы
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Categories;