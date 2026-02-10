import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary text-sm">AV</span>
              </div>
              <span className="font-display font-semibold text-foreground tracking-tight text-lg">
                AeroVision
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered aerial intelligence for government, defense, and critical infrastructure.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-5">Company</h4>
            <ul className="space-y-3">
              {["About", "Solutions", "Technology", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-5">Solutions</h4>
            <ul className="space-y-3">
              {["Defense", "Border", "Smart Cities", "Inspection"].map((item) => (
                <li key={item}>
                  <Link to="/solutions" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>contact@aerovision.com</li>
              <li>+1 (800) 555-0199</li>
              <li>Washington, D.C.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 AeroVision. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-muted-foreground">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
