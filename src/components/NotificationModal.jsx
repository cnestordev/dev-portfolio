import { CheckIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";

export const NotificationModal = ({
  isOpen,
  onClose,
  title = "Notification",
  body = "Your action was successful!",
  icon = <CheckIcon color="#2bd167" />,
  info,
  link,
  emailSubject,
  emailBody = "",
  footerButtonLabel = "Close",
  onFooterButtonClick,
}) => {
  const modalBg = useColorModeValue("white", "white");
  const textColor = useColorModeValue("#313325", "#313325");

  // Generate the mailto link with subject and body
  const generateMailtoLink = (email, subject, body) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={modalBg} color={textColor}>
        <ModalHeader display="flex" alignItems="center" gap={2}>
          <Text>{title}</Text>
          {icon}
        </ModalHeader>
        <ModalBody>
          <Text>{body}</Text>
          {info && (
            <Text mt={4}>
              {info}{" "}
              {link && (
                <Link
                  href={generateMailtoLink(link, emailSubject, emailBody)}
                  color="blue.500"
                  isExternal
                >
                  {link}
                </Link>
              )}
            </Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            borderRadius={50}
            _hover={{ backgroundColor: "#434343", color: "#e5e5e5" }}
            backgroundColor="#dfdfdf"
            color="#5f5f5f"
            onClick={onFooterButtonClick || onClose}
          >
            {footerButtonLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
