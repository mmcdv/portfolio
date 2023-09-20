const logotext = "MAC";

const meta = {
    title: "Mac Christy"
};


const introdata = {
    title: "Hello, I’m Mac Christy",
    animated: {
        first: "Passionate about pixels, I bring designs to life with code.",
        second: "I build web wonders, from front-end finesse to back-end brilliance.",
        third: "Thriving on mastering new languages in the world of ever-evolving tech.",
      },
    description: "As a full-stack developer, I blend innovation and precision to craft seamless web solutions that bring ideas to life. Explore my portfolio to witness the power of technology meeting imagination.",
    your_img_url: "/profile.png",
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "Hello! My name is Matthew but I prefer to go by Mac. I am a passionate web developer excited about the endless possibilities of the digital world. I enjoy crafting engaging and user-friendly websites that leave a lasting impression. As a natural problem solver, I relish the challenges web development presents, and I take pride in delivering elegant solutions. I'm dedicated to continuous learning, always exploring new frameworks and techniques to stay at the forefront of this ever-evolving field. Beyond coding, I enjoy playing basketball, working out, and playing video games with my friends.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "PHP",
        value: 80,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "HTML/CSS",
        value: 90,
    },
    {
        name: "MySQL",
        value: 70,
    },
    {
        name: "Javascript",
        value: 60,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "With a eye for aesthetics and user experience, I take pride in crafting visually appealing and intuitive interfaces that engage users and enhance their journey through websites and applications.",
    },
    {
        title: "Web/Mobile Applications",
        description: "From concept to deployment, I specialize in developing dynamic and responsive web and mobile applications. My projects demonstrate a diverse skill set in utilizing cutting-edge technologies to create seamless user experiences across devices.",
    },
    {
        title: "Custom API Integrations",
        description: "I excel in seamlessly integrating custom APIs into applications, ensuring enhanced functionality and access to a wide array of services. Through API integration, I have successfully expanded data sources and provided unique solutions to complex challenges.",
    },
];
    
const dataportfolio = [
  {
    img: "/project2.png",
    title: "HomeFinder",

    description: "HomeFinder is a dynamic web application that revolutionizes the way you discover and secure your dream home. Crafted using React, Vite, and Material UI, this project represents the culmination of my passion for web development. Please note that HomeFinder is an ongoing labor of love, and I am committed to enhancing its features and functionality daily as I learn and grow.",
    
    feature1: "🏠 Search for Available Homes: Seamlessly search for available houses based on your preferences, whether you're looking for a cozy apartment, a spacious family home, or a luxurious estate. Our intuitive search filters make finding the perfect property a breeze.",
    
    feature2: "🔢 Finance Tool Calculators: Gain clarity on your financial options with built-in mortgage and affordability calculators. Estimate monthly payments, assess down payments, and make informed decisions about your budget.",
    
    feature3: "👩‍💼 Find Agents in Your Area: Connect with experienced real estate agents in your desired location. My platform helps you discover local experts who can guide you through the buying process and provide valuable insights into the housing market.",
    
    feature4: "💼 Save Homes Using Session Data: Save your favorite homes and property listings using session data, ensuring you can easily revisit and compare your top choices without the need for an account.",

    problem: "One of the significant challenges I encountered during the development of HomeFinder was integrating an external API to query and display available homes in the user's desired area. This required seamless communication with the RapidAPI service using Axios.",

    solution: "To overcome this challenge, I meticulously designed an Axios-based API integration strategy. I implemented asynchronous functions to fetch data from the RapidAPI service, parse the responses, and dynamically populate the home listings on the HomeFinder platform. Incorporating error handling mechanisms and optimizing API requests, I ensured a smooth and reliable user experience.",
    
    outcome: "Successfully integrating the RapidAPI service with HomeFinder greatly expanded the application's capabilities. Users can now access up-to-date property listings, ensuring that they have access to the latest information about available homes in their desired area. This experience honed my skills in working with external APIs, handling asynchronous operations, and providing real-time data to users. It reinforced my commitment to delivering a seamless and informative house-hunting experience through HomeFinder.",

    link: "#",
    preview: "https://shopping-cart-seven-psi.vercel.app/",
    source: "https://github.com/mmcdv/shopping-cart"
  },

  {
    img: "/project1.png",
    title: "Ecommerce Shopping Cart",

    description: "Shopping Cart is a foundational e-commerce platform that represents one of my first projects in React development. Despite its simplicity in design and a limited set of features, this project holds a special place in my journey as a developer.",

    feature1: "🛍️ Effortless Shopping: Enjoy seamless shopping with the ability to add products to your cart effortlessly. Explore a vast catalog of items and select the ones that pique your interest.",

    feature2: "🧾 Edit Cart on the Fly: Customize your shopping experience by editing cart quantities and sizes in real-time. No need to start over; you have complete control over your selections.",

    feature3: "🌟 Product Reviews: Make informed purchase decisions with the help of product reviews. Read what other customers have to say about their experiences and share your thoughts to contribute to our vibrant shopping community.",

    problem: "During the development process, I encountered a significant challenge related to creating and maintaining a dynamic shopping cart that remains available throughout the entire shopping journey. I also needed to implement the functionality to edit product quantities and sizes seamlessly.",

    solution: "To address this challenge, I utilized createContext, a powerful feature in React for managing global state. I created a centralized shopping cart context that could be accessed and modified from various components across the application. This allowed for real-time updates to the cart as users interacted with the website.",

    outcome: "The implementation of a dynamic and editable shopping cart, powered by createContext, greatly enhanced the user experience. Users can now confidently add, review, and adjust their selections throughout their shopping journey. This not only improves user satisfaction but also increases the likelihood of successful conversions. This experience reinforced my problem-solving abilities, as I successfully tackled a complex challenge in web development using createContext. It also highlighted the importance of user-centered design and effective state management techniques in creating a user-friendly e-commerce platform",

    link: "#",
    preview: "https://shopping-cart-seven-psi.vercel.app/",
    source: "https://github.com/mmcdv/shopping-cart"
  }
];

const contactConfig = {
    YOUR_EMAIL: process.env.REACT_EMAIL,
    YOUR_FONE: process.env.REACT_PHONE,
    description: "Feel free to send me a message! I will get back to you ASAP.",
    YOUR_SERVICE_ID: process.env.REACT_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_USER_ID,
};

const socialprofils = {
    github: "https://github.com/mmcdv",
    hackerrank: "https://www.hackerrank.com/mmcdev",
    linkedin: "https://www.linkedin.com/in/matthew-christy-076466286/",
    codecademy: "https://www.codecademy.com/users/mmchristy14/achievements",
};
const technologies = [
  "Vscode",
  "Figma",
  "Adobe Photoshop",
  "Microsoft Word",
  "Github"
];

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    technologies,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
