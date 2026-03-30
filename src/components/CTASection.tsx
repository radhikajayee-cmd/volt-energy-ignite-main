import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-background">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/cta-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/50 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(120_100%_50%_/_0.08)_0%,_transparent_60%)] z-[1]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-[2]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-wider text-foreground mb-6">
          Grab the
          <br />
          <span className="text-accent glow-text-cyan">Energy</span>
        </h2>
        <p className="font-body text-xl text-muted-foreground mb-10 tracking-wide">
          Don't wait. The energy revolution starts now.
        </p>
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 0 40px hsl(180 100% 50% / 0.5), 0 0 80px hsl(180 100% 50% / 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="px-14 py-5 bg-accent text-accent-foreground font-display text-xl uppercase tracking-widest rounded-sm border border-accent/50 transition-all duration-300 hover:bg-accent/90"
          style={{ boxShadow: "0 0 20px hsl(180 100% 50% / 0.4)" }}
        >
          Buy Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTASection;
