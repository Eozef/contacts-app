import {
  Avatar,
  Button,
  HStack,
  onOpen,
  isOpen,
  onClose,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Icon,
  useDisclosure,
  IconButton,
  Text
} from "@chakra-ui/react";
export const Card = ({ name, username, email, phone, website, address }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack spacing="5" marginY="10px">
      <Button variant={"ghost"} onClick={onOpen}>
        <Avatar name={name} size="sm" />
        <Text paddingLeft='5px'>
        {name}
        </Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact detail</ModalHeader>
          <ModalBody>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};
