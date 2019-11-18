import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image} from 'react-native';


function Separator() {
  return <View style={styles.separator} />;
}

function PostItem(props) {

        return(
       
            
         <View style={styles.container}>
            <View>
                  <Text style={styles.titlecontainer}>Title: {props.title}</Text> 
              </View>
                <View style={styles.card}>
                    <Image
                    style={{height: 230, width: 250, marginVertical: 10,
                    marginHorizontal: 9,}}
                    source={{uri: props.image_url}}
                    /> 
                </View>
                <View>
                <TouchableOpacity  onPress={() => this.handleChange}>
             <Text style={styles.button}> Like </Text>
        </TouchableOpacity>
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
    flexDirection: 'column',
    width:  300,
    padding: 4,
    height: 300,
    marginTop: 300
   },
  
  card:{
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#000',
    width: 300,
    height: 270,
    padding: 10,
    marginBottom: 200,
     
  },

  separator:{
    height: 1,
    width: 1000,
    backgroundColor:'black',
    marginTop: 10
  },
  titlecontainer:{
     fontSize: 20,
     fontFamily: 'Cochin', 
     color: '#2F3640',
     marginTop: 90,
   
  }, 
  publishercontainer:{
      fontSize: 15,
      marginTop: 10,
      color: '#BC0022'
  },

  button:{  
    backgroundColor: 'red',
    width: 50,
    borderRadius: 30,
    
  }
 
})



export default PostItem