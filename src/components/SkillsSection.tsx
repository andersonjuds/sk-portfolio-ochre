import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Brain, Wrench, Users, MessageSquare } from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 40 },
        { name: "C", level: 40 },
      ],
    },
    {
      icon: Database,
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "Python AI Models", level: 70 },
        { name: "NLP Basics", level: 60 },
        { name: "Data Preprocessing", level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Analytics",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Data Analysis", level: 70 },
        { name: "Debugging", level: 80 },
      ],
    },
    {
      icon: MessageSquare,
      title: "Core Skills",
      skills: [
        { name: "Problem Solving", level: 85 },
        { name: "Logical Thinking", level: 90 },
        { name: "Analytical Reasoning", level: 85 },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 85 },
        { name: "Leadership", level: 75 },
        { name: "Teamwork", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technical and professional competencies</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6 animated-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold font-display">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold font-display mb-6">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "English", level: "Proficient" },
              { name: "Tamil", level: "Native" },
            ].map((lang) => (
              <motion.div
                key={lang.name}
                className="px-6 py-3 glass-card animated-border"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-muted-foreground ml-2">({lang.level})</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
