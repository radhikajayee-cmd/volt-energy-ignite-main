import { motion } from "framer-motion";
import voltHero from "@/assets/volt-can-hero.png";
import voltCitrus from "@/assets/volt-citrus.png";
import voltBerry from "@/assets/volt-berry.png";
import voltIce from "@/assets/volt-ice.png";

const cans = [
  { img: voltHero, name: "Original", delay: 0, color: "120 100% 50%" },
  { img: voltCitrus, name: "Citrus", delay: 0.15, color: "30 100% 55%" },
  { img: voltBerry, name: "Berry", delay: 0.3, color: "330 100% 60%" },
  { img: voltIce, name: "Ice", delay: 0.45, color: "210 100% 55%" },
];

const ProductSection = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-background">
      {/* Animated background grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(120 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(120 100% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.04, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px]"
      />

      {/* Heading with stagger effect */}
      <div className="relative z-10 text-center mb-20">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-[1px] bg-primary/40 mx-auto mb-6"
        />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-center text-foreground tracking-wider"
        >
          Choose Your{" "}
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary glow-text-green"
          >
            Weapon
          </motion.span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-16 h-[1px] bg-primary/40 mx-auto mt-6"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {cans.map((can) => (
          <motion.div
            key={can.name}
            initial={{ opacity: 0, y: 80, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: can.delay, type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.12, y: -20, rotateY: 8 }}
            className="flex flex-col items-center group cursor-pointer perspective-[800px]"
          >
            <div className="relative">
              {/* Glow ring behind can */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[40px]"
                style={{ background: `radial-gradient(circle, hsl(${can.color} / 0.4) 0%, transparent 70%)` }}
              />
              {/* Reflection line */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent group-hover:via-primary/30 transition-all duration-500" />

              <motion.img
                src={can.img}
                alt={can.name}
                className="h-[200px] md:h-[300px] relative z-10 transition-all duration-700"
                whileHover={{ rotate: 3 }}
                style={{
                  filter: `drop-shadow(0 0 25px hsl(${can.color} / 0.25))`,
                }}
              />
            </div>

            <motion.p
              className="mt-6 font-display text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-all duration-500"
            >
              {can.name}
            </motion.p>

            {/* Underline on hover */}
            <div className="h-[1px] w-0 group-hover:w-full transition-all duration-500 mt-2"
              style={{ background: `linear-gradient(to right, transparent, hsl(${can.color}), transparent)` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
