import React from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView, TouchableOpacity, useState} from 'react-native';



 
export default class Boxes extends React.Component {

  

  render() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const bokstav = alphabet[Math.floor(Math.random() * alphabet.length)]
    const bokstav2 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const bokstav3 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const bokstav4 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const bokstav5 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const bokstav6 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const bokstav7 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const bokstav8 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const bokstav9 = alphabet[Math.floor(Math.random() * alphabet.length)]



    const myFunc = () => {
      console.log(bokstav)
      
    }

    // const Button = () => {
    //   return(
    //     TouchableOpacity style={styles.inner} onPress={myFunc} disabled={false}>
    //         <Text style={styles.tekst}>{bokstav}</Text>

    //     </TouchableOpacity>
    //   );
      
    // }

    return(
      <SafeAreaView style={styles.container}>



        <View style={styles.box}>
         <TouchableOpacity style={styles.inner} onPress={myFunc}>
           <Text style={styles.tekst}>{bokstav}</Text>

            </TouchableOpacity>
        </View>





        <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={styles.tekst}>{bokstav2}</Text>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={styles.tekst}>{bokstav3}</Text>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={styles.tekst}>{bokstav4}</Text>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={styles.tekst}>{bokstav5}</Text>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={styles.tekst}>{bokstav6}</Text>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={styles.tekst}>{bokstav7}</Text>
            </View>
        </View>
        
        <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={styles.tekst}>{bokstav8}</Text>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={styles.tekst}>{bokstav9}</Text>
            </View>
        </View>











      </SafeAreaView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap:'wrap'

  },
  box: {
    width: '33%',
    height:'33%',
    padding:5
  },
  inner: {
    flex:1,
    backgroundColor: '#eee',
    alignItems:'center',
    justifyContent: 'center'
  },
  tekst: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});
