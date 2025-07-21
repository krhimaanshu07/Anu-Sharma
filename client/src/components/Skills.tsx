import { motion } from "framer-motion";
import { Crown, TrendingUp, Cog, Handshake, Users, Target } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import { useEffect, useState } from "react";

interface Skill {
  icon: React.ComponentType<any>;
  title: string;
  percentage: number;
  description: string;
  gradient: string;
}

const skills: Skill[] = [
  {
    icon: Crown,
    title: "Strategic Leadership",
    percentage: 95,
    description: "Corporate strategy, vision development, and organizational transformation",
    gradient: "from-blue-500 to-violet-500"
  },
  {
    icon: Target,
    title: "Project Management",
    percentage: 92,
    description: "Large-scale industrial projects worth INR 200+ Crores",
    gradient: "from-violet-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    percentage: 90,
    description: "Market expansion, client relations, and revenue growth",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Cog,
    title: "Operations Management",
    percentage: 94,
    description: "Manufacturing optimization, quality control, and process improvement",
    gradient: "from-green-500 to-blue-500"
  },
  {
    icon: Handshake,
    title: "Stakeholder Management",
    percentage: 88,
    description: "Client relations, regulatory compliance, and community engagement",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Team Leadership",
    percentage: 91,
    description: "Workforce development, performance management, and organizational culture",
    gradient: "from-orange-500 to-red-500"
  }
];

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>(new Array(skills.length).fill(false));

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setAnimatedSkills(new Array(skills.length).fill(true));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting]);

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            variants={fadeInUp}
          >
            Core Strengths
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Leveraging decades of experience in strategic leadership and operational excellence
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className="glass-morphism rounded-2xl p-6 neumorphism group shadow-lg border border-white/20 dark:border-white/10"
                variants={fadeInUp}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
              >
                <motion.div variants={scaleOnHover}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${skill.gradient} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="text-white text-xl w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Expertise Level</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`skill-bar bg-gradient-to-r ${skill.gradient} h-2 rounded-full`}
                        initial={{ width: "0%" }}
                        animate={animatedSkills[index] ? { width: `${skill.percentage}%` } : { width: "0%" }}
                        transition={{ duration: 2, ease: "easeOut", delay: index * 0.2 }}
                      />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
