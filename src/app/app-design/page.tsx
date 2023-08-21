import Intro from '@/components/Intro';
import { PROJECTS } from '@/data';
import ProjectSection from '@/components/ProjectsSection';
import CardLinkSection from '@/components/CardLinkSection';
import CallToAction from '@/components/CallToAction';
import Separator from '@/components/Separator/Separator';

export default function AppDesignPage() {
  return (
    <>
      <Intro
        title="App Design"
        text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <Separator size="small" />
      <ProjectSection projects={PROJECTS.appDesign} />
      <Separator size="small" />
      <CardLinkSection excludeHref="app-design" />
      <Separator size="small" />
      <CallToAction />
    </>
  );
}
