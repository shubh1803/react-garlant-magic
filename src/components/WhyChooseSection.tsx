import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Globe, Users, DollarSign, Heart, Shield, Award, Target } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: "In-depth expertise in cooperative banking regulations",
      description: "Our team has extensive knowledge of all regulatory frameworks governing cooperative banking institutions."
    },
    {
      icon: Globe,
      title: "One-stop solution from registration to growth", 
      description: "We provide comprehensive services covering every aspect of your cooperative's journey."
    },
    {
      icon: Users,
      title: "Pan-India service coverage with a dedicated team",
      description: "Our network spans across India with experienced professionals in every region."
    },
    {
      icon: DollarSign,
      title: "Transparent pricing with result-driven approach",
      description: "No hidden costs with clear deliverables and measurable outcomes for your institution."
    },
    {
      icon: Heart,
      title: "Customized support for rural and urban cooperatives",
      description: "Tailored solutions that address the unique challenges of different cooperative models."
    },
    {
      icon: Award,
      title: "Proven track record of successful implementations",
      description: "Years of experience with hundreds of satisfied cooperative institutions across India."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-lg mb-2 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Sahakar Samruddhi
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We stand out from the competition with our specialized expertise, comprehensive solutions, 
            and unwavering commitment to the success of cooperative institutions across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md rounded-2xl overflow-hidden bg-white relative"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-primary transition-colors duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Indicator */}
                <div className="w-0 h-1 bg-primary mx-auto mt-6 group-hover:w-16 transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Cooperative Institution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful cooperative institutions that have trusted Sahakar Samruddhi 
              for their banking and financial consultancy needs.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;