import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withRouter } from "react-router-native";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoScreen = withRouter(({ match, history }) => {
  const yUrl = match.params.yUrl;

  console.log("video screen")

  console.log(yUrl)

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => history.goBack() }>
          <Text>{" << Atrás  "}</Text>
        </TouchableOpacity>
            
         <Text style={styles.title}>Video</Text>
      </View>
        <YoutubePlayer height={250} videoId={"sNhhvQGsMEc"} />
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

export default VideoScreen;