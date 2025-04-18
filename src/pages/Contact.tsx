import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет логика отправки формы
    alert("Сообщение отправлено! Я свяжусь с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="bg-art-light dark:bg-transparent py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4">Связаться со мной</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Если вы заинтересованы в покупке моих работ или хотите заказать картину, 
            пожалуйста, заполните форму ниже или свяжитесь со мной через социальные сети.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Напишите мне</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Ваше имя</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Электронная почта</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Сообщение</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Расскажите, что вас интересует"
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full bg-art-primary hover:bg-art-primary/90">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Контактная информация</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-art-primary" />
                <div>
                  <h3 className="font-medium">Электронная почта</h3>
                  <p className="text-muted-foreground">art@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-art-primary" />
                <div>
                  <h3 className="font-medium">Телефон</h3>
                  <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-art-primary" />
                <div>
                  <h3 className="font-medium">Город</h3>
                  <p className="text-muted-foreground">Москва, Россия</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-art-primary text-white hover:bg-art-primary/90"
                  aria-label="ВКонтакте"
                >
                  VK
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-art-primary text-white hover:bg-art-primary/90"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-art-primary text-white hover:bg-art-primary/90"
                  aria-label="Telegram"
                >
                  TG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;