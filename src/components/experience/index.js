export { Experience } from "./Experience";
export { ExperienceCard } from "./ExperienceCard";
import runwaylogo from "../../assets/runwaylogo.png";
import vbglogo from "../../assets/vbg-logo.png";

export const experienceList = [
    {
        logo: runwaylogo,
        title: "Runway Proptech",
        location: "Remote",
        date: "August 2021 - August 2022",
        details: [
            "Led the front-end development of a property management platform using Angular, enhancing the efficiency of land listing management and improving user engagement.",
            "Customized software applications to align with client branding, employing PrimeNG for UI components to ensure brand consistency and a seamless user experience.",
            "Developed an innovative map versioning feature for a community map app using Mapbox, significantly enhancing functionality and interactive capabilities for users.",
        ]
    },
    {
        logo: vbglogo,
        title: "Veteran Benefits Guide",
        location: "Las Vegas, NV - Full-Stack Developer",
        date: "AAugust 2021 - August 2022",
        details: [
            "Led the end-to-end development and implementation of an automated invoicing system using Node.js, fully integrated with SugarCRM, to optimize the invoice creation process for the company and its clients.",
            "Achieved a dramatic reduction in manual invoice review time, from 50 hours to just 2 hours per invoice cycle, significantly enhancing operational efficiency and reducing overhead.",
            "Implemented advanced features including error handling, batch operations, retry, and rollback mechanisms to ensure system resilience and maintain impeccable data integrity. Deployed the system using a dedicated PM2 process for optimal performance and minimal downtime.",
            "Implemented real-time UI updates via web sockets, improving user experience and data accuracy. Streamlined data synchronization between company applications and SugarCRM, effectively resolving inter-departmental data discrepancies and boosting system reliability.",
        ]
    },
];