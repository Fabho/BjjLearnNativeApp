import React from 'react';
import { Text, StyleSheet, Button, FlatList, ScrollView } from 'react-native';
import { withRouter } from "react-router-native";
import useBelts from '../hooks/useBelts';

const BeltsScreen = withRouter(({ history }) => {

  const [getBelts, belts, beltsErrorMessage] = useBelts();
  
  console.log('Belt screen')
  console.log(belts)
  return (
    <>
      <Text style={styles.welcomeMessage}>Bienvenido</Text>
      <Text style={styles.helper}>Escoge un cinturón: </Text>
      
        <FlatList
          contentContainerStyle={styles.buttonList} 
          data={belts}
          keyExtractor={(belt)=> belt.beltId.toString()}
          renderItem={({item})=>{
            return <Button 
              style={styles.image} 
              title={`Cinturón ${item.color}`}
              onPress={() => history.push(`/categories/${item.beltId}`) }
              />
          }}
        />
      
    </>
  );
});

const styles = StyleSheet.create({
    welcomeMessage: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
      marginTop: 10,
      marginBottom: 40
    },
    helper: {
      fontSize: 18,
      marginLeft: 10 
    },
    buttonList: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      marginTop: 30
    }
});

export default BeltsScreen;