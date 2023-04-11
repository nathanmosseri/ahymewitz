import {
  AcademicCapIcon,
  // CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/law-photo3.jpg';
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
import profilepic from '../images/a_hym_pic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  // SkillGroup,
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
        I am an <strong>associate in Prince Lobel's Purchase, New York office</strong> and a member of the firm’s <strong>Cannabis industry group</strong> assisting with the <strong>formation, licensing, and operation of cannabis establishments.</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me practicing <strong>Brazilian Jiu Jitsu</strong> and <strong>trying out new recipes.</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1VLJ4aOa_TGnyUVnvlWRjLI5o9omkFkm-/view?ts=6434754a',
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
  description: `Alexander first joined Prince Lobel as an associate in 2022. During law school, Alexander worked with the Volunteers of Legal Services Veterans-Initiative, where he represented veteran indigent clients in probate court. He also served as an oralist for the New York Law School International Arbitration Moot team, participating in the moots in both Vienna and Singapore.
  Throughout law school, Alexander worked for a preeminent New York firm researching procedural and substantive legal issues focusing primarily on commercial litigation, and alternative dispute resolution. He was also awarded a full-tuition Merit Scholarship from New York Law School.
  Prior to law school, Alexander attended the State University of New York – Binghamton, graduating, cum laude, with a major in political science and a minor in Israel studies. After graduating college, but before attending law school, Alexander served as a combat soldier in the Israeli Defense Forces and as an administrative aide in the Israeli Parliament.`,
  aboutItems: [
    {label: 'Location', text: 'Brooklyn, NY', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Brazilian Jiu Jitsu, Cooking, Dogs', Icon: SparklesIcon},
    {label: 'Study', text: 'SUNY-Binghamton, New York Law School', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Associate at Prince Lobel Tye LLP', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
// export const skills: SkillGroup[] = [
//   {
//     name: 'Spoken languages',
//     skills: [
//       {
//         name: 'English',
//         level: 10,
//       },
//       {
//         name: 'French',
//         level: 4,
//       },
//       {
//         name: 'Spanish',
//         level: 3,
//       },
//     ],
//   },
//   {
//     name: 'Frontend development',
//     skills: [
//       {
//         name: 'React',
//         level: 9,
//       },
//       {
//         name: 'Typescript',
//         level: 7,
//       },
//       {
//         name: 'GraphQL',
//         level: 6,
//       },
//     ],
//   },
//   {
//     name: 'Backend development',
//     skills: [
//       {
//         name: 'Node.js',
//         level: 8,
//       },
//       {
//         name: 'Rust',
//         level: 5,
//       },
//       {
//         name: 'Golang',
//         level: 4,
//       },
//     ],
//   },
//   {
//     name: 'Mobile development',
//     skills: [
//       {
//         name: 'React Native',
//         level: 9,
//       },
//       {
//         name: 'Flutter',
//         level: 4,
//       },
//       {
//         name: 'Swift',
//         level: 3,
//       },
//     ],
//   },
// ];

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
    description: 'New York Eases Testing Requirements for Cannabis Flower Products',
    url: 'https://cannabislaw.report/new-york-eases-testing-requirements-for-cannabis-flower-products/',
    image: cannabisLaw,
  },
  {
    // title: 'Cannabis Law Journal',
    description: 'MRTA Legislation Breakdown',
    url: 'https://journal.cannabislawreport.com/wp-content/uploads/2022/10/M.R.T.A-Legislation-Breakdown.pdf',
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
    url: 'https://journal.cannabislawreport.com/mike-raschilla-alexander-hymowitz-entheogens-an-alternative-treatment-for-pain-and-depression/',
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
    url: 'https://journal.cannabislawreport.com/alexander-hymowitz-the-effects-cannabis-production-has-on-utility-grids/',
    image: cannabisLaw,
  },
  {
    // title: 'Cannabis Law Journal',
    description: 'The NBA’s Ending of Cannabis Testing is a Step in the Right Direction, but Misses the Rim',
    url: 'https://journal.cannabislawreport.com/alexander-hymowitz-the-nbas-ending-of-cannabis-testing-is-a-step-in-the-right-direction-but-misses-the-rim/',
    image: cannabisLaw,
  },
  {
    description: 'Cannabis Case Summary: Conant v. Walters',
    url: 'https://journal.cannabislawreport.com/anylaw-cannabis-case-summary-conant-v-walters/',
    image: anyLaw
  },
  {
    description: 'Medical Marijuana and Worker’s Compensation in New York',
    url: 'https://cannabislaw.report/alexander-hymowitz-medical-marijuana-and-workers-compensation-in-new-york/',
    image: cannabisLaw
  },
  {
    description: 'Valley Green Grow, Inc. v. Charlton',
    url: 'https://cannabislaw.report/alexander-hymowitz-valley-green-grow-inc-v-charlton/',
    image: cannabisLaw
  },
  {
    description: '1440 G. Pacific Realty Corp. v. McCurdy',
    url: 'https://cannabislaw.report/alexander-hymowitz-1440-g-pacific-realty-corp-v-mccurdy/',
    image: cannabisLaw
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2013– 2017',
    location: 'Binghamton University, Harpur College of Arts & Sciences',
    title: 'Bachelor of Arts, Political Science',
    content: <p><strong>Awards:</strong> Dean’s List, <em>Cum Laude</em> <br/> <strong>Activities:</strong> Alpha Epsilon Pi, Sergeant-At-Arms | Brazilian Jiu Jitsu Team, President</p>,
  },
  {
    date: '2019–2022',
    location: 'New York Law School',
    title: 'Juris Doctorate',
    content: <p><strong>Honors:</strong> Dean’s Award for Student Leadership | Dean’s List; High Honors | Trustee Scholar (Full Tuition Scholarship) <br/> <strong>Activities:</strong> Student Veteran’s Association; President | Jewish Law Students Society; Executive Board | Vis International Arbitration Moot; Oralist & Team Captain 2021 & 2022 | Teaching Assistant; Civil Procedure (Prof. Benson)</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2022 – Present',
    location: 'Prince Lobel Tye LLP',
    title: 'Associate Attorney',
    content: (
      <ul>
        <li><strong>-</strong> Drafted and filed court summons, complaints, appeals, motions, stipulations, and memorandums of law</li>
        <li><strong>-</strong> Acted as point of contact for 50+ clients focusing on business development, commercial litigation, and defense strategies</li>
        <li><strong>-</strong> Developed and implemented negotiation strategies and settlement disputes in 16 cases</li>
        <li><strong>-</strong> Collaborated with 6 partners to conduct and consolidate legal research on regulatory compliance issues in highly
        regulated industries like cannabis, telecommunications, pharmaceuticals, and health care</li>
        <li><strong>-</strong> Composed, revised, and copyedited 20+ operating agreements in areas of corporate creation and restructuring</li>
      </ul>
    ),
  },
  {
    date: 'August 2019 – August 2021',
    location: 'Marco & Sitaras PLLC',
    title: 'Principal Law Clerk',
    content: (
      <ul>
        <li><strong>-</strong> Conducted complex substantive and procedural legal research for 3 partners focusing on contract disputes and litigation</li>
        <li><strong>-</strong> Supported litigation with legal research, motion drafting, and document review for over 55 cases</li>
        <li><strong>-</strong> Analyzed and researched relevant case law in connection with 100 pleading and motion drafts</li>
        <li><strong>-</strong> Coordinated calendars and scheduled client meetings for 7+ attorneys</li>
      </ul>
    ),
  },
  {
    date: 'April 2017 – April 2018',
    location: 'Israel Defense Forces',
    title: 'Private | Marksman | 432nd “Tzabar” Company',
    content: (
      <ul>
        <li><strong>-</strong> Constructed & maintained various weapons systems ensuring operational readiness</li>
        <li><strong>-</strong> Served as an infantry team leader for major training protocols</li>
        <li><strong>-</strong> Participated in combat support trainings, including radio communications and trauma and wound care</li>
        <li><strong>-</strong> Trained in hand-to-hand combat and rifle marksman skills</li>
      </ul>
    ),
  },
  {
    date: 'Summer of 2015 and 2016',
    location: 'Israeli Parliament Offices of Hilik Bar and Yoel Hasson',
    title: 'Governmental Intern | Knesset 19 & 20',
    content: (
      <ul>
        <li><strong>-</strong> Liaised with foreign and domestic dignitaries to draft and implement international security policy protocols</li>
        <li><strong>-</strong> Formulated and scheduled the English and international section meetings of the Israeli National Caucus</li>
        <li><strong>-</strong> Researched, created, and wrote domestic legislative bills that were voted into law in Israel</li>
        <li><strong>-</strong> Oversaw daily operations of the international offices of MK Yoel Hasson and MK Hilik Bar</li>
      </ul>
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
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'Alex.hymowitz@gmail.com',
      href: 'mailto:Alex.hymowitz@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Brooklyn, NY',
      href: 'https://www.google.ca/maps/place/Brooklyn,+NY/@40.648545,-73.949316',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Alexander Hymowitz, Esq.',
      href: 'https://www.linkedin.com/in/alexander-hymowitz/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alexander-hymowitz/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/a_hymo/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
