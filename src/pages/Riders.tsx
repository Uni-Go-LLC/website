import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Users, MapPin, DollarSign, Shield, Clock, Bell } from "lucide-react";
import { BetaSignupButton } from "@/components/BetaSignupButton";

const features = [
  {
    icon: MapPin,
    title: "Find Rides Anywhere",
    description: "Browse available rides by drivers heading your way or post a ride request with your budget.",
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Ride by yourself or split costs with other students. Pay prices set by student drivers. No app fee means cheaper rides for you.",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    description: "Find rides that match your schedule. Last-minute trips or planned journeys.",
  },
  {
    icon: Shield,
    title: "Safe & Verified",
    description: "All users are verified with university email. So you can ride with confidence.",
  },
  {
    icon: Clock,
    title: "Short or Long Trips",
    description: "Ride around town or when you are headed home for breaks. Drivers can take you anywhere for the right price.",
  },
  {
    icon: Bell,
    title: "Never Miss a Ride Offer",
    description: "Set points of interest to get notified when rides are available for your favorite routes.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Browse or Post",
    description: "Check the ride feed for available trips or post your own ride request with your budget and number of seats needed.",
  },
  {
    step: "2",
    title: "Connect with Driver",
    description: "Multiple drivers can offer you the ride and you can choose who to ride with.",
  },
  {
    step: "3",
    title: "Enjoy Your Ride",
    description: "Meet your driver at the agreed location and enjoy your trip.",
  },
  {
    step: "4",
    title: "Rate & Review",
    description: "Share your experience to help build a trusted community.",
  },
];

const Riders = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get Where You Need to Go,{" "}
              <span className="text-gradient-gold">Affordably</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Whether you need a ride around town, to the airport, or even to another city, connect with
              verified student drivers in your community. Save money and make friends along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Ride with Uni Go?
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for safe, affordable rides with other students.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-uni-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Getting a ride is quick and easy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Ready to Start Riding?
            </h2>
            <p className="text-lg text-background/70 mb-8">
              Join our beta program and be among the first to experience affordable student ridesharing.
            </p>
            <BetaSignupButton />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Riders;
