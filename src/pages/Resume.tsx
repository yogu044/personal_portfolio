import { motion } from "framer-motion";
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Simulate PDF download
    toast({
      title: "Resume Downloaded!",
      description: "Your download should start shortly.",
    });
  };

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers on major project",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create intuitive user interfaces.",
      achievements: [
        "Built 15+ responsive web applications",
        "Improved user engagement by 35%",
        "Established component library used across teams"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: "Assisted in full-stack development projects and gained experience in modern web technologies.",
      achievements: [
        "Contributed to 10+ client projects",
        "Learned modern JavaScript frameworks",
        "Participated in agile development processes"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      description: "Graduated with honors, focusing on software engineering and data structures."
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Code Academy Pro",
      period: "2019",
      description: "Intensive 6-month program covering modern web development technologies."
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "React Advanced Certification",
    "Node.js Professional Certification"
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
        type: "spring" as const,
        damping: 25,
        stiffness: 100,
      },
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
            Professional Background
          </h2>
          <h1 className="text-5xl font-bold mb-6">
            My <span className="text-gradient-neon">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional journey, education,
            and achievements in software development.
          </p>
          
          {/* Download Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-background font-semibold px-8 py-6 glow-primary"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-primary rounded-lg text-background mr-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gradient-primary">
                  Professional Experience
                </h2>
              </div>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass p-6 rounded-xl hover:glow-primary transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-primary font-semibold">{job.company}</p>
                      </div>
                      <span className="text-muted-foreground bg-secondary/20 px-3 py-1 rounded-md text-sm">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-neon rounded-lg text-background mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gradient-neon">
                  Education
                </h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass p-6 rounded-xl hover:glow-accent transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-accent font-semibold">{edu.school}</p>
                      </div>
                      <span className="text-muted-foreground bg-secondary/20 px-3 py-1 rounded-md text-sm">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <motion.div variants={itemVariants} className="glass p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                <h3 className="font-bold text-lg">Quick Info</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="ml-2">San Francisco, CA</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="ml-2">5+ Years</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Languages:</span>
                  <span className="ml-2">English, Spanish</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="ml-2 text-neon-green">Available</span>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="glass p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 mr-2 text-accent" />
                <h3 className="font-bold text-lg">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div variants={itemVariants} className="glass p-6 rounded-xl text-center">
              <h3 className="font-bold mb-3">Interested?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Let's discuss how I can contribute to your team.
              </p>
              <Button
                size="sm"
                className="w-full bg-gradient-neon hover:opacity-90 text-background"
                onClick={() => window.open('/contact', '_self')}
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;