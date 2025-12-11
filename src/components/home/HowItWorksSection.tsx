import { motion } from "framer-motion";
import { Car, Search, DollarSign, Users, MapPin, Clock } from "lucide-react";

const driverSteps = [
  { icon: MapPin, title: "Set Your Route", description: "Enter your start and destination" },
  { icon: Clock, title: "Choose Time & Seats", description: "Set when you're leaving and how many can join" },
  { icon: DollarSign, title: "Set Your Price", description: "You decide the fare—keep 100% of it" },
  { icon: Users, title: "Accept Riders", description: "Review requests and accept riders" },
];

const riderSteps = [
  { icon: Search, title: "Browse Rides", description: "Find rides that match your route" },
  { icon: DollarSign, title: "Set Your Budget", description: "Filter by price that works for you" },
  { icon: Users, title: "Request a Seat", description: "Send a request to the driver" },
  { icon: Car, title: "Go!", description: "Meet up and enjoy the ride" },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How <span className="text-gradient-gold">Uni Go</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have a car or need a ride, Uni Go makes it easy to connect with fellow students.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Driver Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card rounded-3xl p-8 border border-border shadow-uni-md"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-gold">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Have a Car?</h3>
                <p className="text-sm text-primary font-medium">Earn up to $30/hr</p>
              </div>
            </div>

            <div className="space-y-6">
              {driverSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-foreground">
                <span className="font-semibold">🎉 Keep 100% of your earnings!</span> No platform fees, no hidden charges.
              </p>
            </div>
          </motion.div>

          {/* Rider Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card rounded-3xl p-8 border border-border shadow-uni-md"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center">
                <Users className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Need a Ride?</h3>
                <p className="text-sm text-muted-foreground font-medium">Affordable & Easy</p>
              </div>
            </div>

            <div className="space-y-6">
              {riderSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-secondary">
              <p className="text-sm text-foreground">
                <span className="font-semibold">💰 Save money!</span> Rides are often cheaper than Uber or Lyft.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
