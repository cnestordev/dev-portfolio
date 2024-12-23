import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { NotificationModal } from "./NotificationModal";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const defaultModalContent = {
    title: "",
    body: "",
    icon: null,
    info: "",
    link: "",
    emailSubject: "",
    emailBody: "",
  };
  const [modalContent, setModalContent] = useState(defaultModalContent);

  // Validation schema
  const validationSchema = Yup.object({
    from_name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  // Handle reCAPTCHA token
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  // Handle form submission
  const sendEmail = async (values, actions) => {
    setIsLoading(true);

    try {
      // Send email using emailjs
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.from_name,
          email: values.email,
          message: values.message,
          "g-recaptcha-response": captchaToken,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Success: Update modal content and reset form
      setModalContent({
        title: "Message Sent",
        body: "Thank you for your message! I’ll get back to you soon.",
        icon: <CheckIcon color="#2bd167" />,
      });
      onOpen();
      setCaptchaToken(null); // Reset reCAPTCHA token
      actions.resetForm();
    } catch (error) {
      // Error: Update modal content and log error
      setModalContent({
        title: "Error",
        body: "An error occurred while sending your message.",
        info: "Please email me directly at",
        link: "nestorcdev@gmail.com",
        emailSubject: "Inquiry from Portfolio Contact Form",
        emailBody: `${values.message}\n\n${values.from_name}`,
        icon: <CloseIcon color="#d12b2b" />,
      });
      console.error("EmailJS Error:", error);
      setCaptchaToken(null); // Reset reCAPTCHA token after failure
      onOpen();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box
        bg="transparent"
        color="#4a4a4a"
        p={6}
        rounded="lg"
        maxW="500px"
        mx="auto"
        mt={8}
      >
        <Formik
          initialValues={{ from_name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <FormControl
                mb={4}
                isInvalid={errors.from_name && touched.from_name}
              >
                <FormLabel
                  position="absolute"
                  width="1px"
                  height="1px"
                  overflow="hidden"
                  clip="rect(0, 0, 0, 0)"
                  whiteSpace="nowrap"
                  border="0"
                >
                  Name
                </FormLabel>
                <Field
                  as={Input}
                  name="from_name"
                  placeholder="Enter your name"
                  bg="#ffffffd6"
                  borderRadius="8px"
                  focusBorderColor="#a3c4bc"
                  padding="22px"
                  _placeholder={{ color: "#a0a0a0" }}
                />
                <FormErrorMessage>{errors.from_name}</FormErrorMessage>
              </FormControl>
              <FormControl mb={4} isInvalid={errors.email && touched.email}>
                <FormLabel
                  position="absolute"
                  width="1px"
                  height="1px"
                  overflow="hidden"
                  clip="rect(0, 0, 0, 0)"
                  whiteSpace="nowrap"
                  border="0"
                >
                  Email
                </FormLabel>
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  bg="#ffffffd6"
                  borderRadius="8px"
                  focusBorderColor="#a3c4bc"
                  padding="22px"
                  _placeholder={{ color: "#a0a0a0" }}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl mb={4} isInvalid={errors.message && touched.message}>
                <FormLabel
                  position="absolute"
                  width="1px"
                  height="1px"
                  overflow="hidden"
                  clip="rect(0, 0, 0, 0)"
                  whiteSpace="nowrap"
                  border="0"
                >
                  Message
                </FormLabel>
                <Field
                  as={Textarea}
                  name="message"
                  placeholder="Write your message here"
                  bg="#ffffffd6"
                  borderRadius="8px"
                  focusBorderColor="#a3c4bc"
                  padding="22px"
                  _placeholder={{ color: "#a0a0a0" }}
                  rows={4}
                />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>

              {/* reCAPTCHA Component */}
              <Flex justifyContent="center" mb={4}>
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                />
              </Flex>

              <Flex justifyContent="center">
                <Button
                  type="submit"
                  padding="24px"
                  justifySelf="center"
                  mt={4}
                  bg="#f0d1b9"
                  color="#ac7f5c"
                  fontWeight="medium"
                  borderRadius="50"
                  _hover={{ bg: "#f1c19b", color: "#794319" }}
                  _active={{ bg: "#769d92" }}
                  _disabled={{
                    bg: "#d3d3d3",
                    color: "#a0a0a0",
                    cursor: "not-allowed",
                  }}
                  isDisabled={!dirty || !isValid || !captchaToken || isLoading}
                  isLoading={isLoading}
                >
                  Send Message
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
      <NotificationModal
        isOpen={isOpen}
        onClose={onClose}
        title={modalContent.title}
        body={modalContent.body}
        icon={modalContent.icon}
        info={modalContent.info}
        link={modalContent.link}
        emailSubject={modalContent.emailSubject}
        emailBody={modalContent.emailBody}
        footerButtonLabel="Got it"
      />
    </>
  );
};
