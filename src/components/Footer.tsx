import { motion } from "framer-motion";
import { Zap, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-background border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-display text-sm uppercase tracking-[0.3em] text-foreground">VOLT</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed tracking-wide">
              Premium energy for those who refuse to settle. Born from science, built for performance.
            </p>
          </div>

          {/* Links */}
          {[
            { title: "Products", links: ["Original", "Citrus Surge", "Berry Blast", "Arctic Ice", "Tropical Storm"] },
            { title: "Company", links: ["About", "Careers", "Press", "Sustainability"] },
            { title: "Support", links: ["Contact", "FAQ", "Shipping", "Returns"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer tracking-wide">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground/50 tracking-wide">
            © 2026 VOLT Energy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <motion.div key={i} whileHover={{ scale: 1.2, y: -2 }} className="cursor-pointer">
                <Icon className="w-4 h-4 text-muted-foreground/40 hover:text-primary transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
