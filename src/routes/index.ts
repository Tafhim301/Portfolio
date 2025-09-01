import App from "@/App";
import SkillsSection from "@/components/Skills";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/projects";
import SingleProject from "@/pages/SingleProject";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children : [
        {
            path : '/',
            index : true,
            Component : HomePage

        },
        {
            path : '/projects',
            Component : ProjectsPage
        },
        {
            path : '/projects/:id',
            Component : SingleProject
        },
        {
            path : '/skills',
            Component : SkillsSection
        }
    ]
  },
]);