import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image} from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

function PostItem(props) {

        return(
       
            
            <View style={styles.container}>
            
                <View >
                  <Text style={styles.titlecontainer}>Title: {props.title}</Text> 
                </View>

                <View style={styles.card}>
                    <Image
                    style={{height: 250, width: 250, marginVertical: 10,
                    marginHorizontal: 16,}}
                    source={{uri: props.image_url}}
                    /> 
                </View>
                
                <View>
                  <Text style={styles.publishercontainer}>Publisher: {props.publisher}</Text>
                </View> 
                <Separator />
                </View>  
      
        )
    }




const styles = StyleSheet.create({
   container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // boxSizing: 'border-box',
    // float: 'left', 
    flexDirection: 'column',
    width:  300,
    padding: 10,
    height: 300,
   },
  
  card:{
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#000',
    width: 300,
    height: 300,
    padding: 10,
    
  },

  separator:{
    height: 1,
    width: 1000,
    backgroundColor:'black'
  },
  titlecontainer:{
     fontSize: 20,
     marginVertical: 16,
     color: 'blue'
    //  marginHorizontal: 16,
  }, 
  publishercontainer:{
      fontSize: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      color: 'yellow'
  },
 
})



export default PostItem