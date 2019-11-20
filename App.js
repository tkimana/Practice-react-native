import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ImageBackground, TextInput, StatusBar, Button, ScrollView, Form} from 'react-native';
import PostContainer from './components/PostContainer';
import RecipeForm from './components/RecipeForm';


class App extends React.Component {
     state={
       recipes: [], 
       displayRecipes: [],
       name: "",
       title: "",
       publisher: "",
       image_url: "",
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
  })

  }
 
 handleSubmit=()=>{
  
  fetch('http://localhost:3000/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipes:[{
        title: this.state.title,
        image_url: this.state.image_url,
        publisher: this.state.publisher
      }]
      .then(res=> res.json())
      .then(recipe=>{
        this.setState({
          recipes: [...this.state.recipes, recipe]
        })
      })
    })
  })
 }


 

  render(){
   
  return (
    <View>
    <RecipeForm addSome={this.addSome}/>
   <PostContainer recipes={this.state.displayRecipes}/>
    </View>
  
  );
  }
}






export default App;

