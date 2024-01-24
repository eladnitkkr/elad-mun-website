import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from '@chakra-ui/react';

export default function CollegeModal({ isOpen, onClose, setCollege }) {
  const setCollegeName = name => {
    setCollege(name);
    onClose();
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome</ModalHeader>
          <ModalBody>Where do you go to college?</ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={() => setCollegeName('nitkkr')}>
              NIT KKR
            </Button>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={() => setCollegeName('other')}>
              Other
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
