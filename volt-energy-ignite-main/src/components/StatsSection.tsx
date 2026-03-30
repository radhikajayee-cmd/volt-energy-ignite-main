import { motion } from "framer-motion";
import { Zap, Droplets, Shield, Flame } from "lucide-react";

const stats = [
  { icon: Zap, value: "200mg", label: "Caffeine", color: "120 100% 50%" },
  { icon: Droplets, value: "Zero", label: "Sugar", color: "180 100% 50%" },
  { icon: Shield, value: "B6 & B12", label: "Vitamins", color: "210 100% 55%" },
  { icon: Flame, value: "10", label: "Calories", color: "30 100% 55%" },
];

const StatsSection = () => {
  return (
    <section className="relative py-20 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(120_100%_50%_/_0.03)_0%,_transparent_60%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-12"
        >
          What's Inside
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-8 border border-border/50 bg-card/50 backdrop-blur-sm group cursor-pointer hover:border-primary/30 transition-all duration-500"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="mx-auto mb-4 w-10 h-10 flex items-center justify-center"
              >
                <stat.icon
                  className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500"
                />
              </motion.div>
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1"
                style={{ textShadow: `0 0 20px hsl(${stat.color} / 0)` }}
              >
                {stat.value}
              </p>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
