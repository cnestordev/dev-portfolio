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
} from "@chakra-ui/react";

export const NotificationModal = ({ isOpen, onClose }) => {
  const modalBg = useColorModeValue("white", "white");
  const textColor = useColorModeValue("#313325", "#313325");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={modalBg} color={textColor}>
        <ModalHeader display="flex" alignItems="center" gap={2}>
          <Text>Message Sent</Text>
          <CheckIcon color="#2bd167" />
        </ModalHeader>
        <ModalBody>
          Your message has been successfully sent. Thank you!
        </ModalBody>
        <ModalFooter>
          <Button borderRadius={50} _hover={{backgroundColor: "#434343", color: "#e5e5e5"}} backgroundColor="#dfdfdf" color="#5f5f5f" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
