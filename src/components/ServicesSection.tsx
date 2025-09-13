import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Building, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: "Cooperative Registration",
    items: [
      "Credit Cooperative Society (State Level)",
      "Multi-State Credit Cooperative Society", 
      "Microfinance Company under Section 8"
    ]
  },
  {
    icon: Shield,
    title: "Audit and Compliance",
    items: [
      "Annual audit as per applicable laws",
      "Statutory, legal, and RBI/NABARD compliance",
      "Preparation and filing of mandatory returns and documents"
    ]
  },
  {
    icon: Building,
    title: "Banking Business Setup",
    items: [
      "Designing cooperative banking business models",
      "SOPs, loan and deposit product creation",
      "Core banking solutions and digital integration support"
    ]
  },
  {
    icon: Users,
    title: "Training and Capacity Building",
    items: [
      "Tailored training for board members and staff",
      "Regulatory awareness and governance best practices",
      "Operational training in day-to-day banking activities"
    ]
  },
  {
    icon: TrendingUp,
    title: "Business Growth and Expansion",
    items: [
      "Strategy development for scaling cooperative operations",
      "Multi-branch planning and execution",
      "Marketing, digital presence, and branding support"
    ]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border border-border/20 bg-gradient-to-br from-card to-accent/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};