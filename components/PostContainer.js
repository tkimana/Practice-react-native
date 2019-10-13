import React from 'react';
import PostItem from './PostItem'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';

class PostContainer extends React.Component{
   

    render(){
        console.log(this.props.recipes)
        return(
            <View style={styles.Itemcontainer}>    
            {this.props.recipes.map((recipe)=> (
            <PostItem {...recipe} key={recipe.recipe_id} />   
            ))}
            </View>
        )
    }
}
const styles = StyleSheet.create({
   Itemcontainer:{
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#000',
    width: 300,
    height: 300,
    padding: 10,
    flexDirection: 'row',
    // justifyContent: 'flex',
    // alignItems: 'stretch'
   }      
  });


export default PostContainer