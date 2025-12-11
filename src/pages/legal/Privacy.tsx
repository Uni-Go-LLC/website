import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield } from "lucide-react";

const Privacy = () => {
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
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: December 2024</p>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
                  <p className="text-muted-foreground">
                    We collect information you provide directly, including your name, email address, 
                    university affiliation, and profile information. We also collect usage data to improve 
                    our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground">
                    Your information is used to provide and improve our services, verify your student status, 
                    facilitate ride connections, and communicate with you about your account and our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We share limited information between drivers and riders to facilitate rides. We do not 
                    sell your personal information to third parties. We may share data with service providers 
                    who assist in operating our platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your personal information. However, 
                    no method of transmission over the Internet is 100% secure, and we cannot guarantee 
                    absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
                  <p className="text-muted-foreground">
                    You have the right to access, correct, or delete your personal information. You may also 
                    opt out of certain data collection practices. Contact us to exercise these rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
                  <p className="text-muted-foreground">
                    For privacy-related inquiries, please contact us at{" "}
                    <a href="mailto:support@unigo.app" className="text-primary hover:underline">
                      support@unigo.app
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
