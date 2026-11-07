import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "9.34" },
    { icon: Award, label: "Internships", value: "2" },
    { icon: Target, label: "Projects", value: "3+" },
    { icon: Sparkles, label: "Certificates", value: "3" },
  ];

  const education = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "JNN Institute of Engineering",
      period: "Nov 2022 - Nov 2026",
      score: "CGPA: 9.34",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St. Mary's Matric Higher Secondary School",
      period: "June 2021 - May 2022",
      score: "Score: 8.49",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St. Mary's Matric Higher Secondary School",
      period: "June 2019 - May 2020",
      score: "Score: 8.56",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know my background and journey</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6">
              Aspiring Software Developer
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Computer Science Engineering undergraduate with a strong
              academic record and hands-on experience in Python, web technologies,
              artificial intelligence, and data analytics.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Through internships at INTRAINZ and Chennai Port Trust, I've gained
              practical experience in AI models, server-side development, and data
              preprocessing. I'm constantly learning and seeking opportunities to apply
              my analytical and technical skills to solve real-world challenges.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 text-center animated-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold font-display mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="glass-card p-6 relative overflow-hidden animated-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20" />
                  <h4 className="font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-primary">{edu.period}</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
