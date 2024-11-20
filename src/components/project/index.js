export const projectFeatures = [
    {
        title: "Team-Based Task Sharing",
        description:
            "Users can create teams, invite other members, and share tasks exclusively within their team. Shared tasks allow for real-time updates, ensuring everyone stays informed on task progress and changes.",
    },
    {
        title: "Role-Based Access Control",
        description:
            "Implemented role-specific features where admins can manage teams, including adding or removing members and disbanding teams entirely. Members can view team tasks and update their own task statuses.",
    },
    {
        title: "Drag-and-Drop Task Prioritization",
        description:
            "Organize tasks by priority with an intuitive drag-and-drop feature, allowing easy reordering of tasks within High, Medium, and Low priority categories.",
    },
    {
        title: "Real-Time Updates with WebSockets",
        description:
            "Integrated WebSocket functionality through Socket.io, enabling instant updates for all team members when tasks are created, updated, or marked complete.",
    },
    {
        title: "Process Management with PM2",
        description:
            "A PM2-based cleanup script regularly checks for 'orphaned' tasks (tasks not assigned to any user) and removes them, keeping the database organized.",
    },
    {
        title: "Mobile Responsiveness",
        description:
            "The interface is fully responsive, ensuring a seamless experience across desktop and mobile devices.",
    },
    {
        title: "Security and Role Management",
        description:
            "User authentication, session handling, and role-based access are managed with secure cookies, CORS policies, and unique team invite codes to ensure secure interactions.",
    },
];