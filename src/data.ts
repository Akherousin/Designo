import { StaticImageData } from 'next/image';
import imgExpress from '@/assets/web-design/desktop/image-express.jpg';
import imgTransfer from '@/assets/web-design/desktop/image-transfer.jpg';
import imgPhoton from '@/assets/web-design/desktop/image-photon.jpg';
import imgBuilder from '@/assets/web-design/desktop/image-builder.jpg';
import imgBlogr from '@/assets/web-design/desktop/image-blogr.jpg';
import imgCamp from '@/assets/web-design/desktop/image-camp.jpg';
import imgAirfilter from '@/assets/app-design/desktop/image-airfilter.jpg';
import imgEyecam from '@/assets/app-design/desktop/image-eyecam.jpg';
import imgFaceit from '@/assets/app-design/desktop/image-faceit.jpg';
import imgLoopstudios from '@/assets/app-design/desktop/image-loopstudios.jpg';
import imgTodo from '@/assets/app-design/desktop/image-todo.jpg';
import imgBoxedwater from '@/assets/graphic-design/desktop/image-boxed-water.jpg';
import imgChange from '@/assets/graphic-design/desktop/image-change.jpg';
import imgScience from '@/assets/graphic-design/desktop/image-science.jpg';

export interface Project {
  title: string;
  text: string;
  image: string | StaticImageData;
}

interface PageInfo {
  title: string;
  text: string;
  projects: Project[];
}

export type DesignPages = 'web-design' | 'app-design' | 'graphic-design';

type DesignPageInfo = {
  [P in DesignPages]: PageInfo;
};

export const DESIGNPAGEINFO: DesignPageInfo = {
  'web-design': {
    title: 'Web Design',
    text: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    projects: [
      {
        title: 'Express',
        text: 'A multi-carrier shipping website for ecommerce businesses',
        image: imgExpress,
      },
      {
        title: 'Transfer',
        text: 'Site for low-cost money transfers and sending money within seconds',
        image: imgTransfer,
      },
      {
        title: 'Photon',
        text: 'A state-of-the-art music player with high-resolution audio and DSP effects',
        image: imgPhoton,
      },
      {
        title: 'Builder',
        text: 'Connects users with local contractors based on their location',
        image: imgBuilder,
      },
      {
        title: 'Blogr',
        text: 'Blogr is a platform for creating an online blog or publication',
        image: imgBlogr,
      },
      {
        title: 'Camp',
        text: 'Get expert training in coding, data, design, and digital marketing',
        image: imgCamp,
      },
    ],
  },
  'app-design': {
    title: 'App Design',
    text: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
    projects: [
      {
        title: 'Airfilter',
        text: 'Solving the problem of poor indoor air quality by filtering the air',
        image: imgAirfilter,
      },
      {
        title: 'Eyecam',
        text: 'Product that lets you edit your favorite photos and videos at any time',
        image: imgEyecam,
      },
      {
        title: 'Faceit',
        text: 'Get to meet your favorite internet superstar with the faceit app',
        image: imgFaceit,
      },
      {
        title: 'Todo',
        text: 'A todo app that features cloud sync with light and dark mode',
        image: imgTodo,
      },
      {
        title: 'Loopstudios',
        text: 'A VR experience app made for Loopstudios',
        image: imgLoopstudios,
      },
    ],
  },
  'graphic-design': {
    title: 'Graphic Design',
    text: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    projects: [
      {
        title: 'Tim Brown',
        text: `A book cover designed for 
      Tim Brown's new release, 'Change'`,
        image: imgChange,
      },
      {
        title: 'Boxed Water',
        text: 'A simple packaging concept made for Boxed Water',
        image: imgBoxedwater,
      },
      {
        title: 'Science!',
        text: 'A poster made in collaboration with the Federal Art Project',
        image: imgScience,
      },
    ],
  },
};
