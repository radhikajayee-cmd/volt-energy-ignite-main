import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden bg-background pb-20">
      {/* Video background - full prominence */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Very subtle gradient only at bottom for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent z-[1]" />

      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-[10px] md:text-xs uppercase tracking-[0.5em] text-foreground/50 mb-3"
        >
          Premium Energy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-display text-lg md:text-2xl font-medium uppercase tracking-[0.4em] text-foreground/70 mb-6"
        >
          VOLT
        </motion.h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05, borderColor: "hsl(120 100% 50% / 0.6)" }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-2.5 border border-foreground/20 text-foreground/60 font-display text-[10px] md:text-xs uppercase tracking-[0.3em] rounded-none bg-transparent backdrop-blur-sm transition-all duration-500 hover:text-primary hover:shadow-[0_0_20px_hsl(120_100%_50%_/_0.15)]"
        >
          Drink the Power
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
