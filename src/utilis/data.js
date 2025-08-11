import frontend from '../assets/images/frontend.png';
import backend from '../assets/images/backend.png';
import DatabaseIcon from '../assets/images/database.png';
import toolsIcon from '../assets/images/tools.png';
import otherIcon from '../assets/images/personality-search.png';
import profile1 from '../assets/images/profile_3135715.png';

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontend,
        skills: [
            { skills: "HTML5", percentage: "80%" },
            { skills: "CSS3", percentage: "90%" },
            { skills: "JavaScript", percentage: "75%" },
            { skills: "React.js", percentage: "75%" }
        ],
    },
    {
        title: "Backend",
        icon: backend,
        skills: [
            { skills: "Python", percentage: "85%" },
            { skills: "PHP", percentage: "70%" },
            { skills: "Java", percentage: "65%" },
            { skills: "FastAPI", percentage: "60%" },
            { skills: "Node.js", percentage: "50%" },
            { skills: "Express.js", percentage: "45%" },
        ],
    },
    {
        title: "Databases",
        icon: DatabaseIcon,
        skills: [
            { skills: "MySQL", percentage: "70%" },
            { skills: "MongoDB", percentage: "60%" },
        ],
    },
    {
        title: "Tools",
        icon: toolsIcon,
        skills: [
            { skills: "Git & GitHub", percentage: "85%" },
            { skills: "Visual Studio Code", percentage: "80%" },
            { skills: "Docker", percentage: "60%" },
            { skills: "Webpack", percentage: "50%" },
            { skills: "Windows", percentage: "75%" },
            { skills: "Linux", percentage: "60%" },
        ],
    },
    {
        title: "Other",
        icon: otherIcon,
        skills: [
            { skills: "Responsive Design", percentage: "70%" },
            { skills: "Project Management", percentage: "65%" },
            { skills: "Networking", percentage: "75%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: profile1,
        skills: [
            { skills: "Problem Solving", percentage: "80%" },
            { skills: "Collaboration", percentage: "85%" },
            { skills: "Attention to Detail", percentage: "75%" },
            { skills: "Communication", percentage: "80%" },
            { skills: "Self-motivation", percentage: "80%" },
        ],
    },
];

export const Work_Experience = [
    {
        title: "Founder & Network Technician – Sonitech Data Connections",
        date: "Jan 2024 – Present",
        responsibilities: [
            "Founded and runs a networking service company offering home internet installations",
            "Provide technical support and perform troubleshooting for network-related issues",
            "Manage client relations, on-site setup, and routine maintenance",
        ],
    },
    {
        title: "Credit Card Fraud Detection – Academic Project",
        date: "2024",
        responsibilities: [
            "Developed a machine learning model using Python and scikit-learn",
            "Carried out data preprocessing, training, evaluation, and analytics",
        ],
    },
    {
        title: "Snake Game (Python) – Academic Project",
        date: "2023",
        responsibilities: [
            "Built a classic snake game using the Pygame library",
            "Implemented game mechanics including collision detection and score tracking",
        ],
    },
    {
    title: "Expense Tracker (MERN)",
    date: "2025",
    responsibilities: [
        "Developed a full-stack expense tracking application using the MERN stack (MongoDB, Express.js, React, Node.js)",
        "Implemented user authentication and authorization for secure access",
        "Built RESTful APIs for expense management, including add, view, delete, and export to Excel",
        "Integrated MongoDB for persistent data storage",
        "Created an interactive React frontend with responsive design for tracking expenses in real time",
        "Designed API endpoints such as ADD_EXPENSE, GET_ALL_EXPENSE, DELETE_EXPENSE, and DOWNLOAD_EXCEL",
    ],
    link: "https://yourportfolio.com/expense-tracker"
},
];