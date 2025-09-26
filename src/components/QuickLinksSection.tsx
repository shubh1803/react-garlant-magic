import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Briefcase, BookOpen, Trophy, Phone } from 'lucide-react';

const links = [
  {
    icon: Info,
    title: "About Sahakar Samriddhi",
    href: "/about"
  },
  {
    icon: Briefcase,
    title: "Our Services",
    href: "/services"
  },
  {
    icon: BookOpen,
    title: "Blog & Insights",
    href: "/blog"
  },
  {
    icon: Trophy,
    title: "Client Success Stories",
    href: "/success-stories"
  },
  {
    icon: Phone,
    title: "Contact Us",
    href: "/contact"
  }
];

export const QuickLinksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quick Links
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link key={index} to={link.href}>
              <Card className="group hover:shadow-xl transition-all duration-300 border border-border/20 bg-card hover:bg-primary/5 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-center">
                    {link.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};