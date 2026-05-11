import profile1 from '../assets/profile1.jpg';   
import profile2 from '../assets/profile2.jpg';   
import profile3 from '../assets/profile3.jpg';   
import profile4 from '../assets/profile4.jpg';   
import profile5 from '../assets/profile5.jpg';   
import profile6 from '../assets/profile6.jpg';   
import profile7 from '../assets/profile7.jpg';   
import profile8 from '../assets/profile8.jpg';   
import hero from '../assets/hero.jpg';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';        
import work4 from '../assets/work4.jpg';
import work5 from '../assets/work5.jpg';
import work6 from '../assets/work6.jpg';
import { FaBullhorn, FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';


export const assets = {
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
    profile7,
    profile8,
    hero,
    work1,
    work2,
    work3,
    work4,
    work5,
    work6
}

export const teams = [
    {
        image: profile1,
        name: 'Ujjwal Bajpai',
        position: 'CEO, Founder',
    },
    {
        image: profile8,
        name: 'Ravi Yadav',
        position: 'CTO, Co-Founder',
    },
    {
        image: profile2,
        name: 'Sanchit Yadav',
        position: 'Addvertising Manager',
    },
    {
        image: profile3,
        name: 'Manish Karwariya',
        position: 'Sales Manager',
    },
    {
        image: profile4,
        name: 'Sudhanshu Vishwakarma',
        position: 'Content Writer',
    },
    {
        image: profile5,
        name: 'Avnish Agrahari',
        position: 'Social Media Manager',
    },
    {
        image: profile6,
        name: 'Avanish Singh',
        position: 'Software Engineer',
    },
    {
        image: profile7,
        name: 'Abhishek Singh',
        position: 'Full Stack Developer',
    }
];

export const services = [
    {
        id: 1,
        icon: FaCode,
        title: 'Web Development',
        description: 'We create fast, responsive, and user-friendly websites tailored to your business needs.',
    },

    {
        id: 2,
        icon: FaPaintBrush,
        title: 'Graphic Design',
        description:'Eye-catching visuals that speak your brands language. Our graphic design services'
    },

    {
        id: 3,
        icon: FaBullhorn,
        title: 'Digital Marketing',
        description:'Grow your online presence with our strategic digital marketing services.',
    },

    {
        id: 4,
        icon: FaMobileAlt,
        title: 'Mobile App Development',
        description: 'Transform your ideas into functional, high-performance mobile apps.',
    }  
];

export const works = [
    {
        id: 1,
        image: work1,
        title: 'E-commerce Website',
        description: 'Developed a fully responsive and high-performance e-commerce platform.',
    },

    {
        id: 2,
        image: work2,
        title: 'Social Media Campaign',
        description: 'Designed and executed a 3-month digital marketing campaign.',
    },

    {
        id: 3,
        image: work3,
        title: 'Fitness App',
        description: 'Built a web application for a local Gym service.',
    },

    {
        id: 4,
        image: work4,
        title: 'Organic Skincare',
        description: 'Created a complete brand identity including logo, packaging for a new organic skincare startup.',
    },

    {
        id: 5,
        image: work5,
        title: 'B2B Company',
        description: 'Built a custom CRM system to streamline lead tracking, sales analytics..',
    },

    {
        id: 6,
        image: work6,
        title: 'Website Redesign for Educational Institute',
        description: 'Redesigned and optimized the website of an educational institute.',
    }
];