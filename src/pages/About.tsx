import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Car, Shield, Users, Heart, Target, Zap } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "Built by students, for students. We understand campus life and your unique transportation needs.",
  },
  {
    icon: Shield,
    title: "Safety Matters",
    description: "Every user is verified with a .edu email. Drive and ride with fellow students you can trust.",
  },
  {
    icon: Heart,
    title: "Zero Platform Fees",
    description: "Drivers keep 100% of what they earn. We believe in supporting students, not taking from them.",
  },
  {
    icon: Target,
    title: "Student-Focused",
    description: "From grocery runs to airport trips, we're designed for the rides that matter most to college life.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Car className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What is <span className="text-gradient-gold">Uni Go</span>?
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                Uni Go is an app that connects students who need rides with those who can offer them. 
                Whether you're heading to the grocery store, catching a flight, or driving home for break, 
                Uni Go makes it easy to share rides and split costs with fellow students.
              </p>

              <p className="text-lg text-muted-foreground">
                We believe transportation shouldn't be a barrier to college life. That's why we built 
                an app where drivers keep 100% of their earnings and riders get affordable rides from 
                people they can trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <PhoneMockup className="w-56 md:w-64" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Uni Go?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another rideshare app. We're a community built on trust, affordability, and student success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-uni-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-gold">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              To make transportation accessible, affordable, and social for every college student. 
              We're building a platform where students can earn money, save money, and make connections—all 
              while getting where they need to go.
            </p>
            <p className="text-lg text-foreground font-medium">
              Launching at Augustana University in 2026 🎉
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
