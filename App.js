import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ImageBackground, TextInput, StatusBar, Button, ScrollView} from 'react-native';
import PostContainer from './components/PostContainer';


class App extends React.Component {
     state={
       recipes: [], 
       displayRecipes: [],
      //  title: '',
      //  image_url:'',
      //  publisher:'',
      
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
    
   console.log(title, publisher, image_url)
    
  }
 
 handleSubmit=()=>{
   
  fetch('http://localhost:3000/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipes:{
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
   
  return (
//  <View style={styles.container}>
<ScrollView scrollEventThrottle={25}>  
    <ImageBackground   style={styles.container} style={{height: '100%', width: '100%'}} source={require('./components/backgroundImage/img/My Post.jpg')} >
    <StatusBar hidden/>
    
  <TextInput style={styles.InputBox} onChangeText={(title) => this.onChange(title, 'title')}
        value={this.state.title}  placeholder="Title" /> 

     <TextInput style={styles.PublisherInput} onChangeText={(publisher) => this.onChange(publisher, 'publisher')}
        value={this.state.publisher}  placeholder="Publisher" /> 

    <TextInput style={styles.InputField} onChangeText={(image_url) => this.onChange(image_url, 'image_url')}
    value={this.state.image_url}  placeholder="image_url" />

      <TouchableOpacity style={styles.buttonInput}  onPress={() => this.handleSubmit}>
        <Text style={styles.button} style={{height: '100%', width: '100%', margin: 10, marginLeft: 43}}>Submit</Text>
        </TouchableOpacity>

     
     <PostContainer recipes={this.state.recipes}/>
    </ImageBackground>
    </ScrollView>
  
  );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F8FD',
    // flex: 1,
    // resizeMode: 'cover',
    // position: 'relative',
   
  },

  InputBox:{
   width: 300,
   backgroundColor: '#B7D4FF',
   borderRadius: 30,
   paddingHorizontal:16,
   fontSize: 20,
  //  color: '#fffff',
   marginVertical:10,
   padding:4,
   flex: 1,
   margin: 10
  },

  InputField:{
    width: 300,
    height: '100%',
    backgroundColor: '#B7D4FF',
    borderRadius: 30,
    paddingHorizontal:16,
    fontSize: 20,
    // color: '#fffff',
    marginVertical:20,
    padding:5,
    flex: 1,
    margin: 10
  },
  PublisherInput:{
    width: 300,
    height: '100%',
    backgroundColor: '#B7D4FF',
    borderRadius: 20,
    paddingHorizontal:16,
    fontSize: 20,
    // color: '#fffff',
    marginVertical:20,
    padding:5,
    flex: 1,
    margin: 10
  },
  buttonInput:{
    width: 150,
    borderRadius: 30,
    height: 40,
    backgroundColor: '#76FEC5',
    marginLeft: 50,
   

  },
  // buttonText:{
  //  marginLeft: 100   
  // }

});



export default App;

