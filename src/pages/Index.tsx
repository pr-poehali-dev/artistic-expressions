import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import AboutPreview from "@/components/home/AboutPreview";
import Features from "@/components/home/Features";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <AboutPreview />
      <Features />
    </Layout>
  );
};

export default Index;