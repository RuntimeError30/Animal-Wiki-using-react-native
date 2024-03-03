import { View,Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function splash(props: any) {
    const loginRoute = () => {
        props.navigation.navigate("Login")
    }
  return (
    <View style={styles.motherView}>
          <View style={styles.imageDiv}>
               <Image style={styles.tiger} source={require('../../assets/img/test.png')} />
          </View> 

          <View style={styles.textView}>
              <Text style={styles.animalWikiText}>Animal Wiki</Text>

              <View style={styles.secondTitle}>
                <Text style={styles.title2}>What do you know about the</Text>
                <Text style={styles.title2}>animal kingdom? </Text>
              </View>


          </View>

          <View style={styles.btndiv}>
            <TouchableOpacity style={styles.btnBg} onPress={loginRoute}>
              <Text style={styles.btntxt}>Get Started</Text>
          </TouchableOpacity>
          </View>
          


      
    </View>
  )
}

const styles = StyleSheet.create({
    motherView: {
        width: "100%",
        height: "100%",
        backgroundColor:"#fff",
    
    },
    imageDiv: {
     
        justifyContent: "flex-end",
        alignItems:"flex-end",
    },
    tiger: {
  
        opacity: .5,
        left:40,

    },
    textView: {
        bottom:50,
        justifyContent: "center",
        alignItems:"center",
    },
    animalWikiText: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#057B8B',
        
    },
    title2: {
        color: '#057B8B',
        fontSize:22,
    },
    secondTitle: {
        marginTop: 10,
        alignItems: "center",
        
    },
    btndiv: {
        alignItems: "center",
        marginTop:50,
    },
    btnBg: {
        backgroundColor: '#2AB8CB',
        width: "60%",
        height:40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:10,
        
    },
    btntxt: {
        color: "#fff",
        fontSize:15,
    }
});