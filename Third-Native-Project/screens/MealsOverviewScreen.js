import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((item)=>item.categoryIds.indexOf(catId) >= 0);

    
    function renderMealItem(itemData) {
        const {id, title, imageUrl, affordability, complexity, duration} = itemData.item;
        const mealItemProps = {
            id, title, imageUrl, affordability, complexity, duration
        }
        return <MealItem {...mealItemProps} /> 
    }

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=>category.id === catId).title;

        navigation.setOptions({
            title : categoryTitle
        });
    },[catId, navigation])

  return (
    <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem} />
    </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 16
    }
})