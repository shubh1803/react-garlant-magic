import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Shield, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-medium">
              Sahakar Samruddhi – Empowering Cooperatives with Banking & Finance Expertise
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-6xl mx-auto bg-gradient-to-br from-card to-accent/30 border border-border/20 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
                Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sahakar Samruddhi is a specialized consultancy platform dedicated to supporting the growth and success of cooperative financial institutions across India. With a focused approach on Credit Cooperative Societies, Multi-State Credit Cooperative Societies, and Microfinance Companies (Section 8), we provide complete guidance from setup to compliance, operations, and expansion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a team of experienced professionals with in-depth knowledge of cooperative laws, financial systems, and regulatory frameworks. Our goal is to simplify complex processes and offer practical, compliant, and scalable solutions to our clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-6xl mx-auto bg-card/80 backdrop-blur-sm border border-border/20 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
                Our Purpose
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                India's cooperative movement holds the potential to bring real financial empowerment to rural and semi-urban populations. At Sahakar Samruddhi, we believe that with the right structure, support, and strategy, cooperative institutions can create a lasting impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work with individuals, groups, and institutions who are passionate about community development, financial inclusion, and ethical banking practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Help you start and register your cooperative institution",
              "Ensure complete compliance with all legal and financial norms",
              "Provide custom training and leadership development",
              "Design scalable business models for cooperative banking",
              "Assist in technology adoption and digital infrastructure setup",
              "Offer strategies for sustainable growth"
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-border/20 bg-gradient-to-br from-card to-accent/30">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <p className="text-foreground font-medium leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Integrity",
                description: "We offer honest, transparent, and reliable services"
              },
              {
                icon: Award,
                title: "Excellence", 
                description: "We believe in delivering quality work with professionalism"
              },
              {
                icon: Heart,
                title: "Empowerment",
                description: "We aim to build self-reliant institutions with long-term impact"
              },
              {
                icon: CheckCircle,
                title: "Compliance First",
                description: "We guide every client to stay within the legal framework"
              }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-border/20 bg-card/80 backdrop-blur-sm text-center">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-accent border border-primary/20 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground leading-relaxed">
                  To be India's most trusted consultancy partner for cooperative institutions by delivering innovative, ethical, and result-oriented solutions that strengthen financial inclusion and cooperative growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-accent border border-secondary/20 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-secondary">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground leading-relaxed">
                  To empower credit cooperatives and microfinance entities by simplifying complex processes, ensuring full compliance, and providing practical support to help them succeed and grow sustainably.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border border-border/20 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Connect With Us
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                If you are planning to start a cooperative or looking to scale your institution, we are here to guide you.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone:</h4>
                    <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email:</h4>
                    <p className="text-muted-foreground">info@sahakarsamruddhi.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Website:</h4>
                    <p className="text-muted-foreground">www.sahakarsamruddhi.in</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Office Address:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ashoka Plaza, Beed Bypass Road,<br />
                    Infront of Reliance Digital,<br />
                    Chatrapati Sambhajinagar (Aurangabad),<br />
                    Maharashtra – 431010
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;