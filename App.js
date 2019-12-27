import React from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, Button, ScrollView, Form, FlatList} from 'react-native';
import PostContainer from './components/PostContainer';
import RecipeForm from './components/RecipeForm';


class App extends React.Component {
     state={
       recipes: [], 
       displayRecipes: [],
       isLoading: true 
     }


  componentDidMount(){
    fetch('http://localhost:3000/recipes')
    .then(res=> res.json())
    .then(data =>{
      console.log(data)
      this.setState({
        recipes: data,
        displayRecipes: data,
        isLoading: !this.state.isLoading
      });
     
    });
   
  }


  addSome=(recipe)=>{
  let arr=[...this.state.recipes, recipe]
  this.setState({
    recipes: arr,
    displayRecipes: arr
  }, console.log('yes',this.state.recipes))
  }
 


  render(){
   
  return (
    <View >
        <ScrollView>
            <RecipeForm addSome={this.addSome}/>
            <PostContainer recipes={this.state.displayRecipes}/>
        </ScrollView>  
    </View>
  );
  }
}






export default App;

