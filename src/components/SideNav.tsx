import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";
import { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (Category: Category) => void;
};

const selectedProps = {
  color: "white",
  bgColor: "blue.400",
  fontWeight: "bold",
};


function SideNav({
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return loading ? (
    <SkeletonText mt="1" noOfLines={8} spacing="6" skeletonHeight="2" />
  ) : (
    <>
      <Heading color={"blue.400"} fontSize={12} fontWeight={"bold"} mb={5}>
        CATEGORIAS
      </Heading>
      <VStack align="stretch">
        {categories.map((c) => (
          <Link
            onClick={() => setSelectedCategory(c)}
            px={2}
            py={1}
            borderRadius={5}
            _hover={{ textDecoration: "none" }}
            key={c.strCategory}
            {...(selectedCategory.strCategory == c.strCategory &&
              selectedProps)}
          >
            {c.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;
