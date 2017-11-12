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

  login = (emailAddress, password) => {
    Alert.alert(
      'Login',
      'You will be taken to the main page.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Ok', onPress: () => Actions.coins()},
      ]
    )
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Enter your email</Label>
              <Input onChangeText={(emailOrAddress) => this.setState({emailAddress})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Item floatingLabel>
              <Label>Enter your password</Label>
              <Input onChangeText={(amount) => this.setState({password})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Button iconRight block onPress = {() => this.login(this.state.emailAddress, this.state.password)}>
            <Icon name="md-log-in"/>
              <Text style={styles.buttonText}>Log in</Text>
            </Button>
            <Text style={styles.or}>Or</Text>
            <Button iconRight block onPress = {() => Actions.signup()}>
            <Icon name="md-log-in"/>
              <Text style={styles.buttonText}>Sign Up</Text>
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
  },
  or: {
    alignItems: 'center'
  }
});
