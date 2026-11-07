import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certificates = [
    {
      title: "Introduction to IOT",
      date: "10th December 2022",
    },
    {
      title: "Introduction to Cloud Computing",
      date: "09 December 2022",
    },
    {
      title: "Introduction to Data Analytics",
      date: "09 December 2022",
    },
  ];

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Certificates</span>
          </h2>
          <p className="section-subtitle">Professional certifications and achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="glass-card p-6 text-center animated-border"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-semibold font-display mb-3">{cert.title}</h3>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
