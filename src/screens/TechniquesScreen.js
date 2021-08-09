import React, { useEffect } from 'react';
import { StyleSheet, Text, Button, FlatList, View, TouchableOpacity } from 'react-native';
import { withRouter } from "react-router-native";
import useTechniques from '../hooks/useTechniques';

const TechniquesScreen = withRouter(({ match, history }) => {
  //debugger;
  const [getTechniques, techniques, errorTechniques] = useTechniques();
  const categoryId = match.params.id;
  const beltId = match.params.beltId;

  useEffect(() => {
    getTechniques(categoryId)
  }, []);
  
  console.log("techniques")
  console.log(techniques)

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => history.goBack() }
          >
          <Text>{" << Atrás  "}</Text>
        </TouchableOpacity>
            
         <Text style={styles.title}>Técnicas</Text>
      </View>

      {!techniques ? 
        <Text>Se agregará pronto</Text> :
        <FlatList 
        data={techniques}
        keyExtractor={(technique)=> technique.techniqueId.toString()}
        renderItem={({item})=>{
          let itemUrl = item.url ? encodeURIComponent(item.url) : '';
          return <Button 
            title={item.name}
            onPress={() => history.push(`/media/${item.techniqueId}/${item.name}/${itemUrl}`) }
            //onPress={() => history.push(`/media`) }
            //onPress={() => console.log(item.url, "  ", item.name) }
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

export default TechniquesScreen;