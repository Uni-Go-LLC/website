import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const faqItems = [
    {
      question: "How do I sign up for the beta test?",
      answer: "You can sign up for the beta test by clicking the 'Sign Up for Beta' button on our website or navigating to our Beta page. Fill out the form with your details to get started!"
    },
    {
      question: "When will Uni Go launch?",
      answer: "We're currently in beta testing phase with select universities. Full launch details will be in Spring 2026. Stay tuned for updates!"
    },
    {
      question: "How do drivers get paid?",
      answer: "When you post a ride as a driver, you set your own price for the trip. You keep 100% of the fare. You can also accept ride requests from other users and earn money that way."
    },
    {
      question: "Can I set my own schedule as a driver?",
      answer: "Yes, drivers can set their own schedules and work as much or as little as they want. You can choose to fulfill any rides that others request or post your own."
    },
    {
      question: "Can drivers drive casually or is there a commitment?",
      answer: "Drivers have complete flexibility. You can drive casually whenever you want without any long-term commitment. Just log in, accept rides, post your own rides, and start earning!"
    },
    {
      question: "Can I choose who I drive?",
      answer: "As a driver, you can view rider profiles and ratings before accepting ride requests. This allows you to choose riders you feel comfortable driving."
    },
    {
      question: "How can I make sure I don't miss any rides?",
      answer: "In your account settings, you can set certain locations to receive notifications so you never miss a ride for that location."
    },
    {
      question: "Can I be a rider and a driver?",
      answer: "Absolutely! Many users choose to be both riders and drivers on Uni Go. You can switch between roles based on your needs and availability."
    },
    {
      question: "As a rider, can I coordinate rides with friends?",
      answer: "Yes, when creating your ride, enter how many seats you would need so the appropriate drivers can accept with your request."
    },
    {
      question: "Can I choose who I ride with?",
      answer: "Yes, as a rider, you can view driver profiles and ratings before accepting. This way, you can choose to ride with drivers you feel comfortable with."
    },
    {
      question: "Is there an Android app available?",
      answer: "Currently, Uni Go is available as an iOS app. We are working on developing an Android app, which will be released in the near future."
    },
  ];
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
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
                    uni.go.llc@gmail.com
                  </a>
                </Button>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-uni-md mt-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Instagram className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Instagram</h2>
                <Button asChild size="lg" className="shadow-gold w-full sm:w-auto">
                  <a href="https://instagram.com/rideunigo" target="_blank" rel="noopener noreferrer">
                    @rideunigo
                  </a>
                </Button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-uni-md mt-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Linkedin className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">LinkedIn</h2>
                <Button asChild size="lg" className="shadow-gold w-full sm:w-auto">
                  <a href="https://www.linkedin.com/company/rideunigo" target="_blank" rel="noopener noreferrer">
                    @rideunigo
                  </a>
                </Button>
              </div>
            </div>

            {/* FAQ Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-secondary/50 roundedi-2xl"
            >
              <h3 className="font-semibold text-foreground mb-4 text-center">FAQ</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-sm text-foreground hover:font-bold hover:text-foreground no-underline text-left w-full">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground text-left">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
