import { motion } from "framer-motion";
import { Zap, Trophy, Shield, Flame } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-border/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          <span className="font-display text-sm uppercase tracking-[0.4em] text-foreground">VOLT</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Products", "Flavors", "Science", "Athletes"].map((item) => (
            <span key={item} className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
              {item}
            </span>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 border border-primary/30 text-primary font-display text-[10px] uppercase tracking-[0.2em] hover:bg-primary/10 transition-all duration-300"
        >
          Shop Now
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
