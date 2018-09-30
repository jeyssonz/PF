import React, {Component} from 'react';
import {StyleSheet, TextInput } from 'react-native';

export default class Input extends Component {

    constructor(props){
        super(props);
        this.state = {
            Texto: '',
        }
    }

    onSubmitEditing = () =>{
        const {Texto} = this.state;
        if(!Texto) return;
        this.props.onSubmitEditing(Texto);
        this.setState({Texto: ''})
    }

    
    render() {
     return(
       <TextInput
         value = {this.state.Texto}
         placeholder = 'Escriba un texto aqui'
         onChangeText = { (Texto)=> this.setState({Texto})}
         onSubmitEditing = {this.onSubmitEditing}
       />
     );
    }
}