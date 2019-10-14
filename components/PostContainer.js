import React from 'react';
import PostItem from './PostItem'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Block} from 'react-native';

class PostContainer extends React.Component{
   

    render(){
        console.log(this.props.recipes)
        return(
        
            <View >    
            {this.props.recipes.map((recipe)=> (
            <PostItem {...recipe} key={recipe.recipe_id} />   
            ))}
         
            </View>
        )
    }
}
const styles = StyleSheet.create({

  
  });


export default PostContainer