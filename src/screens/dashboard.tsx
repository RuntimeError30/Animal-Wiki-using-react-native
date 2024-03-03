import { View, Text,Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function dashboard(props:any) {
  return (
      <View style={styles.motherCom}>
          <View style={styles.subParent}>
                        <View style={styles.navBar}>
              <Image source={require('../../assets/img/1.png')} />
              <Image  source={require('../../assets/img/2.png')} />
          </View>

          <View>
              <Text style={styles.TitleTxt}>Animal Wiki</Text>
          </View>
          </View>

          <View style={styles.subParent2}>
              <View style={styles.animal1}>
                  <View style={styles.textdiv}>
                      <Text style={styles.text1}>Mammalians</Text>
                      <Text style={styles.text2}>Lion</Text>
                  </View>
                <Image source={require('../../assets/img/lion 1.png')} />  
              </View>


                            <View style={styles.animal1}>
                  <View style={styles.textdiv}>
                      <Text style={styles.text1}>Mammalians</Text>
                      <Text style={styles.text2}>Tiger</Text>
                  </View>
                <Image source={require('../../assets/img/lion 2.png')} />  
              </View>

                            <View style={styles.animal1}>
                  <View style={styles.textdiv}>
                      <Text style={styles.text1}>Mammalians</Text>
                      <Text style={styles.text2}>Tortoise</Text>
                  </View>
                <Image source={require('../../assets/img/lion 3.png')} />  
              </View>
                            <View style={styles.animal1}>
                  <View style={styles.textdiv}>
                      <Text style={styles.text1}>Mammalians</Text>
                      <Text style={styles.text2}>Elephant</Text>
                  </View>
                <Image source={require('../../assets/img/lion 4.png')} />  
              </View>
              
          </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    motherCom: {
        height: "100%",
        width: "100%",
        marginTop: 20,
        
    },
    navBar: {
        width: "100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    subParent: {
        backgroundColor: "#fff",
        padding: 10,
        height:"25%"
        
    },
    TitleTxt: {
        fontSize: 30,
        top:10,
    },
    subParent2: {

        height: "100%",
        backgroundColor: "#44BFCF",
               alignItems:"center",
    },

    animal1: {
        justifyContent: "space-between",
        flexDirection:"row",
        borderRadius:10,
        width:"90%",
        marginTop: 20,
        padding:10,
        backgroundColor:"#fff",
    },

    text1: {
        color: "#1E8695",
    },
        text2: {
            color: "#1E8695",
            fontSize: 25,
            fontWeight:"700",
    },
    textdiv: {
            justifyContent:"center",
        }

});