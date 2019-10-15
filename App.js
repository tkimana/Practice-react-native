import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ImageBackground, TextInput, StatusBar, Button} from 'react-native';
import PostContainer from './components/PostContainer';


class App extends React.Component {
     state={
       recipes: [], 
       displayRecipes: [],
       title: '',
       image_url:'',
       publisher:'',
      
     
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
     
    });
   
  }
  onChange=(title, publisher, image_url)=>{
    this.setState({
      title: title,
      publisher: publisher,
      image_url: image_url
    })
    console.log(title, publisher,image_url)
  }

  
 handleSubmit=(title, image_url, publisher)=>{
  
  fetch('http://localhost:3000/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipe:{
        title: title,
        image_url: image_url,
        publisher: publisher
      }
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
    // console.log(this.state.recipes)
  return (

    <ImageBackground  source={require('./components/backgroundImage/img/My Post.jpg')} >
    <StatusBar hidden/>
      
  <TextInput style={styles.InputBox} onChangeText={(title) => this.onChange(title, 'title')}
        value={this.state.title} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Title" placeholderTextColor="#fffff"/> 

     <TextInput style={styles.PublisherInput} onChangeText={(publisher) => this.onChange(publisher, 'publisher')}
        value={this.state.publisher} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Publisher" placeholderTextColor="#fffff"/> 

    <TextInput style={styles.InputField} onChangeText={(image_url) => this.onChange(image_url, 'image_url')}
    value={this.state.image_url} underlineColorAndroid='rgba(0,0,0,0)' placeholder="image_url" placeholderTextColor="#fffff"/>
  <Button  title="Submit" color="#f194ff" onPress={() => this.handleSubmit}
  />
     <PostContainer recipes={this.state.recipes}/>
    </ImageBackground>

  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  InputBox:{
   width: 300,
   backgroundColor: 'rgba(255, 255,255,0.3)',
   borderRadius: 25,
   paddingHorizontal:16,
   fontSize: 20,
   color: '#fffff',
   marginVertical:10,
   padding:4,
   flex: 1,
   margin: 10
  },

  InputField:{
    width: 300,
    height: '100%',
    backgroundColor: 'rgba(255, 255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize: 20,
    color: '#fffff',
    marginVertical:20,
    padding:5,
    flex: 1,
    margin: 10
  },
  PublisherInput:{
    width: 300,
    height: '100%',
    backgroundColor: 'rgba(255, 255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize: 20,
    color: '#fffff',
    marginVertical:20,
    padding:5,
    flex: 1,
    margin: 10
  }

});



export default App;

