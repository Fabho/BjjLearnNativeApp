import React from 'react';
import { StyleSheet, Button, FlatList } from 'react-native';
import useBelts from '../hooks/useBelts';

const BeltsScreen = ({navigation}) => {

  const [getBelts, belts, errorMessage] = useBelts();
  
  console.log('Belt screen')
  console.log(belts)
  return (
    <>
      <FlatList 
        data={belts}
        keyExtractor={(belt)=> belt.beltId.toString()}
        renderItem={({item})=>{
          //return <Text>{item.Color}</Text>
          return <Button 
            style={styles.image} 
            title={`Cinturón ${item.color}`}
            //categories={categories[item.beltId]}
            onPress={() => navigation.navigate('Categories', {beltId:  item.beltId}) }
            />
        }}
      />
      
    </>
  );
}

const styles = StyleSheet.create({
    
});

export default BeltsScreen;