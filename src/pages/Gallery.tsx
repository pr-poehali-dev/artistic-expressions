import Layout from "@/components/layout/Layout";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const Gallery = () => {
  return (
    <Layout>
      <div className="bg-art-light dark:bg-transparent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4">Галерея работ</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Здесь представлены мои работы в различных техниках и стилях. Каждая картина создана с любовью к искусству
            и стремлением передать красоту окружающего мира.
          </p>
        </div>
      </div>
      
      <GalleryGrid />
    </Layout>
  );
};

export default Gallery;