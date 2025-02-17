/**
 El layaout es un componente donde etsa distribuido los otros componentes
 que son parte de la Pagina. para este caso el component App lo usaremos como layaout.
 */
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState } from "react";
import { Category, MealDetails, Meals, SearchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
const url = `${baseUrl}list.php?c=list`;

const mealsCategory = (Category: Category) =>
  `${baseUrl}filter.php?c=${Category.strCategory}`;

const categoryDefault = {
  strCategory: "Beef",
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //States
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(categoryDefault);

  const { loading, data } = useHttpData<Category>(url);
  console.log("Data Info", data);

  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
    setLoading: setLoadingMeals,
  } = useHttpData<Meals>(mealsCategory(categoryDefault));

  const SearchApi = (searchForm: SearchForm) => {
    const url_1 = `${baseUrl}search.php?s=${searchForm.search}`;
    setLoadingMeals(true);

    axios
      .get<{ meals: Meals[] }>(url_1)
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeals(false));
  };

  //console.log("mealsData", { dataMeal });

  const {
    fetch,
    loading: loadingMealdetails,
    data: dataMealDetails,
  } = useFetch<MealDetails>();

  const searchDetails = (meals: Meals) => {
    const url = `${baseUrl}lookup.php?i=${meals.idMeal}`;
    onOpen();

    fetch(url);
  };

  return (
    <>
      <Grid
        templateAreas={`"header header" "nav main"`}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
        fontSize={14}
      >
        <GridItem
          boxShadow={"lg"}
          pos="sticky"
          zIndex={"1"}
          top={0}
          pt="7px"
          bg="white"
          area={"header"}
        >
          <Header onSubmit={SearchApi} />
        </GridItem>
        <GridItem
          pos={"sticky"}
          top={"60px"}
          left={"0"}
          p="5"
          area={"nav"}
          height={"calc(100vh - 60px)"}
          overflowY={"auto"}
        >
          <SideNav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>
        <GridItem p="4" bg="gray.100" area={"main"}>
          <MainContent
            openRecipe={searchDetails}
            loading={loadingMeal}
            meals={dataMeal}
          />
        </GridItem>
      </Grid>

      <RecipeModal
        data={dataMealDetails}
        loading={loadingMealdetails}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default App;
