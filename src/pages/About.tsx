import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import dronePlatform from "@/assets/drone-platform.jpg";
import aerialMapping from "@/assets/aerial-mapping.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "150+", label: "Missions Completed" },
  { value: "12", label: "Countries Served" },
  { value: "99.8%", label: "System Uptime" },
  { value: "24/7", label: "Operations Center" },
];

const values = [
  { title: "Mission First", description: "Every system designed for mission success in the most demanding environments." },
  { title: "Trusted Partners", description: "Embedded technology partners to government and defense teams worldwide." },
  { title: "Excellence", description: "Uncompromising standards in engineering, security, and operational reliability." },
  { title: "Global Reach", description: "Deployable anywhere across diverse terrains and conditions." },
];

const About = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

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
            About AeroVision
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] max-w-3xl"
          >
            Pioneering the future of aerial intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Founded with a mission to transform how nations protect their people and infrastructure through cutting-edge drone technology and advanced AI.
          </motion.p>
        </div>
      </section>

      {/* Full image */}
      <section ref={imgRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-0 -top-16 -bottom-16">
          <img src={dronePlatform} alt="Drone technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/20" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
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
                <div className="text-xs text-muted-foreground uppercase tracking-[0.15em] mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Our Story</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-8">
                From vision to mission-ready
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                AeroVision was founded by defense technologists, aerospace engineers, and AI researchers who recognized the transformative potential of autonomous aerial systems for national security.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today we deliver integrated drone intelligence platforms trusted by government agencies and defense organizations worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img src={aerialMapping} alt="Aerial mapping" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 md:py-40 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mb-20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Values</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05]">What drives us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <div className="flex gap-5 items-start">
                  <span className="text-xs font-mono text-muted-foreground mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Join our mission</h2>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
