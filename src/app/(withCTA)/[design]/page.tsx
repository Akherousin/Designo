import Intro from '@/components/Intro';
import { DESIGNPAGEINFO } from '@/data';
import ProjectSection from '@/components/ProjectsSection';
import CardLinkSection from '@/components/CardLinkSection';
import styles from './page.module.css';
import { DesignPages } from '@/data';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { design: DesignPages };
}) {
  const pageInfo = DESIGNPAGEINFO[params.design];

  return {
    title: `${pageInfo.title} Projects - Designo`,
  };
}

export default async function DesignPage({
  params,
}: {
  params: { design: DesignPages };
}) {
  const pageInfo = DESIGNPAGEINFO[params.design];

  return (
    <>
      <div className={`${styles.grid} max-width-container`}>
        <Intro title={pageInfo.title} text={pageInfo.text} />
        <ProjectSection projects={pageInfo.projects} />
        <CardLinkSection excludeHref={params.design} />
      </div>
    </>
  );
}
