export const site = {
  name: 'Kunal Mahajan',
  headline: 'Developer. Deaf Educator. Curriculum Designer.',
  description: 'I build thoughtful digital experiences and accessible learning systems.',
  location: 'Pune, India',
  github: 'https://github.com/InKunalMahajan',
  linkedin: 'https://www.linkedin.com/in/inkunalmahajan/',
  email: '',
};

export type CaseStudy = {
  slug: string; name: string; category: string; summary: string;
  tags: string[]; number: string; challenge: string; approach: string;
  highlights: string[]; nextSteps: string[]; status: string;
};

export const projects: CaseStudy[] = [
  {
    slug:'signgyaan', name:'SignGyaan', category:'Accessible EdTech',
    summary:'An ISL-first concept for practical skill learning and mastery.',
    tags:['Education','Accessibility','Laravel'], number:'01', status:'Design and development',
    challenge:'Many learning experiences depend heavily on spoken explanations or school-board structures. The aim is to make independent practical learning more accessible.',
    approach:'Design an ISL-first, competency-based learning platform with clear mastery evidence, visual instructions and everyday-life outcomes.',
    highlights:['Independent English communication and mathematics pathways','Mastery states backed by learning evidence','Age-appropriate pathways for children, teenagers and adults','Accessible visual-first lesson design'],
    nextSteps:['Validate learning activities with users','Implement mastery workflows and assessments','Add authentic screenshots and measured results']
  },
  {
    slug:'teach-cms', name:'TEACH CMS', category:'Software Architecture',
    summary:'An internal campus management system with role-based access.',
    tags:['Laravel','Systems','MySQL'], number:'02', status:'In development',
    challenge:'An organization operating multiple campuses needs clear data ownership, role permissions and reliable internal workflows.',
    approach:'Structure an internal campus-scoped management platform with separate organizational and campus responsibilities, CRUD modules and tests.',
    highlights:['Organization and campus-scoped roles','Academic and administrative modules','Role-based access control design','Automated testing and modular architecture'],
    nextSteps:['Review role permissions with stakeholders','Validate campus workflows','Publish approved, non-sensitive interface screenshots']
  },
  {
    slug:'habitflow', name:'HabitFlow', category:'Mobile Experience',
    summary:'A habit tracking app concept focused on clear, accessible routines.',
    tags:['Flutter','Mobile','UX'], number:'03', status:'Prototype and exploration',
    challenge:'Habit tools should make routines easy to understand without relying on sound or complex interaction patterns.',
    approach:'Explore cross-platform mobile development with readable habit cards, schedules, offline storage and accessible reminders.',
    highlights:['Habit creation and editing workflows','Recurrence and schedule concepts','Offline-first data planning','Android and iOS cross-platform exploration'],
    nextSteps:['Stabilize builds on target platforms','Test notification accessibility','Validate interactions on real devices']
  },
  {
    slug:'icot', name:'ICOT Curriculum', category:'Curriculum Design',
    summary:'Integrated Commerce and Technology learning with practical outcomes.',
    tags:['Curriculum','ISL','Learning'], number:'04', status:'Curriculum design',
    challenge:'Commerce and digital technology are often taught separately, making practical workplace connections harder to see.',
    approach:'Develop integrated modules with measurable competencies, daily lesson blocks, ISL guidance and practical assessment evidence.',
    highlights:['12-module curriculum structure','240 planned lesson blocks','Practical commerce and technology integration','Accessible learning outcomes and assessment tracking'],
    nextSteps:['Pilot selected lessons','Collect learner assessment evidence','Refine sequencing from classroom feedback']
  }
];
