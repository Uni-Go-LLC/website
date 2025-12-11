import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Settings, Eye, Bell, MapPin, Trash2 } from "lucide-react";

const privacyOptions = [
  {
    icon: Eye,
    title: "Profile Visibility",
    description: "Control who can see your profile information and ride history.",
  },
  {
    icon: MapPin,
    title: "Location Data",
    description: "Manage how we collect and use your location information.",
  },
  {
    icon: Bell,
    title: "Communications",
    description: "Choose what notifications and emails you receive from us.",
  },
  {
    icon: Trash2,
    title: "Data Deletion",
    description: "Request deletion of your personal data and account.",
  },
];

const PrivacyChoices = () => {
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
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Your Privacy Choices</h1>
                <p className="text-muted-foreground">Control your data and privacy settings</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                At Uni Go, we believe you should have control over your personal data. This page 
                explains the choices you have regarding your information and how to exercise your rights.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {privacyOptions.map((option, i) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <option.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{option.title}</h3>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">How to Exercise Your Choices</h2>
              <p className="text-muted-foreground mb-4">
                You can manage most privacy settings directly in the Uni Go app under Settings → Privacy. 
                For requests that require manual processing:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• <strong>Data Access:</strong> Request a copy of your data</li>
                <li>• <strong>Data Correction:</strong> Update incorrect information</li>
                <li>• <strong>Data Deletion:</strong> Request account and data removal</li>
                <li>• <strong>Opt-Out:</strong> Manage marketing communications</li>
              </ul>
              <p className="text-muted-foreground">
                Contact us at{" "}
                <a href="mailto:support@unigo.app" className="text-primary hover:underline">
                  support@unigo.app
                </a>{" "}
                with "Privacy Request" in the subject line.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyChoices;
