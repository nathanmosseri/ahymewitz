import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/lawyer-photo.jpg';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import princeLobel from '../images/portfolio/Prince-Lobel-image.jpg';
import cannabisLaw from '../images/portfolio/cannabis-law-journal.jpg';
import anyLaw from '../images/portfolio/anylaw.jpg'
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alexander Hymowitz',
  description: "Personal Website of Alexander Hymowitz",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'Publications',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Alexander Hymowitz`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    // title: 'Prince Lobel Client Alert',
    description: 'OCM ISSUES DUE DILIGENCE AND APPLICATION PROCESS CHECKLIST',
    url: 'https://princelobel.com/ocm-issues-due-diligence-and-application-process-checklist/',
    image: princeLobel,
  },
  {
    // title: 'Prince Lobel Client Alert',
    description: "OCM Inaugural Annual Report:  Five Major Highlights from New York’s Cannabis Industry 2022",
    url: 'https://princelobel.com/client-alert-ocm-inaugural-annual-report-five-major-highlights-from-new-yorks-cannabis-industry-2022/',
    image: princeLobel,
  },
  {
    // title: 'Prince Lobel Client Alert',
    description: "The Application for New York’s Cannabis Compliance Training& Mentorship Program is Live through November 3, 2022",
    url: 'https://princelobel.com/the-application-for-new-yorks-cannabis-compliance-training-mentorship-program-is-live-through-november-3-2022/',
    image: princeLobel,
  },
  {
    // title: 'Cannabis Law Journal',
    description: 'Prince Lobel:  New York Eases Testing Requirements for Cannabis Flower Products',
    url: 'https://cannabislaw.report/new-york-eases-testing-requirements-for-cannabis-flower-products/',
    image: cannabisLaw,
  },
  {
    // title: 'Cannabis Law Journal',
    description: 'Prince Lobel:  MRTA Legislation Breakdown',
    url: 'https://journal.cannabislaw.report/prince-lobel-mrta-legislation-breakdown/',
    image: cannabisLaw,
  },
  {
    // title: 'Anylaw.com',
    description: 'Scott v. City of Buffalo and the Buffalo Fire Department',
    url: 'https://www.anylaw.com/media/2022/02/01/scott-v-city-of-buffalo-and-the-buffalo-fire-department/',
    image: anyLaw,
  },
  {
    // title: 'Anylaw.com',
    description: 'Commonwealth of Northern Mariana Islands v. Hocog, 202 MP 7,',
    url: 'https://www.anylaw.com/media/2021/12/06/commonwealth-of-northern-mariana-islands-v-hocog-2020-mp-7/',
    image: anyLaw,
  },
  {
    // title: 'Cannabis Law Journal',
    description: 'Entheogens:  An Alternative Treatment for Pain and Depression',
    url: 'https://journal.cannabislaw.report/mike-raschilla-alexander-hymowitz-entheogens-an-alternative-treatment-for-pain-and-depression/',
    image: cannabisLaw,
  },
  {
    // title: 'Cannabis Law Journal.',
    description: "New York’s Conditional Cannabis Cultivation Bill Breakdown",
    url: 'https://journal.cannabislawreport.com/alexander-hymowitz-new-yorks-conditional-cannabis-cultivation-bill-breakdown/',
    image: cannabisLaw,
  },
  {
    // title: 'Cannabis Law Journal',
    description: 'The Effects Cannabis Production Has on Utility Grids',
    url: 'https://journal.cannabislaw.report/alexander-hymowitz-the-effects-cannabis-production-has-on-utility-grids/',
    image: cannabisLaw,
  },
  {
    // title: 'Cannabis Law Journal',
    description: 'The NBA’s Ending of Cannabis Testing is a Step in the Right Direction, but Misses the Rim',
    url: 'https://journal.cannabislawreport.com/alexander-hymowitz-the-nbas-ending-of-cannabis-testing-is-a-step-in-the-right-direction-but-misses-the-rim/',
    image: cannabisLaw,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Prince Lobel Client Alert',
      text: 'OCM ISSUES DUE DILIGENCE AND APPLICATION PROCESS CHECKLIST',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Prince Lobel Client Alert',
      text: "OCM Inaugural Annual Report:  Five Major Highlights from New York’s Cannabis Industry 2022",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Cannabis Law Journal ',
      text: 'Prince Lobel:  New York Eases Testing Requirements for Cannabis Flower Products',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
