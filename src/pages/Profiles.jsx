import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Code, Trophy, ExternalLink } from "lucide-react";

const Profile = () => {
  const profiles = [
    {
      id: 1,
      name: "GitHub",
      username: "@yogu044",
      description: "Explore my open-source projects, code experiments, and personal repositories.",
      icon: <Github className="w-8 h-8 text-primary" />,
      url: "https://github.com/yogu044",
      category: "Developer"
    },
    {
      id: 2,
      name: "LinkedIn",
      username: "Yogesh D",
      description: "Connect with me professionally and explore my career journey and achievements.",
      icon: <Linkedin className="w-8 h-8 text-primary" />,
      url: "https://www.linkedin.com/in/yogesh-d-928417322/",
      category: "Professional"
    },
    {
      id: 3,
      name: "Instagram",
      username: "@sergioyogu_________04",
      description: "A glimpse into my creative and personal side — photography, design, and lifestyle.",
      icon: <Instagram className="w-8 h-8 text-primary" />,
      url: "https://www.instagram.com/sergioyogu_________04/",
      category: "Social"
    },
    {
      id: 4,
      name: "LeetCode",
      username: "Yogesh D",
      description: "Sharpening problem-solving and algorithmic thinking with daily challenges.",
      icon: <Code className="w-8 h-8 text-primary" />,
      url: "https://leetcode.com/u/yogu_004/",
      category: "Competitive"
    },
    {
      id: 5,
      name: "CodeChef",
      username: "Yogesh_04",
      description: "Practicing data structures, algorithms, and contests to improve coding efficiency.",
      icon: <Trophy className="w-8 h-8 text-primary" />,
      url: "https://www.codechef.com/users/yogesh_40",
      category: "Competitive"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 100 },
    },
  };

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
            Connect
          </h2>
          <h1 className="text-5xl font-bold mb-6">
            My <span className="text-gradient-neon">Profiles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow and connect with me across different platforms to explore my work,
            projects, and personal interests.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500"
            >
              {/* Icon Section */}
              <div className="relative h-48 bg-secondary/20 flex items-center justify-center">
                {profile.icon}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-glass text-sm rounded-full border border-primary/30 text-primary">
                    {profile.category}
                  </span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6 space-y-4 text-center">
                <h3 className="text-xl font-bold text-gradient-primary">
                  {profile.name}
                </h3>
                <p className="text-sm text-muted-foreground">{profile.username}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {profile.description}
                </p>

                <Button
                  size="sm"
                  className="bg-gradient-primary hover:opacity-90 text-background font-medium mt-3"
                  onClick={() => window.open(profile.url, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Profile
                </Button>
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
              Want to collaborate?
            </h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out to me on any platform or through the contact page — 
              let’s create something amazing together.
            </p>
            <Button
              size="lg"
              className="bg-gradient-neon hover:opacity-90 text-background font-semibold px-8 py-6 glow-accent"
              onClick={() => window.open('/contact', '_self')}
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
