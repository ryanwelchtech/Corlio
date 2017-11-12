import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,

  TouchableOpacity
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Button,
  Icon
} from 'native-base';
import {
  Actions
} from 'react-native-router-flux';
import Send from './components/send/send.js'

export default class App extends Component<{}> {
  render() {
    return (
    <Container>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.headerText}>Corlio</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Send/>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={()=> Actions.coins()}>
              <Icon name="logo-bitcoin" />
              <Text>Coins</Text>
            </Button>
            <Button onPress={()=> Actions.portfolio()}>
              <Icon name="pie" />
              <Text>Portfolio</Text>
            </Button>
            <Button active>
              <Icon name="send" />
              <Text>Send</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#4286f4'
    },
    headerText: {
      fontSize: 34,
      fontFamily: 'Futura',
      color: 'white'
    }

});
