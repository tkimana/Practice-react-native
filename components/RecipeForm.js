import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity} from 'react-native';



class RecipeForm extends React.Component{
    state={
      isLoading: true,
      title: "",
      publisher: "",
      image_url: "",
     
    }


    addRecipe=(e)=>{
      debugger
      this.setState({
        [e.target.name]: e.target.value
      }, console.log(e.target.name))
     
    }


    handleSubmit=(e)=>{
      e.preventDefault()
      debugger
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
          .then(obj=>{
            this.props.addSome(obj)
            })
          })
        })
     }


render(){
  return(
    <View>
      {/* <Text> */}
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

      <TouchableOpacity style={styles.buttonInput}  onPress={() => this.handleSubmit}>
        <Text style={styles.button} style={{height: '100%', width: '100%', margin: 10, marginLeft: 43}}>Submit</Text>
        </TouchableOpacity>

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
  loading:{
    margin: 400,
    // marginRight: 400,\
    fontSize: 40,
    color: '#9F2B68',
  }

});



export default RecipeForm