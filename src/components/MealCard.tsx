import { Meals } from "../types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

type Props = {
  meals: Meals;
  openRecipe: () => void;
};

function MealCard({ meals, openRecipe}: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image
          src={meals.strMealThumb}
          alt={meals.strMealThumb}
          borderRadius="lg"
        />
        <Heading size="md">
          <Text p="2" color={"blue.400"}>
            {meals.strMeal}
          </Text>
        </Heading>
      </CardBody>
      <CardFooter>
        <Button onClick={openRecipe} color={"white"} bgColor={"blue.400"}>
          Ver Receta
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MealCard;
