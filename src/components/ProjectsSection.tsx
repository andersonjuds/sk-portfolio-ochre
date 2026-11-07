import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Code, Users, Database } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "FreshBasket",
      subtitle: "E-Commerce Grocery Website",
      role: "Project Manager, Developer, Tester",
      technologies: ["Python", "HTML", "CSS"],
      description: [
        "Coordinated project planning and task execution",
        "Developed responsive web pages and user flows",
        "Implemented product listing and cart functionality",
      ],
      icon: Database,
      status: "Completed",
    },
    {
      title: "Fake Job Detection",
      subtitle: "NLP & Email/Message Scanning",
      role: "Developer & Researcher",
      technologies: ["Python", "NLP"],
      description: [
        "Developing a system to identify fraudulent job postings",
        "Applied text analysis and basic NLP techniques",
        "Completed data collection and preprocessing stages",
      ],
      icon: Code,
      status: "In Progress",
    },
    {
      title: "Vessel Turnaround Time Prediction",
      subtitle: "Optimum Time Prediction Model",
      role: "Data Analyst, Developer",
      technologies: ["Python", "Data Analytics"],
      description: [
        "Developing Python-based analytical model for vessel turnaround time",
        "Performing data collection and exploratory data analysis",
        "Working on data cleaning and feature understanding",
      ],
      icon: Users,
      status: "Ongoing",
    },
  ];

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 hero-gradient opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Some of my recent works and contributions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card p-6 animated-border group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-500/10 text-green-400"
                      : project.status === "In Progress"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-display mb-1">{project.title}</h3>
              <p className="text-primary text-sm mb-2">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-4">{project.role}</p>

              {/* Description */}
              <ul className="space-y-2 mb-6">
                {project.description.map((desc, dIndex) => (
                  <li
                    key={dIndex}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <motion.button
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <Github size={16} />
                  Code
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <ExternalLink size={16} />
                  Demo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
