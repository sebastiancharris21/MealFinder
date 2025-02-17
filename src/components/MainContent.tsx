import { SimpleGrid } from "@chakra-ui/react";

import { Meals } from "../types";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  meals: Meals[];
  loading: boolean;
  openRecipe: (meal: Meals) => void;
};

function MainContent({ meals, loading, openRecipe }: Props) {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="20px">
      {loading && skeleton.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {!loading &&
        meals.map((m) => (
          <MealCard openRecipe={() => openRecipe(m)} key={m.idMeal} meals={m} />
        ))}
    </SimpleGrid>
  );
}

export default MainContent;
