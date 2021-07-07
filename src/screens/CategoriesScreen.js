import React from 'react';
import { StyleSheet, Text, Button, FlatList } from 'react-native';
import useCategories from '../hooks/useCategories';

const CategoriesScreen = ({ navigation }) => {
  //debugger;
  const [getCategories, categories, errorMessageCat] = useCategories();
  const beltId = navigation.getParam('beltId');
  const beltCategories = categories ? categories[beltId] : null;

  return (
    <>
      {!beltCategories ? 
        <Text>El cinturón ya posee un sistema de combate propio. Por lo que consejos y técnicas para su progreso son muy particulares.</Text> :
        <FlatList 
        data={beltCategories}
        keyExtractor={(category)=> category.categoryId.toString()}
        renderItem={({item})=>{
          return <Button 
            style={styles.image} 
            title={item.name}
            //onPress={() => navigation.navigate('List') }
            />
         }}
        />
      }
    </>
  );
}

const styles = StyleSheet.create({
    
});

export default CategoriesScreen;