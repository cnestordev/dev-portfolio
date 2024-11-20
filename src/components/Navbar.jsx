import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "../App.css"

const Links = ["Home", "Skills", "Projects", "About", "Resume"];

const NavLink = ({ children }) => <Button variant="navbarButton">{children}</Button>;

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="navbarBg" px="4" variant="navbar">
      <Flex h="16" align="center" justify="space-between">
        {/* Brand/Logo */}
        <Box fontSize="lg" fontWeight="bold">
          Dev Portfolio
        </Box>

        {/* Desktop Links */}
        <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* Mobile Menu Toggle */}
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb="4" display={{ md: "none" }}>
          <Stack as="nav" spacing="4">
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
