import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react'

export default function Ui(){
    
    const [count,setCount] = useState(0);
    
    return (
        <View style={style.container}>
        <TouchableOpacity 
            style={style.button}
            onPress= {()=> setCount(count+1)}
            >
            <Text style={style.mytext}>Hello arun! {count}</Text>
        </TouchableOpacity>
        </View>
    ) 
}

const style = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:"center",
       alignItems:"center"
   },
   
   button:{
       backgroundColor:"#ff7f50",
       width:120,
       height:'contain',
       borderRadius:20,
       padding:10,
       elevation:10,
       
   },
   
   mytext:{
       textAlign:'center',
       color:"#eee"
   }
   
})