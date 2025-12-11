import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Users, Heart, MessageCircle, Clock, Star } from "lucide-react";

const standards = [
  {
    icon: Heart,
    title: "Respect & Kindness",
    description: "Treat all community members with respect. Be kind, patient, and understanding with fellow students.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Communicate clearly about pickup locations, timing, and any changes to your plans.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description: "Be on time for pickups and rides. Respect everyone's schedule and time.",
  },
  {
    icon: Star,
    title: "Honest Reviews",
    description: "Leave honest and constructive feedback. Help build trust in our community.",
  },
];

const CommunityStandards = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Community Standards</h1>
                <p className="text-muted-foreground">Building a positive community together</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Community Values</h2>
              <p className="text-muted-foreground">
                Uni Go is more than just a ridesharing app—it's a community of students helping students. 
                These standards help us maintain a positive, safe, and respectful environment for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {standards.map((standard, i) => (
                <motion.div
                  key={standard.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <standard.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{standard.title}</h3>
                  <p className="text-muted-foreground text-sm">{standard.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">For Drivers</h2>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Keep your vehicle clean and safe</li>
                <li>• Follow all traffic laws</li>
                <li>• Be professional and courteous</li>
                <li>• Respect rider preferences for conversation and music</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mb-4">For Riders</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Be ready at the pickup location on time</li>
                <li>• Treat the driver's vehicle with respect</li>
                <li>• Communicate any changes promptly</li>
                <li>• Leave honest ratings and feedback</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityStandards;
