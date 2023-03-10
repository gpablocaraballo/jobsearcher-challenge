export enum LocationType {
  'HYBRID' = 'Hybrid',
  'ONSITE' = 'Onsite',
  'REMOTE' = 'Remote',
}

export enum CategoryType {
  'ALL' = 'All',
  'CIVIL_ENGINEERING' = 'Civil Engineering',
  'CUSTOMER_SERVICE' = 'Customer Service',
  'DATA' = 'Data',
  'DESIGN' = 'Design',
  'DEVOPS' = 'DevOps',
  'FINANCE' = 'Finance',
  'HUMAN_RESOURCES' = 'Human Resources',
  'MARKETING' = 'Marketing',
  'MARKETING_PR' = 'Marketing & PR Leader',
  'PRODUCT_MANAGEMENT' = 'Product Management',
  'PRODUCT_MANAGER' = 'Product Manager',
  'QA' = 'Quality Assurance',
  'SALES' = 'Sales',
  'SOFTWARE_ENGINEERING' = 'Software Engineering',
  'WRITING' = 'Writing'
}


export const relatedCategories: { [key in CategoryType]?: string[] } = {
  [CategoryType.CUSTOMER_SERVICE]: ['Customer Service', 'Client Services', 'Tech Support', 'Communication Officer', 'Customer Support'],
  [CategoryType.SOFTWARE_ENGINEERING]: ['Software Engineering', 'Developer', 'Engineer', 'Backend Developer', 'Frontend Developer', 'Fullstack Developer', 'Mobile Developer', 'Game Developer', 'Engineering Manager'],
  [CategoryType.DATA]: ['Data Scientist', 'Data Analyst', 'Big Data Engineer', 'Machine Learning Engineer', 'AI Engineer', 'Cloud Engineer', 'Data Architect', 'Data Analytics', 'Data Analyst', 'Data Engineer', 'Data Visualization', 'Data Processing', 'Data Engineering', 'Data Warehousing'],
  [CategoryType.HUMAN_RESOURCES]: ['Human resources', 'Recruiter', 'Sourcer', 'Talent Manager', 'Talent Acquisition', 'HR'],
  [CategoryType.PRODUCT_MANAGEMENT]: ['Product Manager', 'Project Manager', 'Product Owner Or Product Champion'],
  [CategoryType.QA]: ['Quality Assurance', 'QA', 'Testing', 'QA specialist', 'SDET', 'Software Engineer in Test', 'Automation Engineer', 'QA Engineer', 'QA Analyst'],
};

export interface JobSchema {
  id: number;
  title: string;
  description: string;
  category?: CategoryType;
  published_on?: string;
  location_type: LocationType;
  location: string;
  skills: string[];
  levels_of_experience?: string[] | null;
  image_url?: string;
}

export interface FavoriteSchema {
  job: JobSchema
}

export interface FavoritesSchema {
  [key: number]: FavoriteSchema
}

export interface ItemState {
  job?: JobSchema
  favorites: FavoritesSchema | {}
  jobs: Array<JobSchema>
  filtered_jobs?: Array<JobSchema>
  category?: CategoryType
}

export interface Action {
  type: string
  data:  Array<JobSchema> | JobSchema | FavoritesSchema | CategoryType
}

export const appDefaultState = {  
  jobs: [],
  favorites: {},
}
