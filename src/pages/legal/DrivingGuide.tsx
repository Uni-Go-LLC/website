import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Car, CheckCircle } from "lucide-react";

const guidelines = [
  {
    title: "Vehicle Requirements",
    items: [
      "Valid driver's license and registration",
      "Current auto insurance that covers ridesharing",
      "Vehicle in good working condition",
      "Clean interior and exterior",
      "Passed vehicle inspection (if required by state)",
    ],
  },
  {
    title: "Safety Guidelines",
    items: [
      "Always verify rider identity before starting a trip",
      "Follow all traffic laws and speed limits",
      "Never drive under the influence of alcohol or drugs",
      "Keep your phone mounted safely while driving",
      "Report any safety concerns immediately",
    ],
  },
  {
    title: "Best Practices",
    items: [
      "Communicate clearly with riders about pickup location",
      "Be punctual and reliable",
      "Keep your vehicle clean and comfortable",
      "Be respectful and professional at all times",
      "Offer assistance with luggage when appropriate",
    ],
  },
  {
    title: "Payment & Pricing",
    items: [
      "Set fair and transparent pricing",
      "You keep 100% of all fares",
      "Payments are handled securely through the app",
      "Discuss any additional stops before the trip",
      "No cash transactions recommended",
    ],
  },
];

const DrivingGuide = () => {
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
                <Car className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Driving Guide</h1>
                <p className="text-muted-foreground">Everything you need to know as a Uni Go driver</p>
              </div>
            </div>

            <div className="space-y-6">
              {guidelines.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20"
            >
              <h3 className="font-semibold text-foreground mb-2">Questions?</h3>
              <p className="text-muted-foreground">
                Contact us at{" "}
                <a href="mailto:support@unigo.app" className="text-primary hover:underline">
                  support@unigo.app
                </a>{" "}
                for any driving-related questions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DrivingGuide;
