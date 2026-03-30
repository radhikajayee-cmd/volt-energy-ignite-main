import { motion } from "framer-motion";
import voltHero from "@/assets/volt-can-hero.png";
import voltCitrus from "@/assets/volt-citrus.png";
import voltBerry from "@/assets/volt-berry.png";
import voltIce from "@/assets/volt-ice.png";
import voltTropical from "@/assets/volt-tropical.png";

const flavors = [
  { img: voltHero, name: "Original", color: "120 100% 50%", tagline: "Pure Power" },
  { img: voltCitrus, name: "Citrus Surge", color: "30 100% 55%", tagline: "Sun Charged" },
  { img: voltBerry, name: "Berry Blast", color: "330 100% 60%", tagline: "Wild Energy" },
  { img: voltIce, name: "Arctic Ice", color: "210 100% 55%", tagline: "Cool Force" },
  { img: voltTropical, name: "Tropical Storm", color: "180 100% 50%", tagline: "Island Fuel" },
];

const FlavorSection = () => {
  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      {/* Animated ambient glow */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]"
        style={{
          background: `conic-gradient(from 0deg, hsl(120 100% 50%), hsl(180 100% 50%), hsl(330 100% 60%), hsl(30 100% 55%), hsl(210 100% 55%), hsl(120 100% 50%))`,
          filter: "blur(120px)",
        }}
      />

      {/* Horizontal scan line */}
      <motion.div
        animate={{ y: ["-100%", "1200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent z-[1]"
      />

      <div className="relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[10px] uppercase tracking-[0.5em] text-accent/50 mb-4"
          >
            5 Signature Blends
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-foreground"
          >
            Pick Your{" "}
            <motion.span
              initial={{ opacity: 0, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-accent glow-text-cyan"
            >
              Flavor
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mt-6"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {flavors.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.06, y: -12 }}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative p-6 pt-8 pb-8 border border-border/20 bg-card/20 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-opacity-50"
                style={{ borderColor: `hsl(${flavor.color} / 0.1)` }}
              >
                {/* Top accent line that expands */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[1px] transition-all duration-700"
                  style={{ background: `linear-gradient(to right, transparent, hsl(${flavor.color} / 0.6), transparent)` }}
                />

                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(ellipse at bottom, hsl(${flavor.color} / 0.08) 0%, transparent 70%)` }}
                />

                {/* Floating particles on hover */}
                {[...Array(4)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
                    style={{
                      background: `hsl(${flavor.color})`,
                      left: `${20 + j * 20}%`,
                      bottom: "20%",
                      boxShadow: `0 0 6px hsl(${flavor.color} / 0.8)`,
                    }}
                    animate={{}}
                    whileHover={{}}
                  />
                ))}

                {/* Can image */}
                <div className="relative flex justify-center mb-6">
                  <motion.div
                    className="absolute -bottom-2 w-[50%] h-[6px] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                    style={{ background: `hsl(${flavor.color})` }}
                  />
                  <motion.img
                    src={flavor.img}
                    alt={flavor.name}
                    className="h-[180px] md:h-[200px] relative z-10 transition-all duration-700 group-hover:scale-110"
                    whileHover={{ rotate: [0, -3, 3, -2, 0] }}
                    transition={{ duration: 0.6 }}
                    style={{
                      filter: `drop-shadow(0 0 15px hsl(${flavor.color} / 0.15))`,
                    }}
                  />
                </div>

                {/* Text */}
                <div className="relative z-10 text-center">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-60 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 mb-1"
                    style={{ color: `hsl(${flavor.color})` }}
                  >
                    {flavor.tagline}
                  </p>
                  <h3 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/70 group-hover:text-foreground transition-colors duration-500">
                    {flavor.name}
                  </h3>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[1px] transition-all duration-700 delay-100"
                  style={{ background: `linear-gradient(to right, transparent, hsl(${flavor.color} / 0.4), transparent)` }}
                />

                {/* Corner accents on hover */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-6 h-[1px] transition-all duration-500"
                  style={{ background: `hsl(${flavor.color} / 0.5)` }}
                />
                <div className="absolute top-0 left-0 w-[1px] h-0 group-hover:h-6 transition-all duration-500"
                  style={{ background: `hsl(${flavor.color} / 0.5)` }}
                />
                <div className="absolute bottom-0 right-0 w-0 group-hover:w-6 h-[1px] transition-all duration-500"
                  style={{ background: `hsl(${flavor.color} / 0.5)` }}
                />
                <div className="absolute bottom-0 right-0 w-[1px] h-0 group-hover:h-6 transition-all duration-500"
                  style={{ background: `hsl(${flavor.color} / 0.5)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
