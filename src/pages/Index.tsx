import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">М</span>
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight">МИЦ «МЕДСПЛАВ»</h1>
                <p className="text-xs text-muted-foreground">Инновации в NiTi</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {['Главная', 'Продукция', 'Технологии', 'Преимущества', 'О компании', 'Сертификаты', 'Партнеры', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="md:hidden" size="icon" variant="ghost">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Инновационные решения из{' '}
                <span className="text-gradient">никелида титана</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Высокотехнологичное производство изделий из сплавов с памятью формы для медицинской промышленности
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection('продукция')}>
                  Наша продукция
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('контакты')}>
                  Связаться с нами
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">партнеров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">качество</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/834e3ad5-9fd4-4445-91e1-3ef52af15474/files/1688c8b0-e42f-4ad6-a3aa-ac52c3bc375c.jpg"
                alt="Никелид титана"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="продукция" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент изделий из никелида титана для различных областей медицины
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Activity',
                title: 'Медицинские инструменты',
                description: 'Хирургические инструменты с эффектом памяти формы для минимально инвазивных операций'
              },
              {
                icon: 'Heart',
                title: 'Кардиология',
                description: 'Стенты, фильтры и окклюдеры для эндоваскулярной хирургии'
              },
              {
                icon: 'Bone',
                title: 'Ортопедия',
                description: 'Импланты и фиксаторы для остеосинтеза с уникальными свойствами'
              },
              {
                icon: 'Smile',
                title: 'Стоматология',
                description: 'Ортодонтические дуги и инструменты с суперэластичностью'
              },
              {
                icon: 'Microscope',
                title: 'Эндоскопия',
                description: 'Гибкие инструменты для эндоскопических вмешательств'
              },
              {
                icon: 'ShieldCheck',
                title: 'Специальные изделия',
                description: 'Разработка индивидуальных решений под ваши задачи'
              }
            ].map((product, index) => (
              <AnimatedSection key={index}>
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={product.icon} size={32} className="text-white" />
                </div>
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="технологии" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src="https://cdn.poehali.dev/projects/834e3ad5-9fd4-4445-91e1-3ef52af15474/files/0cad19ae-be60-4d17-9720-15cbc99e6ac4.jpg"
                alt="Производство"
                className="rounded-3xl shadow-2xl"
              />
            </AnimatedSection>
            <AnimatedSection className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Передовые технологии производства</h2>
              <p className="text-xl text-muted-foreground">
                Используем современное оборудование и инновационные методы обработки сплавов
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: 'Zap',
                    title: 'Вакуумная плавка',
                    description: 'Получение сплавов высочайшей чистоты'
                  },
                  {
                    icon: 'Cpu',
                    title: 'Прецизионная обработка',
                    description: 'Точность до микронов на автоматизированных линиях'
                  },
                  {
                    icon: 'Thermometer',
                    title: 'Термообработка',
                    description: 'Программирование эффекта памяти формы'
                  },
                  {
                    icon: 'TestTube',
                    title: 'Контроль качества',
                    description: 'Многоступенчатая система проверки'
                  }
                ].map((tech, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={tech.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{tech.title}</h4>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-blue-600/5">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Преимущества работы с МИЦ «МЕДСПЛАВ»
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: 'Award',
                title: 'Качество',
                description: 'ISO сертификация и международные стандарты'
              },
              {
                icon: 'Rocket',
                title: 'Инновации',
                description: 'Собственный R&D центр и лаборатория'
              },
              {
                icon: 'Clock',
                title: 'Оперативность',
                description: 'Короткие сроки производства и доставки'
              },
              {
                icon: 'Users',
                title: 'Поддержка',
                description: 'Техническая помощь на всех этапах'
              }
            ].map((advantage, index) => (
              <AnimatedSection key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Icon name={advantage.icon} size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="о компании" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">О компании</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-xl leading-relaxed">
                ООО «МИЦ «МЕДСПЛАВ» — ведущий российский производитель изделий из никелида титана (NiTi). 
                Мы специализируемся на разработке и производстве медицинских изделий из сплавов с эффектом памяти формы.
              </p>
              <p className="text-xl leading-relaxed">
                Наша миссия — обеспечение медицинских учреждений высокотехнологичными инструментами и имплантатами, 
                которые улучшают качество лечения и жизни пациентов.
              </p>
            </div>
            <div className="relative mt-12">
              <img
                src="https://cdn.poehali.dev/projects/834e3ad5-9fd4-4445-91e1-3ef52af15474/files/c898d582-d092-4f18-97d2-2482e1814631.jpg"
                alt="О компании"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="сертификаты" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Сертификаты и лицензии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наша продукция соответствует всем международным стандартам качества
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'FileCheck', title: 'ISO 9001', description: 'Система менеджмента качества' },
              { icon: 'ShieldCheck', title: 'ISO 13485', description: 'Медицинские изделия' },
              { icon: 'BadgeCheck', title: 'CE Mark', description: 'Европейский сертификат' },
              { icon: 'Award', title: 'FDA', description: 'Регистрация в США' }
            ].map((cert, index) => (
              <AnimatedSection key={index}>
                <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={32} className="text-primary" />
                </div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="партнеры" className="py-20 px-6">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши партнеры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы сотрудничаем с ведущими медицинскими учреждениями и научными центрами России и мира
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <AnimatedSection key={partner}>
                <div className="bg-white rounded-2xl p-8 flex items-center justify-center h-32 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-4xl font-bold text-muted-foreground/20">Партнер {partner}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-blue-600/5">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы ответить на все ваши вопросы и обсудить сотрудничество
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Россия, Москва, ул. Промышленная, д. 1</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@medsplav.ru</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
            <AnimatedSection>
              <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите ваш запрос..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">М</span>
                </div>
                <div>
                  <h3 className="font-bold">МИЦ «МЕДСПЛАВ»</h3>
                  <p className="text-xs text-white/70">Инновации в NiTi</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                Производство изделий из никелида титана для медицинской промышленности
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Медицинские инструменты</li>
                <li>Кардиология</li>
                <li>Ортопедия</li>
                <li>Стоматология</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О нас</li>
                <li>Технологии</li>
                <li>Сертификаты</li>
                <li>Партнеры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@medsplav.ru</li>
                <li>Москва, ул. Промышленная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2025 ООО «МИЦ «МЕДСПЛАВ». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;