import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class List extends Component{

renderItem = (text,i) => {

    return(
            
            <TouchableOpacity
            style={styles.item}
            key={i}
            onPress= {() => this.props.onRemove(i)}
            >
                <Text
                 style={styles.tamaño}
                 >{text}</Text>
            </TouchableOpacity>

    )
}

    render() {  
        const {list} = this.props
        return(
            <View>
                {list.map(this.renderItem)}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    item: {
        borderWidth:0.5,
        borderBottomColor: 'grey',
        paddingTop:20,
        paddingBottom: 20,
        alignItems: 'center',
    },
    tamaño: {
        flex: 1,
        fontSize: 20,
        
    },
})