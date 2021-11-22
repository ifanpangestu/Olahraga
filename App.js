import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.head}>
          <Text style={styles.teksHead}> Tryning </Text>
        </View>
        <View style={styles.kotak}>
        <Text style={styles.teks}> Running </Text>
        </View>
        <View style={styles.kotak1}>
        <Text style={styles.teks}> Push Up </Text>
        </View>
        <View style={styles.kotak2}>
        <Text style={styles.teks}> Sit Up </Text>
        </View>
        <View style={styles.kotak3}>
        <Text style={styles.teks}> Pull Up </Text>
        </View>
        <View style={styles.kotak4}>
        <Text style={styles.teks}> Squat </Text>       
        </View>
        <View style={styles.kotak5}>
        <Text style={styles.teks}> Dumble </Text>
        </View>
        <View style={styles.foot}>
          <Text style={styles.teksFoot}>Happy Exercise</Text>
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#ffd180',
    height: 80,
  },
  kotak: {
    backgroundColor: '#9ccc65',
    position: 'absolute',
    width: 200,
    height: 200,
    top: 80,
  },
  kotak1: {
    backgroundColor: '#ff7043',
    position: 'absolute',
    width: 200,
    height: 200,
    top: 80,
    left: 200,
  },
  kotak2: {
    backgroundColor: '#9fa8da',
    position: 'absolute',
    width: 200,
    height: 200,
    top: 280,
  },
  kotak3: {
    backgroundColor: '#4db6ac',
    position: 'absolute',
    width: 200,
    height: 200,
    top: 280,
    left: 200,
  },
  kotak4: {
    backgroundColor: '#ef9a9a',
    position: 'absolute',
    width: 200,
    height: 200,
    top: 480,
  },
  kotak5: {
    backgroundColor: '#ffcccb',
    position: 'absolute',
    width: 200,
    height: 200,
    top: 480,
    left: 200,
  },
  foot:{
    backgroundColor: '#ffd180',
    position: 'absolute',
    width: 400,
    height: 200,
    top: 680,
  },
  teksHead: {
    textAlign: 'center',
    top: 18,
    left: 2,
    fontSize: 45,
    fontWeight: 'bold',
    letterSpacing: 2, 
  },
  teks: {
    position: 'absolute',
    top: 80,
    left: 40,
    fontSize: 30,
    fontWeight: 'normal',
    letterSpacing: 1, 
  },
  teksFoot:{
    textAlign: 'center',
    padding: 35,
    fontSize: 45,
    fontWeight: 'bold',
    letterSpacing: 2, 
  }
})

