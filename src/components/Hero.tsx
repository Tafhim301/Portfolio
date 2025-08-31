import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card} from "@/components/ui/card"
import img from '@/assets/Hero-Img.png'
import { Contact, Download, File } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-10 w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700  via-gray-900 to-gray-600 text-white px-6">
      <div className="container lg:text-start text-center mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Hi, I’m <span className="text-gray-400">Tafhimul</span> <br />
            <span className="text-gray-300">Full Stack Developer</span>
          </h1>

          <p className="text-lg text-gray-400 lg:max-w-lg">
            I build modern, scalable, and user-friendly web applications using
            the latest technologies in frontend and backend development.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Button className="hover:bg-secondary hover:text-black" asChild size="lg">
              <a href="/resume.pdf" download>
              <Download></Download>  Download Resume
              </a>
            </Button>
            <Button  className="hover:text-white" asChild size="lg" variant={"secondary"}>
              <a target="_blank" href="/resume.pdf">
                <File></File> Preview Resume
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-gray-200 hover:text-white"
            >
              <a href="#contact"><Contact></Contact> Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex justify-center"
        >
          <Card className="bg-gradient-to-br from-gray-100 to-gray-100 border-gray-900 shadow-2xl rounded-2xl">
            
              <img
                src={img}
                alt="Hero illustration"
                className="object-cover w-96 md:w-full lg:w-[420px] rounded-xl "
              />
      
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
