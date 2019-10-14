import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, ImageBackground} from 'react-native';


class PostItem extends React.Component{
    render(){
        return(
       
            
            <View style={styles.container}>
                <View >
                  <Text style={styles.titlecontainer}>Title: {this.props.title}</Text> 
                </View>

                <View style={styles.card}>
                    <Image
                    style={{height: 250, width: 250, marginVertical: 10,
                    marginHorizontal: 16,}}
                    source={{uri: this.props.image_url}}
                    /> 
                </View>

                <View>
                  <Text style={styles.publishercontainer}>Publisher: {this.props.publisher}</Text>
                </View> 
                </View>  
      
        )
    }
}



const styles = StyleSheet.create({
   container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    float: 'left', 
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
  // titlecontainer:{
  //    fontSize: 20,
  //    marginVertical: 16,
  //   //  marginHorizontal: 16,
  // }, 
  // publishercontainer:{
  //     fontSize: 15,
  //     marginVertical: 8,
  //     marginHorizontal: 16,
  // },
 
})



export default PostItem