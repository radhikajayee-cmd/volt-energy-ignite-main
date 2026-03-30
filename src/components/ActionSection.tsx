import { motion } from "framer-motion";
import actionBg from "@/assets/action-bg.jpg";

const ActionSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${actionBg})` }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-wider text-foreground mb-4">
          Fuel Your
          <br />
          <span className="text-primary glow-text-green animate-pulse-glow inline-block">Power</span>
        </h2>
        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto tracking-wide">
          Whether you're dominating the game or crushing your workout — VOLT keeps you charged.
        </p>
      </motion.div>
    </section>
  );
};

export default ActionSection;
