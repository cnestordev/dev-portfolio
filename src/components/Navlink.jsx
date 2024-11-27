import { Button, useBreakpointValue } from "@chakra-ui/react";

export const NavLink = ({ id, label, isExternal, href, onClick }) => {
  const buttonVariant = useBreakpointValue({
    base: "unstyled",
    md: "navbarButton",
  });

  return (
    <Button
      as="a"
      href={isExternal ? href : `#${id}`}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      variant={buttonVariant}
      onClick={onClick}
      background={isExternal ? "#13ef89" : ""}
      color={isExternal ? "#000" : "#fff"}
    >
      {label}
    </Button>
  );
};
