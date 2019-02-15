import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp"}}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}                                      // Store reference
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={this.videoError}               // Callback when video cannot be loaded
          style={styles.backgroundVideo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
