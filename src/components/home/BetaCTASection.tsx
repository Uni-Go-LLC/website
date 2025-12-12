import { motion } from "framer-motion";
import { ArrowRight, Gift, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const BetaCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--primary))_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--primary))_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6"
          >
            Help Us Launch Uni Go at{" "}
            <span className="text-primary">Augustana University</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-background/70 mb-8 max-w-2xl mx-auto"
          >
            Sign up to test the app as a rider, driver, or both. Share feedback to help us build features that work for you.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            {[
              { icon: Gift, title: "Gift Cards", description: "Gift cards & prizes for participating" },
              { icon: Users, title: "Early Access", description: "Be first to try new features" },
              { icon: CheckCircle, title: "Shape the App", description: "Your feedback directly impacts development" },
            ].map((benefit, i) => (
              <div
                key={benefit.title}
                className="bg-background/5 border border-background/10 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-background mb-2">{benefit.title}</h3>
                <p className="text-sm text-background/60">{benefit.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg" className="shadow-gold group">
              <Link to="/beta">
                Sign Up for Beta
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
