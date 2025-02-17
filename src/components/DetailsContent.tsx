import {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Image,
  Heading,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { MealDetails } from "../types";

type Props = {
  data: MealDetails;
};

const joinIngredient = (data: MealDetails) => {
  const ingredients = [];

  for (let index = 1; index <= 20; index++) {
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];

    if (ingredient !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return ingredients;
};

function DetailsContent({ data }: Props) {
  const ingredient = joinIngredient(data);
  return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          alt={data.strMeal}
          width="100%"
          borderRadius="lg"
          src={data.strMealThumb}
        />
        <Heading mt="4" mb={4} size="md">
          Ingredientes:
        </Heading>
        <OrderedList>
          {ingredient.map((ingredient) => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}
        </OrderedList>
        <Text mt={4} whiteSpace="pre-line">
          {data.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
}

export default DetailsContent;
