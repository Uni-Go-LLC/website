import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-12">
              Have questions about Uni Go? We're here to help! Reach out and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-uni-md">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-primary" />
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-2">Email Us</h2>

                <Button asChild size="lg" className="shadow-gold w-full sm:w-auto">
                  <a href="mailto:uni.go.llc@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    uni.go.llc@gmail.com
                  </a>
                </Button>
              </div>
            </div>

            {/* FAQ Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-secondary/50 rounded-2xl"
            >
              <h3 className="font-semibold text-foreground mb-4 text-center">Common Questions</h3>
              <div className="space-y-3">
                {[
                  "How do I sign up for the beta test?",
                  "When will Uni Go launch?",
                  "Is Uni Go available at my university?",
                  "How do drivers get paid?",
                ].map((question, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                      ?
                    </span>
                    {question}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
