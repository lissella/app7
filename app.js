import React from 'react'
import { View,Text,StyleSheet,Image} from 'react-native';

export default function app(){
  return(
    <View style={style.container}>
      <Text style={Style.text}>
    HELLO WORLD
      </Text>
      <image style={{width:200,height:200}}
              source={{uri:'https://www.brighttv.co.th/wp-content/uploads/2020/08/Teaser.png'}}
      >         
      </image>
      </View>
  )
  }
  const styles=StyleSheet.create({
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  background:'#CD5C5C',

  },
  text:{
  fontSize:20,
  Color:'red',
  backgroundColor:'blue',
  padding:20,
  },
  Image:{
  width:400,
  height:200,
  }
})
//export default app;