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
            "Collaborated daily with senior developers and product managers in an Agile environment, participating in standups and sprints to ensure alignment on project goals and deliverables.",
            "Led the front-end development of a property management platform using Angular, streamlining the land listing process and enhancing user engagement for stakeholders like builders and developers.",
            "Customized the UI using PrimeNG, aligning with client branding to deliver a seamless and consistent user experience.",
            "Developed an innovative map versioning feature for a community mapping application using Mapbox, adding functionality that improved user interactivity and usability."
        ]
    },
    {
        logo: vbglogo,
        title: "Veteran Benefits Guide",
        location: "Las Vegas, NV",
        date: "August 2021 - August 2022",
        details: [
            "Inherited and stabilized a previously unreliable app by addressing critical bugs, reducing escalations from one per week to one per month, significantly improving system reliability.",
            "Designed and built an automated invoicing system from scratch using Node.js and SugarCRM, replacing manual processes with a cron job that analyzed appointment data, calculated billing logic, and generated invoices accurately and efficiently.",
            "Achieved a dramatic reduction in manual invoice processing overhead, cutting review time from 50 hours to just 2 hours per cycle, while minimizing errors and improving data integrity.",
            "Maintained weekly contact with stakeholders, including medical networks, providers, and clinics, to review the user experience, gather feedback on improvements, provide progress updates, and obtain the necessary information to deliver tasks effectively.",
            "Worked in an Agile team with daily standups and code reviews to maintain high-quality standards, utilizing PM2 to deploy a robust and reliable system with minimal downtime.",
            "Implemented real-time updates using WebSockets, enhancing data synchronization and user experience for key stakeholders."
        ]
    },
];

