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
import mainlogo from "../assets/mainlogo.svg";
import "../App.css";

const Links = ["Home", "Skills", "Projects", "About", "Resume"];

const NavLink = ({ children }) => (
  <Button variant="navbarButton">{children}</Button>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="navbarBg" px="4" variant="navbar">
      <Flex h="16" align="center" justify="space-between">
        <Flex alignItems="center" gap={3} fontSize="lg" fontWeight="bold">
          <img width="11%" alt="main logo" src={mainlogo} />
          Dev Portfolio
        </Flex>

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
