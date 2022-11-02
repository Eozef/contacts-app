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
} from "@chakra-ui/react";
export const Card = ({ name, username, email, phone, website, address }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack spacing="5">
      <Avatar name={name} size="sm" />
      <p>{name}</p>

      <IconButton onClick={onOpen}>
        <Icon boxSize={6} color="red.500" />
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contants detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p> </p>
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
