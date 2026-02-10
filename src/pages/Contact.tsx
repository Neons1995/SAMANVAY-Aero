import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you shortly.");
  };

  const contactInfo = [
    { icon: MapPin, label: "Headquarters", value: "1200 Defense Corridor\nWashington, D.C. 20001" },
    { icon: Phone, label: "Phone", value: "+1 (800) 555-0199" },
    { icon: Mail, label: "Email", value: "contact@aerovision.com" },
  ];

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
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] max-w-3xl"
          >
            Let's talk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Ready to discuss how AeroVision can support your mission? Our team is standing by.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-4 space-y-10"
            >
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center shrink-0">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-sm text-foreground whitespace-pre-line">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="lg:col-span-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { name: "name", label: "Full Name", placeholder: "John Smith", type: "text", required: true },
                    { name: "email", label: "Email", placeholder: "john@agency.gov", type: "email", required: true },
                    { name: "organization", label: "Organization", placeholder: "Department of Defense", type: "text" },
                    { name: "subject", label: "Subject", placeholder: "Demo Request", type: "text" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">Message</label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
