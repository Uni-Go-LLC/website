import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, MessageSquare, Star, Lightbulb, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

const feedbackTypes = [
  { icon: Star, title: "General Feedback", description: "Share your thoughts on Uni Go" },
  { icon: Lightbulb, title: "Feature Request", description: "Suggest new features" },
  { icon: Bug, title: "Report a Bug", description: "Help us fix issues" },
];

const Feedback = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">We Value Your Input</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Share Your <span className="text-gradient-gold">Feedback</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-12">
              Your feedback helps us build a better app for students. Whether it's a bug report, 
              feature request, or general thoughts—we want to hear from you!
            </p>
          </motion.div>

          {/* Feedback Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            {feedbackTypes.map((type, i) => (
              <div
                key={type.title}
                className="bg-card rounded-2xl p-6 border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-uni-md text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-gold">
                <Mail className="w-10 h-10 text-primary-foreground" />
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-2">Send Us Feedback</h2>
              <p className="text-muted-foreground mb-6">
                Email us with your feedback and include as much detail as possible. 
                Screenshots are always helpful!
              </p>

              <Button asChild size="lg" className="shadow-gold w-full sm:w-auto">
                <a href="mailto:support@unigo.app?subject=Feedback">
                  <Mail className="w-5 h-5 mr-2" />
                  support@unigo.app
                </a>
              </Button>

              <div className="mt-8 p-4 bg-primary/5 rounded-xl">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Pro tip:</span> Include your university name and 
                  whether you're a driver, rider, or both in your feedback!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;
