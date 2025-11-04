import { motion } from "framer-motion";
import { ChevronDown, Code, Sparkles, Zap } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Scene3D from "@/components/3D/Scene3D";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <ParticlesBackground />
      <Scene3D />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space/50 via-transparent to-background/30 -z-10" />

      {/* Hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Floating icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8 mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className="p-3 glass rounded-xl glow-primary"
          >
            <Code className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="p-3 glass rounded-xl glow-accent"
          >
            <Sparkles className="w-8 h-8 text-accent" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="p-3 glass rounded-xl glow-neon"
          >
            <Zap className="w-8 h-8 text-neon-cyan" />
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="text-gradient-primary">Creative</span>
          <br />
          <span className="text-gradient-neon">Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Turning ideas into 
          <span className="text-primary font-semibold"> real-world applications </span> 
          that blend technology, design, and innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => navigate("/projects")}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-background font-semibold px-8 py-6 text-lg glow-primary hover:glow-primary transition-all duration-300"
          >
            View My Work
          </Button>
          <Button
            onClick={() => navigate("/contact")}
            variant="outline"
            size="lg"
            className="glass border-primary/30 hover:border-primary text-primary hover:glow-primary px-8 py-6 text-lg transition-all duration-300"
          >
            Let's Connect
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;