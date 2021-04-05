
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import News from './src/components/News';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer:{
    width: 130,
    height: 170,
  },
});
const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
    <Image style={styles.imgContainer
    }
    source = {require('./assets/screenshot.png')}/>
      </View> 
  );
}
export default DisplayAnImage;
export default class App extends Component {
  render() {
    return <News />;
  }