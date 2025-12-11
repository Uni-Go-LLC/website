import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FileText } from "lucide-react";

const Terms = () => {
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
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Terms & Conditions</h1>
                <p className="text-muted-foreground">Last updated: December 2024</p>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using the Uni Go application, you accept and agree to be bound by the terms 
                    and provision of this agreement. This document will be updated with full terms and conditions 
                    before the app launch.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. Eligibility</h2>
                  <p className="text-muted-foreground">
                    Uni Go is exclusively available to currently enrolled college students. Users must verify 
                    their student status through a valid .edu email address to access the platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. User Responsibilities</h2>
                  <p className="text-muted-foreground">
                    Users are responsible for maintaining the confidentiality of their account information and 
                    for all activities that occur under their account. Both drivers and riders must adhere to 
                    all applicable laws and university policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Service Description</h2>
                  <p className="text-muted-foreground">
                    Uni Go provides a platform connecting student drivers with student riders. We do not provide 
                    transportation services directly. All arrangements are made between users at their own discretion.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">5. Contact</h2>
                  <p className="text-muted-foreground">
                    For questions about these terms, please contact us at{" "}
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

export default Terms;
