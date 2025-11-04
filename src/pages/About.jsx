import { motion } from "framer-motion";
import { Award, Coffee, Heart, Users } from "lucide-react";



const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "4 Projects",
      description: "Successfully Completed ",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "2 Internships",
      description: "Hands-on experience in web development & AWS",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "500 Problems",
      description: "Of coding and problem solving",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passionate",
      description: "About creating amazing experiences",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" ,
        damping: 25,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left column - Text content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                About Me
              </h2>
              <h1 className="text-5xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="text-gradient-neon">YOGESH D</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A dedicated Computer Science Engineer and aspiring full-stack developer,
                passionate about building modern web applications and scalable digital
                solutions.
              </p>
           </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                As a CSE student at Dr. N.G.P Institute of Technology, I’ve gained hands-on
                experience through internships and projects in web development and cloud
                computing. From designing responsive UIs to deploying serverless
                applications with AWS, I enjoy solving real-world problems using
                cutting-edge technologies like React.js, Node.js, MongoDB, and modern
                frameworks.
             </p>
             <p className="text-muted-foreground leading-relaxed">
               I believe in writing clean, efficient code and creating intuitive user
               experiences. My projects, such as a Personal Finance & Investment Dashboard
               and a Movie Recommendation Web App, showcase my skills in MERN stack
               development, API integration, and data visualization.
             </p>
             <p className="text-muted-foreground leading-relaxed">
               Beyond coding, I’m constantly learning, exploring emerging technologies, and
               participating in workshops and paper presentations to grow as a developer.
              </p>
            </motion.div>


            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Frontend Development</h4>
                    <p className="text-muted-foreground">
                      Creating responsive, interactive user interfaces with
                      React, JavaScript, and modern CSS frameworks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Backend Development</h4>
                    <p className="text-muted-foreground">
                      Building scalable APIs and server-side applications with
                      Node.js, Express.js, and  MongoDB.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">UI/UX Design</h4>
                    <p className="text-muted-foreground">
                      Designing intuitive interfaces and crafting seamless user
                      experiences that users love.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Achievements */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/mine2.jpeg"
                alt="Yogesh"
                className="w-80 h-[500px] object-cover shadow-lg border-2 border-white/30 bg-white/10 backdrop-blur-md rounded-xl"

              />
          </motion.div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-8 text-center text-gradient-neon">
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center space-y-3 p-4 rounded-xl hover:glass transition-all duration-300"
                  >
                    <div className="flex justify-center text-primary">
                      {achievement.icon}
                    </div>
                    <h4 className="font-bold text-lg">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun fact */}
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-2xl text-center"
            >
              <h4 className="font-semibold mb-2">Fun Fact</h4>
              <p className="text-muted-foreground">
                I've written over{" "}
                <span className="text-primary font-bold">50,000 lines</span> of
                code and still get excited about every new project! ⚡
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;