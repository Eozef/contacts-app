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
  InfoIcon,
  useDisclosure,
} from "@chakra-ui/react";
export const Card = ({ name, username, email, phone, website, address }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack spacing="5">
      <Avatar alt={name} src="https://bit.ly/dan-abramov" size="sm" />
      <p>{name}</p>

      <Button onClick={onOpen}>
        <p> more info</p>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contants detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p> </p>
            <p>Username: {username}</p>
            <p>{email}</p>
            <p>{website}</p>
            <p>{phone}</p>
            <p>{address}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};
