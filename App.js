import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ImageBackground} from 'react-native';
import PostContainer from './components/PostContainer';


class App extends React.Component {
     state={
       recipes: [], 
       displayRecipes: []
     }


  componentDidMount(){
    fetch('http://localhost:3000/recipes')
    .then(res=> res.json())
    .then(data =>{
      // console.log(data)
      this.setState({
        recipes: data,
        displayRecipes: data
      });
      // console.log(this.state.recipes)
    });
    // console.log(this.state.recipes)
  }

  render(){
    // console.log(this.state.recipes)
  return (
    <ImageBackground  source={require('./components/backgroundImage/My Post.jpg')} style={styles.container}>

     <PostContainer recipes={this.state.recipes}/>

    </ImageBackground>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },

});



export default App;

