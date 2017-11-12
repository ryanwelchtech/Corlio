import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Form,
  Input,
  Item,
  Label
} from 'native-base';
import {
  Actions
} from 'react-native-router-flux';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
    };
  }

  logout = () => {
    Alert.alert(
      'Log out',
      'You will be taken to the sign in page.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Ok', onPress: () => Actions.login()},
      ]
    )
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Button iconRight block danger onPress = {() => this.logout()}>
            <Icon name="md-log-out"/>
              <Text style={styles.buttonText}>Log out</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 24
  }
});
