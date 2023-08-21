import Intro from '@/components/Intro';
import { PROJECTS } from '@/data';
import ProjectSection from '@/components/ProjectsSection';
import CardLinkSection from '@/components/CardLinkSection';
import CallToAction from '@/components/CallToAction';
import Separator from '@/components/Separator/Separator';

export default function GraphicDesignPage() {
  return (
    <>
      <Intro
        title="Graphic Design"
        text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <Separator size="small" />
      <ProjectSection projects={PROJECTS.graphicDesign} />
      <Separator size="small" />
      <CardLinkSection excludeHref="graphic-design" />
      <Separator size="small" />
      <CallToAction />
    </>
  );
}
