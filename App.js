import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert,ScrollView } from 'react-native';

import Input from './Components/Input'
import List from './Components/List'
import CardImageExample from './Components/CardImageExample'


type Props = {};
export default class App extends Component<Props> {

constructor(Props){
  super(Props);
  this.state = {
    data : [
      'Curso de Liderazgo',
      
      'Le damos la especial bienvenida a este curso de Liderazgo 101, de la mano de Valentín López. Esta información le dará luces en su proceso de liderazgo, actitud e inteligencia emocional     Un buen líder atrae los buenos pensamientos y las buenas circunstancias a su vida, porque es dueño de su propio pensamiento y responsable de su vida. La gran diferencia entre soñadores y verdaderos empresarios visionarios es que los segundos persisten aunque no las tengas todas consigo pues dan por sentado que cometer errores, equivocarse y fracasar muchas veces, está a la orden del día y es obvio y natural. Forma parte del aprendizaje y del transcurso del camino llamado éxito.     La persona que cada día aprende, se desarrolla y por ende lidera, toma cargo completo de su vida. Puede decidir cómo se toma las cosas y cómo reacciona a ellas porque no invierte tiempo en culpar a los demás en el proceso. Es muy importante ir más allá de la educación académica, necesaria pero insuficiente.'
    ],
    users : [
      {
         name: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oMDxKE4LHwn2wdn8z0hNbmE3rvoT3sAhecloSg5vm0vfdqjQ',
         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oMDxKE4LHwn2wdn8z0hNbmE3rvoT3sAhecloSg5vm0vfdqjQ',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5MQmxKHnZeYM3e6ds1bRBm0_cOykultFqFQAW0nAUPw_QWfI'
      }
     ]
  }
    }

onSubmitEditing = (text) => {
  //Alert.alert(text);
  this.setState({ data: [...this.state.data,text]})

}

onRemove = (index) =>{
 // Alert.alert('Remove '+index);
 Alert.alert(
  'Desea Borrar',
  'Elimara esta sección',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'Ok', onPress: () => this.setState({ data: this.state.data.filter((element,i)=> i !==index)})},
  ],
  { cancelable: false }
)
}

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Input onSubmitEditing = {this.onSubmitEditing} />
          <CardImageExample/>
          <List list={this.state.data} onRemove={this.onRemove}></List>
          
        </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
