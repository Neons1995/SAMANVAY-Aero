import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroDrone from "@/assets/hero-drone.jpg";
import aerialMapping from "@/assets/aerial-mapping.jpg";
import dronePlatform from "@/assets/drone-platform.jpg";
import cityAerial from "@/assets/city-aerial.jpg";
import coastalSurveillance from "@/assets/coastal-surveillance.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const solutions = [
  { num: "01", title: "Defense & Military", desc: "Persistent ISR and tactical intelligence", image: heroDrone },
  { num: "02", title: "Border Monitoring", desc: "Wide-area maritime and coastal surveillance", image: coastalSurveillance },
  { num: "03", title: "Smart Cities", desc: "Urban monitoring and public safety analytics", image: cityAerial },
  { num: "04", title: "Infrastructure", desc: "Autonomous inspection with precision mapping", image: aerialMapping },
];

const stats = [
  { value: "150+", label: "Missions" },
  { value: "99.8%", label: "Uptime" },
  { value: "12", label: "Countries" },
  { value: "24/7", label: "Operations" },
];

const capabilities = [
  { title: "Autonomous Flight", desc: "AI-driven navigation in GPS-denied environments" },
  { title: "Computer Vision", desc: "Real-time object detection and thermal imaging" },
  { title: "Secure Comms", desc: "AES-256 encrypted data links" },
  { title: "Cloud Analytics", desc: "Scalable edge-to-cloud processing" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img src={heroDrone} alt="Drone above clouds" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6"
            >
              Aerial Intelligence Platform
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] max-w-4xl"
            >
              Intelligence
              <br />
              <span className="text-gradient">from the sky</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              AI-powered drone solutions delivering actionable intelligence for government, defense, and critical infrastructure.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="mt-10 flex gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-foreground/20 text-foreground text-sm font-semibold hover:bg-foreground/5 transition-all"
              >
                Explore
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-border py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.15em] mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission (Full-bleed Image + Text) ── */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Our Mission</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-8">
                Protecting what matters most
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We enhance national security, infrastructure resilience, and situational awareness through cutting-edge aerial intelligence. Our systems empower decision-makers with real-time, actionable data.
              </p>
              <Link to="/about" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                Learn more
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <img src={dronePlatform} alt="Drone platform" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Fullscreen Image Break ── */}
      <ParallaxImage src={cityAerial} alt="Smart city aerial view" />

      {/* ── Solutions ── */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mb-20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Solutions</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] max-w-xl">
              Mission-critical applications
            </h2>
          </motion.div>

          <div className="space-y-0 border-t border-border">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <Link
                  to="/solutions"
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-8 md:py-10 border-b border-border hover:bg-card/50 transition-colors px-2 -mx-2 rounded-lg"
                >
                  <span className="md:col-span-1 text-xs text-muted-foreground font-mono">{sol.num}</span>
                  <h3 className="md:col-span-4 font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {sol.title}
                  </h3>
                  <p className="md:col-span-4 text-sm text-muted-foreground">{sol.desc}</p>
                  <div className="md:col-span-3 flex justify-end">
                    <div className="w-20 h-14 rounded-lg overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity">
                      <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-32 md:py-40 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Technology</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05]">
                Built for the edge of innovation
              </h2>
            </motion.div>

            <div className="space-y-8">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="group flex gap-6 items-start"
                >
                  <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center shrink-0 text-xs font-mono text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{cap.title}</h4>
                    <p className="text-sm text-muted-foreground">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Fullscreen Coastal Image ── */}
      <ParallaxImage src={coastalSurveillance} alt="Coastal surveillance" />

      {/* ── CTA ── */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-8">
              Ready to elevate your operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Partner with AeroVision to deploy next-generation aerial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
              >
                Partner with Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-foreground/20 text-foreground font-semibold hover:bg-foreground/5 transition-all"
              >
                Government Enquiries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

// ── Parallax fullscreen image component ──
const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/20" />
      </motion.div>
    </section>
  );
};

export default Index;
