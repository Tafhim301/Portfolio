"use client";
import { motion } from "framer-motion";
import { skills } from "@/Data/Skills";

const skillVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const, 
    },
  }),
};


export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full bg-gray-900 text-gray-100 py-20 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-8">
     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Technical Proficiency
          </h2>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
            Languages, frameworks, and tools I use to build modern applications.
          </p>
        </motion.div>

        
        <div className="space-y-16">
          {skills.map((group) => (
            <div key={group.category}>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-semibold text-cyan-500 mb-8 text-center"
              >
                {group.category}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    custom={i}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="relative group flex flex-col items-center justify-center p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-blue-500/60 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer overflow-hidden"
                   
                    transition={{
                      duration: 4,
                      repeat: 2,
                      ease: "easeInOut",
                    }}
                  >
            
                    <skill.icon size={32} className="text-blue-400 mb-3" />

                    <h4 className="text-sm font-medium text-gray-100">
                      {skill.name}
                    </h4>

                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-xs text-gray-300 px-3 py-2 bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 w-40"
                    >
                      {skill.description}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
