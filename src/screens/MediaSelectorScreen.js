import React, { useEffect } from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { withRouter } from "react-router-native";

const MediaSelectorScreen = withRouter(({ match, history }) => {
  const techniqueId = match.params.techniqueId;
  const name = match.params.name;
  const yUrl = match.params.yUrl;

  console.log("Media screen")
  console.log(techniqueId)
  console.log(name)
  console.log(yUrl)

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => history.goBack() }>
          <Text>{" << Atrás  "}</Text>
        </TouchableOpacity>
            
         <Text style={styles.title}>Escoge el formato</Text>
      </View>

        <Button 
            title={`Realidad aumentada`}
            //onPress={() => history.push(`/techniques/${item.categoryId}`) }
        />
        <Button 
            title={`Video`}
            onPress={() => history.push(`/video/${yUrl}`) }
        />
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

export default MediaSelectorScreen;