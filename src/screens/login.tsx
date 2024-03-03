import { View, Text,Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'


export default function login(props: any) {
    const loginNavi = () => {
        props.navigation.navigate("Dashboard")
    }

    const getStart = () => {
        props.navigation.navigate("Splash")
    }
  return (
      <View style={styles.motherView}>

          <View style={styles.imgDiv}>
            <Image style={styles.tiger} source={require('../../assets/img/loginBagh.png')} />
          </View>


          <View style={styles.subParentView}>
              <View style={styles.TextDiv}>
                  <Text style={styles.Titletxt}>Welcome Back!</Text>
              </View>

              <View style={styles.inputs}>

                  <View >
                    <Text style={styles.label1}>Email</Text>
                    <TextInput style={styles.txt1} />
                  </View>

                <View style={styles.input2}>
                    <Text style={styles.label2}>Password</Text>
                    <TextInput style={styles.txt2} />
                  </View>





                  
              </View>

            <View style={styles.btns}>
                <TouchableOpacity style={styles.btnBg} onPress={loginNavi}>
                    <Text style={styles.btntxt}>Login</Text>
                  </TouchableOpacity>
                  
                <TouchableOpacity style={styles.btnBg2} onPress={getStart}>
                    <Text style={styles.btntxt2}>Get Started</Text>
                  </TouchableOpacity>
                  

                 <TouchableOpacity>
                    <Text style={styles.pass}>Forget yout password?</Text>
                </TouchableOpacity>
                      
            </View>
              
          </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    motherView: {
        height: "100%",
        width: "100%",

    },
    imgDiv: {
        justifyContent: "flex-end",
        alignItems:"flex-end",
        
    },
    tiger: {
        left:80,
        
    },
    subParentView: {
        width:"100%",
        alignItems: "flex-start",
        bottom: "20%",
        padding:20,
    },
    TextDiv: {
        width:"40%",
    },
    Titletxt: {
        fontSize: 30,
        color: "#0081A7",
        fontWeight:"bold",
    },
    inputs: {
        marginTop: 40,
        width:"80%",
        
    },
    input2: {
        marginTop:30,
    },

    label1: {
        color: "#1E8695",
        fontSize: 18,
        
    },
    txt1: {
        borderBottomWidth: 1,
        borderColor:"#1E8695",
    },
        label2: {
        color: "#1E8695",
        fontSize: 18,
        
    },
    txt2: {
        borderBottomWidth: 1,
        borderColor:"#1E8695",
    },
        btnBg: {
        backgroundColor: '#2AB8CB',
        width: "90%",
        height:50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:10,
        
    },
    btntxt: {
        color: "#fff",
        fontSize:15,
    },
    btns: {
        width:"100%",
                alignItems: "center",
        justifyContent: "center",
        marginTop:40,
    },



            btnBg2: {
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderColor:"#00AFB9",
        width: "90%",
        height:50,
        alignItems: "center",
        justifyContent: "center",
                borderRadius: 10,
        marginTop:10,
        
    },
    btntxt2: {
        color: "#00AFB9",
        fontSize:15,
    },
    pass: {
        top: 20,
        color: "#1E8695",
        fontSize:14,
    }
});