import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Globe, Users, DollarSign, Heart } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "In-depth expertise in cooperative banking regulations"
  },
  {
    icon: Globe,
    title: "One-stop solution from registration to growth"
  },
  {
    icon: Users,
    title: "Pan-India service coverage with a dedicated team"
  },
  {
    icon: DollarSign,
    title: "Transparent pricing with result-driven approach"
  },
  {
    icon: Heart,
    title: "Customized support for rural and urban cooperatives"
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Sahakar Samruddhi
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-border/20 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {feature.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};