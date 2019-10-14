import React from 'react';
import PostItem from './PostItem'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Block} from 'react-native';

class PostContainer extends React.Component{
   

    render(){
        console.log(this.props.recipes)
        return(
          <View  style={styles.Itemcontainer}> 
            <View >    
            {this.props.recipes.map((recipe)=> (
            <PostItem {...recipe} key={recipe.recipe_id} />   
            ))}
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
   Itemcontainer:{
    borderWidth: 4,
    borderRadius: 4,
    flex: '2',
    borderColor: '#0000',
    width: 300,
    height: 300,
    padding: "6px 8px 2px",
    minHeight: 80,
    minWidth: 272,
    flexDirection: 'row',
    justifyContent: 'flex',
    // marginLeft: 9,
    // marginRight: 8,
    // marginTop: 8,
    marginBottom: '2rem',
    alignItems: 'stretch'
   }      
  });


export default PostContainer