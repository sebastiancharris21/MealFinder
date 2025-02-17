import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import SkeletonDetails from "./SkeletonDetails";
import { MealDetails } from "../types";
import DetailsContent from "./DetailsContent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  data: MealDetails | undefined;
};

function RecipeModal({ isOpen, onClose, loading, data }: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {loading ? (
            <SkeletonDetails />
          ) : (
            data && <DetailsContent data={data} />
          )}
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RecipeModal;

/**
 *<ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hola Mundo</ModalBody>
 */
