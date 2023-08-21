import Intro from '@/components/Intro';
import { PROJECTS } from '@/data';
import ProjectSection from '@/components/ProjectsSection';
import CardLinkSection from '@/components/CardLinkSection';
import CallToAction from '@/components/CallToAction';
import Separator from '@/components/Separator/Separator';

export default function WebDesignPage() {
  return (
    <>
      <Intro
        title="Web Design"
        text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <Separator size="small" />
      <ProjectSection projects={PROJECTS.webDesign} />
      <Separator size="small" />
      <CardLinkSection excludeHref="web-design" />
      <Separator size="small" />
      <CallToAction />
    </>
  );
}
