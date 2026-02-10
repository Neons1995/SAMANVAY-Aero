import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aerialMapping from "@/assets/aerial-mapping.jpg";
import dronePlatform from "@/assets/drone-platform.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const coreTech = [
  {
    title: "Autonomous Flight Systems",
    description: "AI-driven mission planning with GPS-denied navigation, obstacle avoidance, and multi-drone swarm coordination.",
  },
  {
    title: "AI Object Detection & Thermal Imaging",
    description: "Deep learning models for real-time classification, behavior analysis, and multi-spectral threat detection.",
  },
  {
    title: "Secure Data Transmission",
    description: "Military-grade AES-256 encrypted links with frequency hopping, anti-jamming, and zero-trust architecture.",
  },
  {
    title: "Scalable Cloud Analytics",
    description: "Edge-to-cloud processing pipeline with real-time dashboards and machine learning deployment at scale.",
  },
];

const specs = [
  { label: "Edge Computing", value: "On-board AI inference at 60+ FPS" },
  { label: "Connectivity", value: "5G, satellite, and mesh networking" },
  { label: "Data Processing", value: "Petabyte-scale analytics pipeline" },
  { label: "Communications", value: "Encrypted multi-band data links" },
];

const Technology = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6"
          >
            Technology
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] max-w-3xl"
          >
            Engineering the future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Autonomous systems, AI analytics, and secure communications unified into a single intelligence platform.
          </motion.p>
        </div>
      </section>

      {/* Parallax image */}
      <section ref={imgRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-0 -top-16 -bottom-16">
          <img src={aerialMapping} alt="Aerial mapping technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/20" />
        </motion.div>
      </section>

      {/* Core Tech */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mb-20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Core Stack</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] max-w-xl">
              The AeroVision platform
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {coreTech.map((tech, i) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="group"
              >
                <div className="flex gap-5 items-start">
                  <span className="text-xs font-mono text-muted-foreground mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{tech.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + Image */}
      <section className="py-32 md:py-40 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img src={dronePlatform} alt="Drone sensors" className="w-full h-full object-cover" />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="mb-12"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Platform Specs</p>
                <h2 className="font-display text-4xl font-bold text-foreground leading-[1.05]">Built for performance</h2>
              </motion.div>

              <div className="space-y-6">
                {specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease }}
                    className="flex items-center justify-between py-4 border-b border-border"
                  >
                    <span className="text-sm font-semibold text-foreground">{spec.label}</span>
                    <span className="text-sm text-muted-foreground">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">See it in action</h2>
            <p className="text-muted-foreground mb-10">Schedule a technical briefing with our team.</p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
            >
              Request Briefing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Technology;
