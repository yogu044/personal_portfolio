import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://example.com",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Modern dashboard with real-time analytics and machine learning insights",
      tech: ["React", "TypeScript", "D3.js", "Python"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://example.com",
      category: "Data Visualization"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Social platform with real-time messaging and content sharing",
      tech: ["React Native", "Socket.io", "Express", "PostgreSQL"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://example.com",
      category: "Mobile"
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "Collaborative task management with team features and notifications",
      tech: ["Vue.js", "Firebase", "Vuex", "PWA"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://example.com",
      category: "Productivity"
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto tracking with portfolio management and alerts",
      tech: ["React", "Chart.js", "WebSocket", "Redis"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://example.com",
      category: "Finance"
    },
    {
      id: 6,
      title: "Learning Platform",
      description: "Online learning platform with video streaming and progress tracking",
      tech: ["Next.js", "Prisma", "AWS", "Stripe"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://example.com",
      category: "Education"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Portfolio
          </h2>
          <h1 className="text-5xl font-bold mb-6">
            Featured <span className="text-gradient-neon">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development,
            UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-secondary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">
                    {project.id}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-glass text-sm rounded-full border border-primary/30 text-primary">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gradient-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-secondary/50 rounded-md text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass border-primary/30 hover:border-primary text-primary hover:glow-primary"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:opacity-90 text-background"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <Button
              size="lg"
              className="bg-gradient-neon hover:opacity-90 text-background font-semibold px-8 py-6 glow-accent"
              onClick={() => window.open('/contact', '_self')}
            >
              Start a Project
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;