import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Имитация данных о картинах
const artworks = [
  {
    id: 1,
    title: "Летний пейзаж",
    category: "landscapes",
    description: "Акварель, 30x40 см",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Букет полевых цветов",
    category: "flowers",
    description: "Акварель, 20x30 см",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Портрет кота",
    category: "animals",
    description: "Акварель, 25x25 см",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Осенний лес",
    category: "landscapes",
    description: "Акварель, 35x45 см",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Розы в вазе",
    category: "flowers",
    description: "Акварель, 30x40 см",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Лиса в лесу",
    category: "animals",
    description: "Акварель, 28x36 см",
    image: "/placeholder.svg"
  }
];

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredArtworks = selectedCategory === "all" 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <div className="container py-12">
      <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">Все работы</TabsTrigger>
            <TabsTrigger value="landscapes">Пейзажи</TabsTrigger>
            <TabsTrigger value="flowers">Цветы</TabsTrigger>
            <TabsTrigger value="animals">Животные</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value={selectedCategory} className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((artwork) => (
              <Dialog key={artwork.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group">
                    <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium text-lg">{artwork.title}</h3>
                    <p className="text-muted-foreground text-sm">{artwork.description}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2">{artwork.title}</h2>
                        <p className="text-muted-foreground mb-4">{artwork.description}</p>
                        <p className="mb-6">
                          Картина выполнена с особым вниманием к деталям, что позволяет ощутить
                          глубину и настроение изображенного сюжета.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Для заказа данной работы свяжитесь со мной через социальные сети или по электронной почте.
                        </p>
                        <a 
                          href="#" 
                          className="inline-block px-4 py-2 rounded-md bg-art-primary text-white hover:bg-art-primary/90 text-sm"
                        >
                          Связаться для покупки
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GalleryGrid;