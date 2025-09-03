import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Felipe",
  lastName: "Lohr",
  name: `Felipe Lohr`,
  role: "Software Engineer | UX Designer",
  avatar: "/images/avatar.jpg",
  email: "felipelohr2@gmail.com",
  location: "America/Sao_Paulo", // IANA time zone
  languages: ["Portuguese", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights about software engineering, design and AI</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lohr-1",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/felipe-lohr-683329303",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming ideas into scalable digital products</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">MetaHuman</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Work
        </Text>
      </Row>
    ),
    href: "/work/metahuman-platform",
  },
  subline: (
    <>
      I'm Felipe, a software engineer passionate about building UX/UI solutions. I work on{" "}
      <strong>MetaHuman</strong>, an HR-focused SaaS platform that integrates AI, compliance and
      employee well-being. I also study{" "}
      <strong>software engineering at Centro Universitário Ingá</strong>.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Felipe Lohr, a creative software engineer and designer passionate about turning ideas into
        clean, impactful digital experiences. I enjoy blending design and technology to build projects
        that are modern, professional, and memorable. Whether it’s a product, a website, or a concept
        on paper, I love finding ways to make it stand out and truly connect with people.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "MetaHuman",
        timeframe: "2024 – Present",
        role: "UX/UI Designer",
        achievements: [
          <>Designed and prototyped clear and understandable dashboards using Figma</>,
          <>
            Also designed features like project management, onboarding flows, and integrations for
            occupational health.
          </>,
        ],
        images: [],
      },
      {
        company: "Pemax Digital",
        timeframe: "2023 – 2024",
        role: "Motion & Graphic Designer",
        achievements: [
          <>
            Designed social media graphics, ads, and institutional materials that helped strengthen
            the company’s online presence.
          </>,
          <>
            Created motion graphics and video edits to deliver engaging campaigns for different
            audiences.
          </>,
          <>
            Collaborated with marketing and content teams to develop creative solutions aligned with
            client needs.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Centro Universitário Ingá",
        description: <>Software Engineering degree.</>,
      },
      {
        name: "Self-learning",
        description: (
          <>
            Studying Python, Web Development, Motion & Graphic Design.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend & Design",
        description: (
          <>
            Experienced with React, JavaScript and design systems. Strong background in Figma
            and Material Design Kit.
          </>
        ),
        tags: [
          { name: "React"},
          { name: "Figma"},
        ],
        images: [],
      },
      {
        title: "Creative Tools",
        description: (
          <>
            Skilled in Adobe Creative Suite, including Photoshop, After Effects, Illustrator and
            Premiere Pro, for graphic design, video editing and motion graphics.
          </>
        ),
        tags: [
          { name: "Adobe Photoshop", icon: "photoshop" },
          { name: "Adobe After Effects", icon: "aftereffects" },
          { name: "Adobe Illustrator", icon: "illustrator" },
          { name: "Adobe Premiere", icon: "premiere" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech, design and learning journey...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A personal collection of visuals, concepts and explorations`,
  images: [
    {
      src: "/images/gallery/feed (300dpi) V2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/RECUPERADO 1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/post 1 (sem flor(.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/o que somos.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
