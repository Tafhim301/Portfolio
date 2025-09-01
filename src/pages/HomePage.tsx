import Hero from "@/components/Hero";
import SkillsSection from "@/components/Skills";
import ProjectsPage from "./projects";
import ContactPage from "@/components/Contact";
import BlogsPage from "./Blogs";


export default function HomePage() {
  return (
    <div className="grid gap-20">
        <Hero></Hero>
        <SkillsSection></SkillsSection>
        <ProjectsPage></ProjectsPage>
        <BlogsPage></BlogsPage>
        <ContactPage></ContactPage>
    </div>
  )
}
