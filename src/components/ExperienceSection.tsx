import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "INTRAINZ",
      period: "Oct 2023 – Nov 2023",
      highlights: [
        "Worked on Python-based models and structured workflows",
        "Assisted in data preprocessing and basic model testing",
        "Improved logical thinking and analytical problem-solving skills",
      ],
    },
    {
      title: "IT / Server-Side Intern",
      company: "Chennai Port Trust",
      period: "Aug 2024",
      highlights: [
        "Assisted in server-side web development using HTML",
        "Supported backend functionality testing and documentation",
        "Gained understanding of server operations and web structure",
        "Focused on performance, accuracy, and system reliability",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey so far</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="relative mb-8 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary to-transparent" />
              )}

              <div className="glass-card p-6 md:p-8 animated-border ml-0 md:ml-12">
                {/* Icon */}
                <motion.div
                  className="absolute -left-3 md:left-0 top-6 w-12 h-12 rounded-full bg-background glass-card flex items-center justify-center glow-effect"
                  whileHover={{ scale: 1.1 }}
                >
                  <Briefcase className="w-5 h-5 text-primary" />
                </motion.div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      className="flex items-start gap-2 text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + hIndex * 0.1 }}
                    >
                      <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
