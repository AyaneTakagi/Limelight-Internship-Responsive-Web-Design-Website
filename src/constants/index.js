import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Foundation in Arts (Pre-University)",
        company_name: "HELP University (Malaysia)",
        icon: starbucks, // help_university
        iconBg: "#accbe1",
        date: "May 2022 - April 2023",
        points: [
            "Completed a pre-university program with a focus on mathematics, computer science, and critical thinking.",
            "Developed foundational academic writing and presentation skills in an English-medium environment.",
            "Gained exposure to international education standards in preparation for undergraduate studies abroad.",
        ],
    },
    {
        title: "BSc in Computer Science (Ongoing)",
        company_name: "University of Debrecen (Hungary)",
        icon: tesla, // debrecen_university
        iconBg: "#fbc3bc",
        date: "Sep 2023 - Present",
        points: [
            "Studying core computer science subjects including algorithms, data structures, databases, and object-oriented programming.",
            "Learning programming in languages such as Python, C, and Java as part of the curriculum.",
            "Engaged in independent study and project work alongside academic coursework.",
        ],
    },
    {
        title: "Web Development Internship",
        company_name: "Lime Light Renhold (Remote, Norway)",
        icon: shopify, // limelight_logo
        iconBg: "#b7e4c7",
        date: "Jul 2025 - Augast 2025",
        points: [
            "Completed a remote internship focused on front-end web development using HTML, CSS, JavaScript, and basic React.js.",
            "Developed and deployed a parallax scrolling website using GitHub Pages, emphasizing interactive and creative UI/UX design.",
            "Received personalized feedback through a bootcamp-style structure with task-based submissions and reviews.",
            "Practiced independent problem solving and version control using Git and GitHub.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AyaneTakagi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ayane-takagi-5273902b2/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Flight Deal Finder',
        description: 'Automated tool that searches for the cheapest flights from Tokyo using the Amadeus API, compares them with target prices stored in Google Sheets, and sends WhatsApp alerts via Twilio when a lower fare is found.',
        link: 'https://github.com/AyaneTakagi/Python-Projects/tree/main/project-39-flight-deal-finder',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Amazon Price Checker',
        description: 'Scrapes an Amazon product page to extract the current price, compares it against a target threshold, and sends an email alert when the price drops—built with requests, BeautifulSoup, and SMTP.',
        link: 'https://github.com/AyaneTakagi/Python-Projects/tree/main/project-47-amazon-price-checker',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'LinkedIn Job Application Bot',
        description: 'Automates job searches on LinkedIn with Selenium, logging in, applying filters, saving job postings, and following companies. Handles cookie pop-ups and manual CAPTCHA steps.',
        link: 'https://github.com/AyaneTakagi/Python-Projects/tree/main/project-49-LinkedIn-job-application-bot',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'SQLite Database Library Project',
        description: 'A Flask web app for managing a personal book collection with full CRUD functionality using SQLite and SQLAlchemy ORM, featuring a responsive HTML interface for easy management.',
        link: 'https://github.com/AyaneTakagi/Python-Projects/tree/main/project-63-SQLite-database-library-project',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Music Time Machine',
        description: 'Builds a private Spotify playlist of the Billboard Hot 100 for any given date by scraping chart titles and adding matching tracks via the Spotify Web API (Spotipy + OAuth). Unmatched tracks are skipped gracefully.',
        link: 'https://github.com/AyaneTakagi/Python-Projects/tree/main/project-46-music-time-machine',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Coffee and Wifi',
        description: 'A Flask app to crowdsource laptop-friendly cafés, using Flask-WTF for validated forms, Bootstrap 5 for UI, and CSV-based persistence with a browsable listing page.',
        link: 'https://github.com/AyaneTakagi/Python-Projects/tree/main/project-62-coffee-and-wifi',
    }
];