import project1 from "../assets/project-1.png";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.png";

export const navigation = [
    {
        id: "0",
        title: "ABOUT",
        url: "#about",
    },
    {
        id: "1",
        title: "SKILLS",
        url: "#skills",
    },
    {
        id: "2",
        title: "PROJECTS",
        url: "#projects",
    },
    {
        id: "3",
        title: "CONTACT",
        url: "#contact",
    },

];
export const education =
{
    intro: ` Hi, I'm Ankit, a software engineering student and a full-stack
            developer with a passion for solving real-world problems through
            technology. I enjoy diving into projects that challenge my skills,
            whether it's building a full-stack e-commerce app or experimenting
            with new frameworks. I'm always eager to learn and collaborate with
            others, and I believe that coding is not just about writing lines of
            code but creating solutions that make life easier.`,
    course: `B.Tech, Bachelor's degree in Information Technology`,
    college: "Greater Noida Institute Of Technology",
}
export const skills = [{

    title: "FRONTEND DEVELOPMENT",
    items: [
        {
            name: "HTML",
            level: "Experienced",
        },
        {
            name: "CSS",
            level: "Experienced",
        },
        {
            name: "Tailwind CSS",
            level: "Intermediate",
        },
        {
            name: "Javascript",
            level: "Experienced",
        }, {
            name: "React",
            level: "Experienced",
        },
        {
            name: "Redux",
            level: "Intermediate",
        },

    ]
}, {
    title: "BACKEND DEVELOPMENT",
    items: [
        {
            name: "Node js",
            level: "Experienced",
        },
        {
            name: "Express js",
            level: "Intermediate",
        },
        {
            name: "Mongo DB",
            level: "Experienced",
        },

        {
            name: "My SQL",
            level: "Intermediate",
        },

        {
            name: "PostgreSQL",
            level: "Intermediate",
        },


    ]
}, {
    title: "OTHER SKILLS",
    items: [
        {
            name: "Git",
            level: "Intermdiate",
        },
        {
            name: "Java",
            level: "Intermdiate",
        },
        {
            name: "C++",
            level: "Intermdiate",
        },
        {
            name: "Python",
            level: "Basic",
        },

    ]
}

];
export const projects = [
    {
        id: 0,
        title: "Zenith-Mart: Full-stack E-Commerce App",
        github: "https://github.com/gitxAnkit/E-Commerce",
        live: "https://calm-elf-6ca540.netlify.app",
        cover: project1,
    },
    {
        id: 1,
        title: "Movie App",
        github: "https://github.com/gitxAnkit/webflix",
        live: "https://webflix-xi.vercel.app",
        cover: project2,
    },
    {
        id: 2,
        title: "Admin Dashboard",
        github: "https://github.com/gitxAnkit/admin-dashboard",
        live: "https://admin-dashboard-gilt-kappa-82.vercel.app",
        cover: project3,
    },

]