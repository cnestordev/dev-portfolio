export { Experience } from "./Experience";
export { ExperienceCard } from "./ExperienceCard";
import runwaylogo from "../../assets/runwaylogo.png";
import vbglogo from "../../assets/vbg-logo.png";
import idm from "../../assets/idm.webp";

export const experienceList = [
    {
        logo: runwaylogo,
        company: "Runway Proptech",
        title: "Frontend Angular Developer",
        location: "Remote",
        date: "August 2021 - August 2022",
        details: [
            "Collaborated daily with senior developers and product managers in an Agile environment, participating in standups and sprints to ensure alignment on project goals and deliverables.",
            "Led the front-end development of a property management platform using Angular, streamlining the land listing process and enhancing user engagement for stakeholders like builders and developers.",
            "Customized the UI using PrimeNG, aligning with client branding to deliver a seamless and consistent user experience.",
            "Developed an innovative map versioning feature for a community mapping application using Mapbox, adding functionality that improved user interactivity and usability."
        ],
        toggle: true
    },
    {
        logo: idm,
        company: "Identity Dental Marketing",
        title: "WordPress Developer",
        location: "Remote",
        date: "April 2024 - August 2024",
        details: [
            "Reviewed client-submitted tickets daily, prioritizing requests based on submission order or work scope.",
            "Handled tasks such as fixing bugs, updating content, and implementing new features on WordPress websites.",
            "Collaborated closely with developers, designers, and stakeholders to ensure all deliverables met client requirements.",
            "Debugged plugins and themes, identifying and resolving issues caused by conflicts.",
            "Installed, configured, and optimized WordPress plugins to enhance website functionality.",
            "Provided prompt updates to clients via email upon ticket resolution and initiated phone calls when domain or hosting issues required direct client coordination.",
            "Supported senior developers in creating website components, adhering to mockup specifications for new client projects.",
            "Utilized PHP for custom functionalities when WordPress’s built-in tools required enhancement.",
            "Designed and implemented custom forms using Contact Form 7.",
            "Applied updates to WordPress core, themes, and plugins to patch vulnerabilities.",
            "Performed database optimization and backups to ensure smooth website performance.",
            "Restored websites from backups in case of errors or crashes.",
            "Conducted regular quality assurance checks on websites, meticulously documenting and reporting any issues identified.",
            "Ensured high standards of functionality and usability across all client websites.",
            "Assisted clients with hosting and domain-related concerns to facilitate seamless project progression.",
            "Attended team meetings to discuss ongoing projects, blockers, or upcoming tasks."
        ],
        toggle: false
    },
    {
        logo: vbglogo,
        company: "Veteran Benefits Guide",
        title: "Full-Stack MERN developer",
        location: "Las Vegas, NV",
        date: "April 2023 - March 2024",
        details: [
            "Inherited and stabilized a previously unreliable app by addressing critical bugs, reducing escalations from one per week to one per month, significantly improving system reliability.",
            "Designed and built an automated invoicing system from scratch using Node.js and SugarCRM, replacing manual processes with a cron job that analyzed appointment data, calculated billing logic, and generated invoices accurately and efficiently.",
            "Achieved a dramatic reduction in manual invoice processing overhead, cutting review time from 50 hours to just 2 hours per cycle, while minimizing errors and improving data integrity.",
            "Maintained weekly contact with stakeholders, including medical networks, providers, and clinics, to review the user experience, gather feedback on improvements, provide progress updates, and obtain the necessary information to deliver tasks effectively.",
            "Worked in an Agile team with daily standups and code reviews to maintain high-quality standards, utilizing PM2 to deploy a robust and reliable system with minimal downtime.",
            "Implemented real-time updates using WebSockets, enhancing data synchronization and user experience for key stakeholders."
        ],
        toggle: true
    },
];

