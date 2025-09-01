import { projects } from "@/Data/Projects";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function SingleProject() {
    const { id } = useParams();
    const project = projects.find((p) => String(p.id) === id);

    if (!project) {
        return (
            <div className="flex items-center justify-center min-h-screen text-gray-400 text-xl bg-gray-900">
                Project not found 🚫
            </div>
        );
    }

    return (
        <div className="bg-gray-900 min-h-screen text-gray-100 px-6 py-16">
            <div className="container mx-auto max-w-5xl">
           
                <Card className="bg-gray-800 rounded-3xl p-8 shadow-xl border-none">
                    <CardHeader className="p-0">
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="rounded-3xl w-full max-h-[600px] object-cover shadow-2xl mb-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        <CardTitle className="text-4xl md:text-5xl font-extrabold text-white text-center">
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-400 mt-4 text-center">
                            {project.broadDescription}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-8">
                      
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4 text-blue-400 text-center">
                                Technologies Used
                            </h3>
                            <div className="flex justify-center gap-6 flex-wrap">
                                {project.techStack.map((tech, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="flex flex-col items-center"
                                    >
                                        <tech.icon className="w-12 h-12 text-blue-400" />
                                        <span className="text-sm text-gray-300 mt-2">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Key Features Section */}
                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-4 text-blue-400 text-center">
                                Key Features
                            </h3>
                            <ul className="list-none space-y-3 max-w-2xl mx-auto">
                                {project.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                        className="flex items-start text-gray-300"
                                    >
                                        <Sparkles className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-6 mt-12">
                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition font-semibold shadow-lg"
                                >
                                    <ExternalLink className="w-5 h-5" /> Live Demo
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-xl transition font-semibold shadow-lg"
                                >
                                    <Github className="w-5 h-5" /> GitHub
                                </a>
                            )}
                        </div>
                    </CardContent>
                </Card>

         
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Link
                        to="/projects"
                        className="inline-flex items-center text-gray-400 hover:text-gray-200 transition text-lg"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Projects
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}