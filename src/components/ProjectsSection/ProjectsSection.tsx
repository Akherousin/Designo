import { Project } from '@/data';
import CardProject from '../CardProject/CardProject';
import styles from './ProjectsSection.module.css';

interface ProjectSectionProps {
  projects: Project[];
}

function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <section className={styles.projects}>
      {projects.map((project) => {
        return (
          <CardProject
            key={project.title}
            image={project.image}
            title={project.title}
            text={project.text}
          />
        );
      })}
    </section>
  );
}

export default ProjectSection;
