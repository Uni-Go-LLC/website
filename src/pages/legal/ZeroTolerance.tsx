import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ShieldAlert, XCircle } from "lucide-react";

const violations = [
  "Driving under the influence of alcohol or drugs",
  "Physical violence or threats of violence",
  "Sexual harassment or assault",
  "Discrimination based on race, gender, religion, or any protected class",
  "Theft or damage to property",
  "Fraudulent activity or misrepresentation",
  "Sharing of inappropriate or explicit content",
  "Stalking or harassment of any kind",
];

const ZeroTolerance = () => {
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
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Zero Tolerance Policy</h1>
                <p className="text-muted-foreground">Keeping our community safe</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Commitment</h2>
              <p className="text-muted-foreground mb-6">
                Uni Go is committed to maintaining a safe and respectful environment for all users. 
                We have a zero tolerance policy for any behavior that threatens the safety, comfort, 
                or dignity of our community members.
              </p>

              <div className="p-4 bg-destructive/5 rounded-xl border border-destructive/20 mb-6">
                <p className="text-foreground font-medium">
                  Violations of this policy will result in immediate and permanent account suspension.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-4">Prohibited Behaviors</h3>
              <ul className="space-y-3">
                {violations.map((violation, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{violation}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Reporting Violations</h2>
              <p className="text-muted-foreground mb-4">
                If you experience or witness any violation of this policy, please report it immediately. 
                All reports are taken seriously and investigated promptly.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use the in-app reporting feature</li>
                <li>• Email us at{" "}
                  <a href="mailto:support@unigo.app" className="text-primary hover:underline">
                    support@unigo.app
                  </a>
                </li>
                <li>• In case of emergency, always contact local authorities first</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ZeroTolerance;
