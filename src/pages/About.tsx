import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Clock, Heart, Shield } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Star, label: "5-Star Rating", value: "4.9/5" },
    { icon: Users, label: "Happy Guests", value: "1K+" },
    { icon: Clock, label: "Years Experience", value: "5+" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Hospitality Excellence",
      description:
        "We believe every guest deserves an extraordinary experience that exceeds expectations.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your safety and peace of mind are our top priorities, with 24/7 support and secure environments.",
    },
    {
      icon: Star,
      title: "Luxury Standards",
      description:
        "We maintain the highest standards of luxury, comfort, and attention to detail in every aspect.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/dn1jpokek/image/upload/v1753793865/WhatsApp_Image_2025-07-29_at_05.48.17_k0nfgs.jpg"
              alt="Luxury living room interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-sm">
              About Patrick's Court
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Crafting unforgettable luxury experiences for discerning travelers
              who appreciate the finer things in life. Where elegance meets
              comfort in the heart of the city.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 text-primary border-primary/20"
                >
                  Our Story
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Redefining Luxury Living
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Universally, Real Estate has been and will always be the
                    biggest and strongest investment any individual or
                    organization will have mainly because it is by far the only
                    asset that significantly appreciates in value and worth over
                    time, focusing on the Lagos real estate market, it is
                    evident that many individuals want to either rent or be
                    homeowners in Ikoyi, the value of properties in Lagos will
                    continue to appreciate dramatically.
                  </p>
                  <p>
                    Since the business opened in Nigeria in 2010. Fulham
                    Property has become one of the leading Real Estate Companies
                    in Lagos, with functional estates located in the heart of
                    IKOYI, Fulham hosts a number of high profiled individuals
                    and organizations from around the world. We provide our
                    tenants with state-of-the-art facilities as we yearn to
                    provide the best quality and best service in the country.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
                  <img
                    src="https://res.cloudinary.com/dn1jpokek/image/upload/v1753793866/WhatsApp_Image_2025-07-29_at_05.48.19_1_sadekl.jpg"
                    alt="Luxury living room interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-hero rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        {/* <section className="py-20 bg-gradient-luxury">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground">
                Numbers that reflect our commitment to excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center border-border/50 shadow-card hover:shadow-luxury transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8">
                    <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Our Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-border/50 shadow-card hover:shadow-luxury transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <value.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-20 bg-gradient-luxury">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury">
                  <img
                    src="https://fulhampropertyafrica.com/wp-content/uploads/2023/01/chidi-anyaegbu.jpeg"
                    alt="CEO Sarah Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-hero rounded-full blur-2xl opacity-40"></div>
              </div>
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 text-primary border-primary/20"
                >
                  Leadership
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Meet Our Chairman
                </h2>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  CHIEF (DR) CHIDI ANYAEGBU
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Chief (Dr.) Chidi Anyaegbu, CON, MFR, FCILC (LON), FMOCA,
                    FILAN, is a distinguished entrepreneur and philanthropist,
                    born on September 13, 1956, in Amichi, Nnewi-South Local
                    Government Area of Anambra State, Nigeria. He is the son of
                    Mr. and Mrs. Patrick and Angelina Anyaegbu.
                  </p>
                  <p>
                    Chief Anyaegbu began his educational journey at St. Andrews
                    School, Amichi. He later pursued an apprenticeship in Lagos,
                    gaining expertise in the spare parts business. While
                    working, he attended the Lagos State Government Evening
                    Program before enrolling at the University of Lagos, where
                    he earned a degree in Law. His commitment to continuous
                    learning led him to attend various management and
                    entrepreneurial courses in countries including France, the
                    United States, Brazil, Germany, and the United Kingdom. In
                    1996, he was conferred with a Doctorate degree in Business
                    Administration (Honoris Causa) by Penn State University,
                    USA.
                  </p>

                  <p>
                    Chief Anyaegbu is the founder and chairman of several
                    successful ventures, including Chisco Transportation Ltd,
                    Chisco International Ltd, CTN Express Ltd, Chisco Haulage,
                    Park Place Hotels, and the Villa Angelia Hotel Group. His
                    companies have become notable contributors to Nigeria’s
                    transportation and hospitality industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Dedicated professionals committed to your comfort
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "CHRIS IKEM OKEKE",
                  role: "Joint Venture (JV) Consultant",
                  image:
                    "https://fulhampropertyafrica.com/wp-content/uploads/2025/01/okeke.png",
                },
                {
                  name: "KENNETH ONUORAH",
                  role: "General Manager",
                  image:
                    "https://fulhampropertyafrica.com/wp-content/uploads/2025/01/keneth.png",
                },
                {
                  name: "EZEKIEL YUSUF",
                  role: "Group Head, of Human Resources",
                  image:
                    "https://fulhampropertyafrica.com/wp-content/uploads/2025/01/ezekiel.png",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="border-border/50 shadow-card hover:shadow-luxury transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-card">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
