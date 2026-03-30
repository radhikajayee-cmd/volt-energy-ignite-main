import { motion } from "framer-motion";
import { Dumbbell, Gamepad2, Brain, Bike } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Peak Performance",
    desc: "Engineered for athletes who push beyond limits. Every can delivers sustained energy without the crash.",
    color: "120 100% 50%",
  },
  {
    icon: Gamepad2,
    title: "Gaming Precision",
    desc: "Sharpen your reflexes and maintain focus during marathon sessions. Trusted by pro esports teams worldwide.",
    color: "330 100% 60%",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    desc: "B-vitamins and taurine work together to keep your mind razor-sharp when it matters most.",
    color: "180 100% 50%",
  },
  {
    icon: Bike,
    title: "Endurance Fuel",
    desc: "From dawn training to late-night grind. VOLT adapts to your rhythm and keeps you moving forward.",
    color: "30 100% 55%",
  },
];

const ScienceSection = () => {
  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, hsl(120 100% 50%) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-[10px] uppercase tracking-[0.5em] text-primary/60 mb-4"
          >
            The Science
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wider text-foreground"
          >
            Built for <span className="text-primary glow-text-green">Greatness</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 md:p-10 border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-12 h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-12 bg-gradient-to-b from-primary/40 to-transparent" />

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                  <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-display text-lg uppercase tracking-wider text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed tracking-wide">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
