import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const skills = [
    { name: "React", level: 60, category: "Frontend" },
    { name: "Node.js", level: 50, category: "Backend" },
    { name: "Python", level: 40, category: "Language" },
    { name: "AWS", level: 30, category: "Cloud" },
    { name: "MongoDB", level: 65, category: "Database" },
    { name: "SQL", level: 50, category: "Database" },
    { name: "Java", level: 80, category: "Language" },
    { name: "C", level: 50, category: "Language" },
    { name: "Java Script", level: 55, category: "Language" },
    { name: "Express.js", level: 40, category: "Backend" },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Cloud",
    "Language",
    
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 100 },
    },
    exit: { opacity: 0, y: -20 },
  };

  const SkillBar = ({ skill }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="glass p-6 rounded-xl hover:glow-primary transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-lg">{skill.name}</h4>
        <span className="text-primary font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <div className="mt-2">
        <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary/20 rounded-md">
          {skill.category}
        </span>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Expertise
          </h2>
          <h1 className="text-5xl font-bold mb-6">
            Technical <span className="text-gradient-neon">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various
            technologies and frameworks I’ve worked with.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === category
                  ? "bg-gradient-primary text-background glow-primary"
                  : "glass border border-primary/30 text-primary hover:border-primary hover:glow-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gradient-primary">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Technology evolves rapidly, and I’m committed to staying at the
              forefront. I regularly explore new frameworks, attend workshops,
              and contribute to projects to enhance my skills and knowledge.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-muted-foreground">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">500+</div>
                <div className="text-muted-foreground">Coding Problems Solved</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
