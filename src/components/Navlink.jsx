import { Button, useBreakpointValue } from "@chakra-ui/react";
import "./Navlink.css"

export const NavLink = ({ id, label, isExternal, href, onClick }) => {
  // Determine button variant based on breakpoint
  const buttonVariant = useBreakpointValue({
    base: "unstyled",
    md: "navbarButton",
  });

  const background = useBreakpointValue({
    base: "transparent", // Default for smaller screens
    md: isExternal ? "#fff" : undefined, // Apply only on desktop
  });

  const color = useBreakpointValue({
    base: "inherit", // Default for smaller screens
    md: isExternal ? "#000" : "#fff", // Apply only on desktop
  });

  return (
    <a target={isExternal ? "_blank" : "_self"} href={isExternal ? href : `#${id}`} className={isExternal ? "nav-link-container-ext" : `${"nav-link-container"}`}>
      <Button
        rel={isExternal ? "noopener noreferrer" : undefined}
        variant={buttonVariant}
        onClick={onClick}
        background={background}
        color={color}
      >
        {label}
      </Button>
      <div className="selected"></div>
    </a>
  );
};
