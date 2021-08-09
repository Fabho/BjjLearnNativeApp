import React from 'react';
import { StyleSheet, Text, Button, FlatList, View, TouchableOpacity  } from 'react-native';
import { withRouter } from "react-router-native";
import useCategories from '../hooks/useCategories';

const CategoriesScreen = withRouter(({ match, history }) => {
  //debugger;
  const [getCategories, categories, errorMessageCat] = useCategories();
  const beltId = match.params.id;
  const beltCategories = categories ? categories[beltId] : null;

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => history.goBack() }>
          <Text>{" << Atrás  "}</Text>
        </TouchableOpacity>
            
         <Text style={styles.title}>Categorías</Text>
      </View>

      {!beltCategories ? 
        <Text>El cinturón ya posee un sistema de combate propio. Por lo que consejos y técnicas para su progreso son muy particulares.</Text> :
        <FlatList 
        data={beltCategories}
        keyExtractor={(category)=> category.categoryId.toString()}
        renderItem={({item})=>{
          return <Button 
            title={item.name}
            onPress={() => history.push(`/techniques/${item.categoryId}`) }
            />
         }}
        />
      }
    </>
  );
});

const styles = StyleSheet.create({
   headerContainer: {
     marginTop: 20,
     marginBottom: 20,
     marginLeft: 10,
     marginRight: 20,
     flexDirection: 'row',
     justifyContent: 'space-between'
   },
   headerButton: {
     borderWidth: 1,
     backgroundColor: '#ffffff',
     padding: 5,
     fontWeight: 'bold',
     borderRadius: 3
   },
   title: {
     flex: 1,
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 20,
     marginLeft: -45
   }
});

export default CategoriesScreen;