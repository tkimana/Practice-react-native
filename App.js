import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
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
    <View style={styles.container}>
     <Text>Hello</Text>
     <PostContainer recipes={this.state.recipes}/>
   
    </View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});



export default App;

