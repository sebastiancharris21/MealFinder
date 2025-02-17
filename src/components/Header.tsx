import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { SearchForm } from "../types";

type Props = {
  onSubmit: (data: SearchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();

  return (
    <Container mt={"1"} maxW={"3xl"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoSearch color="gray" />
          </InputLeftElement>
          <Input
            mr={2}
            focusBorderColor={!formState.errors.search ? "blue.400" : "crimson"}
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            type="text"
            placeholder="Intenta con 'chicken' o 'beans'..."
          />
          <Button type="submit" color="white" bgColor="blue.400">
            Buscar
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;
