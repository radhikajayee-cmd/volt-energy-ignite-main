import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Pro Gamer · Team Apex",
    quote: "VOLT keeps me locked in during 12-hour tournament days. No crash, no jitters — just clean energy.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "CrossFit Athlete",
    quote: "I've tried every energy drink on the market. VOLT is the only one that actually delivers on its promise.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "Music Producer",
    quote: "Late studio sessions need focus fuel. VOLT is my secret weapon for creative breakthroughs at 3AM.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(180_100%_50%_/_0.03)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-[10px] uppercase tracking-[0.5em] text-accent/60 mb-4"
          >
            Trusted By Professionals
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wider text-foreground"
          >
            What They <span className="text-accent glow-text-cyan">Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group p-8 border border-border/30 bg-card/20 backdrop-blur-sm hover:border-accent/20 transition-all duration-500 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 font-display text-6xl text-border/30 leading-none select-none">"</span>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>

              <p className="font-body text-base text-foreground/70 leading-relaxed tracking-wide mb-8 relative z-10">
                "{t.quote}"
              </p>

              <div className="border-t border-border/20 pt-4">
                <p className="font-display text-sm uppercase tracking-wider text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground tracking-wide mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
