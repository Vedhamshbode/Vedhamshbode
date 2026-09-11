import ShowcaseGrid from "./ShowcaseGrid";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <ShowcaseGrid
      id="projects"
      keyPrefix="project"
      heading="Projects"
      subheading="Things I've built on my own or in small teams. Click any of them for the longer story."
      items={projects}
    />
  );
}
