import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, SafeAreaView} from 'react-native';


class PostItem extends React.Component{
    render(){
        return(
            <View >
                <SafeAreaView style={styles.titlecontainer}>
                  <Text >Title: {this.props.title}</Text> 
                  </SafeAreaView>
                <View >
                    <Image
                    style={{height: 250, width: 250, flexDirection: 'row',  marginVertical: 8,
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
  titlecontainer:{
     fontSize: 20,
     marginVertical: 16,
    //  marginHorizontal: 16,
  }, 
  publishercontainer:{
      fontSize: 15,
      marginVertical: 8,
      marginHorizontal: 16,
  },
titlecontainer:{

},

})



export default PostItem