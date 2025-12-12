import { motion } from "framer-motion";
import { ShoppingCart, Plane, Briefcase, Calendar, Building, MapPinned } from "lucide-react";

const useCases = [
  { icon: ShoppingCart, title: "Groceries", description: "Weekly grocery runs" },
  { icon: Plane, title: "Airport", description: "Catch your flight" },
  { icon: Briefcase, title: "Internships", description: "Daily commute" },
  { icon: Calendar, title: "Appointments", description: "Doctor visits & more" },
  { icon: Building, title: "Downtown", description: "Night out safely" },
  { icon: MapPinned, title: "Long Distance", description: "Home for break" },
];

export const UseCasesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Do You Need to Go?
          </h2>
          <p className="text-lg text-muted-foreground">
            Uni Go is perfect for any trip, big, or small.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-uni-sm hover:shadow-uni-md hover:border-primary/30 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-center mb-1">{useCase.title}</h3>
              <p className="text-xs text-muted-foreground text-center">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
