import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroDrone from "@/assets/hero-drone.jpg";
import coastalSurveillance from "@/assets/coastal-surveillance.jpg";
import cityAerial from "@/assets/city-aerial.jpg";
import aerialMapping from "@/assets/aerial-mapping.jpg";
import dronePlatform from "@/assets/drone-platform.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const solutions = [
  {
    title: "Defense & Military Surveillance",
    description: "Persistent ISR capabilities for force protection, reconnaissance, target acquisition, and tactical intelligence gathering. Real-time battlefield awareness with multi-sensor fusion.",
    features: ["Persistent wide-area surveillance", "Multi-sensor target tracking", "Tactical intelligence reporting"],
    image: heroDrone,
  },
  {
    title: "Border & Coastal Monitoring",
    description: "Automated detection and tracking of unauthorized crossings, maritime threats, and smuggling operations with 24/7 aerial coverage.",
    features: ["Automated intrusion detection", "Maritime domain awareness", "Long-endurance patrol"],
    image: coastalSurveillance,
  },
  {
    title: "Smart Cities & Public Safety",
    description: "Urban surveillance and crowd analytics enabling law enforcement to maintain public safety and respond rapidly to incidents.",
    features: ["Crowd density monitoring", "Traffic optimization", "Emergency response"],
    image: cityAerial,
  },
  {
    title: "Disaster Response",
    description: "Rapid deployment aerial assessment for natural disasters, providing real-time damage mapping and survivor detection.",
    features: ["Rapid damage assessment", "Search & rescue support", "Communications relay"],
    image: aerialMapping,
  },
  {
    title: "Infrastructure Inspection",
    description: "Autonomous inspection of critical infrastructure including power grids, pipelines, and bridges with centimeter-level precision.",
    features: ["Pipeline & powerline inspection", "Thermal anomaly detection", "3D asset modeling"],
    image: dronePlatform,
  },
];

const Solutions = () => {
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
            Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] max-w-3xl"
          >
            Mission-critical aerial solutions
          </motion.h1>
        </div>
      </section>

      {/* Solution blocks */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12 space-y-32">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <span className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-5">{sol.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{sol.description}</p>
                <ul className="space-y-3">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
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
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">Find the right solution</h2>
            <p className="text-muted-foreground mb-10">Customized for your unique operational requirements.</p>
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

export default Solutions;
