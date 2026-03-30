import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(120_100%_50%_/_0.04)_0%,_transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-xl mx-auto text-center"
      >
        <p className="font-display text-[10px] uppercase tracking-[0.5em] text-primary/50 mb-4">
          Stay Charged
        </p>
        <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider text-foreground mb-3">
          Join the Movement
        </h3>
        <p className="font-body text-sm text-muted-foreground tracking-wide mb-8">
          Get exclusive drops, athlete stories, and early access to new flavors.
        </p>

        <div className="flex gap-0 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 py-3 bg-card/50 border border-border/30 border-r-0 font-body text-sm text-foreground placeholder:text-muted-foreground/40 tracking-wide focus:outline-none focus:border-primary/40 transition-colors duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-primary text-primary-foreground font-display text-[10px] uppercase tracking-[0.2em] hover:bg-primary/90 transition-all duration-300"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
