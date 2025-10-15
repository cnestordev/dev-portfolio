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
    md: isExternal ? "#13ef89" : undefined, // Apply only on desktop
  });

  const color = useBreakpointValue({
    base: "inherit", // Default for smaller screens
    md: isExternal ? "#000" : "#fff", // Apply only on desktop
  });

  return (
    <a href={isExternal ? href : `#${id}`} className="nav-link-container">
      <Button
        as="a"
        target={isExternal ? "_blank" : "_self"}
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
