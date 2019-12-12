import React from 'react';
import PostItem from './PostItem'
import { StyleSheet,View, SafeAreaView} from 'react-native';


class PostContainer extends React.Component {
   
    
    render() {
        console.log(this.props.recipes)
        return (
            <SafeAreaView style={styles.Itemcontainer}>
        
                <View >
                    {this.props.recipes.map((recipe) => (
                        <PostItem {...recipe} key={recipe.id} />
                    ))}    
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    Itemcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },

    card: {
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#000',
        width: 300,
        height: 300,
        padding: 10
    }

});


export default PostContainer