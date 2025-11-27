export interface IBlogPost {
  tag: string;
  author: string;
  authorImage: string;
  publishDate: string;
  title: string;
  description: string;
  thumbnail: string;
  readTime: string;
  slug: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ICaseStudy {
  title: string;
  description: string;
  thumbnail: string;
  Results: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface IPosition {
  datePosted: string;
  expirationDate: string;
  location: string;
  offeredSalary: string;
  experience: string;
  qualification: string;
  employmentType: string[];
  jobSkills: string[];
  shortDescription: string;
  content: string;
  title: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface IService {
  id: number;
  title: string;
  icon: string;
  description: string;
  image: string;
  image2?: string;
  image3?: string;
  coverImg: string;
  userReview: {
    name: string;
    image: string;
    reviewContent: string;
    userRole: string;
  };
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  content: string;
}

export interface ITeamMember {
  name: string;
  role: string;
  userImg: string;
  contactInformation: {
    email: string;
    phoneNumber: string;
  };
  social: {
    behance?: string;
    dribbble?: string;
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  content: string;
  excerpt?: string;
  isEmpty?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  slug: string;
}

// top nav bar class
export interface TopNavButtonsProps {
  fillClass: string;
  className?: string;
}
