import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, TouchableOpacity, Alert, Button, FlatList} from 'react-native';
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';


class RecipeForm extends React.Component{
    state={
    
      title: "",
      publisher: "",
      image_url: "",
      id: ""
     
    }

    addRecipe=(e)=>{
      // debugger
      this.setState({
        [e.target.name]: e.target.value
      }, console.log(e.target.name))
    }

    handleSubmit=(title, image_url, publisher)=>{
      // e.preventDefault()
      console.log(this.state)

      axios.post('http://localhost:3000/recipes', this.state)
          .then(response=> {
            console.log(response)
             this.setState({
              response: this.state 
             })
          })
      // debugger
      // fetch('http://localhost:3000/recipes', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //       recipe:[{ 
      //       title:this.state.title,
      //       image_url: this.state.image_url,
      //       publisher: this.state.publisher
      //       }]
      //     .then(res=> res.json())
      //     .then(recipe=>{
      //       this.setState({
      //         recipes: [this.state.recipes, recipe]
      //       })
      //       })
      //     })
      //   })
     }

render(){
  // const { title, image_url, publisher, id }= this.setState({
  //   response: this.state.response
  // })
  return(
    <View>
   
    <ScrollView scrollEventThrottle={25}> 
   {/* {this.state.isLoading ?   */}
  {/* <Text style={styles.loading}>Loading...</Text> : */}
    {/* <ImageBackground   style={styles.container} style={{height: '100%', width: '100%'}} > */}
    <StatusBar hidden/>
    

  <TextInput style={styles.InputBox}  onChange={(e) => this.addRecipe(e)}
        value={this.state.title}  placeholder="title" name="title" /> 

     <TextInput style={styles.PublisherInput} onChange={(e) => this.addRecipe(e)}
        value={this.state.publisher}  placeholder="publisher" name="publisher" /> 

    <TextInput style={styles.InputField} onChange={(e) => this.addRecipe(e)}
    value={this.state.image_url}  placeholder="image_url" name="image_url" />

      <Button style={styles.buttonInput} style={styles.button} style={{height: '100%', width: '100%', margin: 8, marginLeft: 43}} title="Submit"
          onPress={this.handleSubmit} />
        {/* <Text >Submit</Text> */}
     

    {/* </ImageBackground> */}


    </ScrollView>
          {/* </Text> */}
    </View>
  )  
   }
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F8FD',
    
   
  },

  InputBox:{
   width: 300,
   backgroundColor: '#B7D4FF',
   borderRadius: 30,
   paddingHorizontal:16,
   fontSize: 20,
 
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
  loading:{
    margin: 400,
    // marginRight: 400,\
    fontSize: 40,
    color: '#9F2B68',
  }

});



export default RecipeForm