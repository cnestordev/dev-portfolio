import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure
} from "@chakra-ui/react";
import "../App.css";
import mainlogo from "../assets/mainlogo.svg";
import { Links, PAGE_PADDING_X } from "../utils/constants";
import { NavLink } from "./Navlink";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNavClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      px={PAGE_PADDING_X}
      py={2}
      bg="navbarBg"
      boxShadow="sm"
    >
      <Flex h="16" align="center" justify="space-between">
        <Flex
          color="#ffffff"
          alignItems="center"
          gap={3}
          fontSize="lg"
          fontWeight="bold"
        >
          <img width="11%" alt="main logo" src={mainlogo} />
          Dev Portfolio
        </Flex>

        {/* Desktop Links */}
        <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }}>
          {Links.map((link) =>
            link.id === "resume" ? (
              <NavLink
                key={link.id}
                label={link.label}
                isExternal
                href="https://example.com/resume.pdf"
              />
            ) : (
              <NavLink key={link.id} id={link.id} label={link.label} />
            )
          )}
        </HStack>

        {/* Mobile Menu Toggle */}
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          color="#fff"
          size="lg"
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          variant="unstyled" // No hover effects for the hamburger menu
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb="4" display={{ md: "none" }}>
          <Stack color="#fff" textAlign="center" my={5} as="nav" spacing="4">
            {Links.map((link) =>
              link.id === "resume" ? (
                <NavLink
                  key={link.id}
                  label={link.label}
                  isExternal
                  href="https://example.com/resume.pdf"
                  onClick={handleNavClick}
                />
              ) : (
                <NavLink
                  key={link.id}
                  id={link.id}
                  label={link.label}
                  onClick={handleNavClick}
                />
              )
            )}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
