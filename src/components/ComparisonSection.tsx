import { motion } from "framer-motion";
import voltHero from "@/assets/volt-can-hero.png";

const ComparisonSection = () => {
  const rows = [
    { feature: "Caffeine", volt: "200mg", others: "150mg avg" },
    { feature: "Sugar", volt: "0g", others: "27g avg" },
    { feature: "Calories", volt: "10", others: "110 avg" },
    { feature: "B-Vitamins", volt: "100% DV", others: "Varies" },
    { feature: "Crash", volt: "None", others: "Frequent" },
    { feature: "Taste Rating", volt: "9.4/10", others: "6.8/10" },
  ];

  return (
    <section className="relative py-32 px-4 bg-secondary/20 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-[10px] uppercase tracking-[0.5em] text-primary/60 mb-4"
          >
            The Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wider text-foreground"
          >
            VOLT vs <span className="text-muted-foreground">The Rest</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border/30 overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-card/50 border-b border-border/30">
            <div className="p-5 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground" />
            <div className="p-5 text-center font-display text-xs uppercase tracking-[0.3em] text-primary border-x border-border/30">
              VOLT
            </div>
            <div className="p-5 text-center font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Others
            </div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-3 border-b border-border/20 last:border-b-0 hover:bg-primary/[0.02] transition-colors duration-300"
            >
              <div className="p-5 font-body text-sm text-foreground/70 tracking-wide">{row.feature}</div>
              <div className="p-5 text-center font-display text-sm text-primary border-x border-border/20 font-bold">
                {row.volt}
              </div>
              <div className="p-5 text-center font-body text-sm text-muted-foreground">{row.others}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
