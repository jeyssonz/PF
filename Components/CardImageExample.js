import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {


  render() {
    return (
      
        <Content style={styles.container}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oMDxKE4LHwn2wdn8z0hNbmE3rvoT3sAhecloSg5vm0vfdqjQ'}} />
                <Body>
                  <Text>Curso de Liderazgo</Text>
                  <Text note>Alberto Iglesias Fraga</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5MQmxKHnZeYM3e6ds1bRBm0_cOykultFqFQAW0nAUPw_QWfI'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1
  },
});
