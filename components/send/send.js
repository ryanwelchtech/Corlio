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

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      emailOrAddress: '',
      amount: '',
      currency: '',
      exchangeCurrency: '',
      cAccessToken: '',
      cRefreshToken: '',
      pKey: '',
      pSecret: ''
    };
  }

  confirmSend = (address, amount, currency, exchangeCurrency) => {
    Alert.alert(
      'Confirmation',
      'Do you want to send ' + amount + ' ' + currency + '/' + exchangeCurrency +' to ' + address + ' ?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => console.log('OK Pressed')},
      ]
    )
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Enter recepient email or wallet address</Label>
              <Input onChangeText={(emailOrAddress) => this.setState({emailOrAddress})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Item >
              <Label>Amount</Label>
              <Input onChangeText={(amount) => this.setState({amount})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Item >
              <Label>Currency</Label>
              <Input onChangeText={(currency) => this.setState({currency})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Item >
              <Label>Exchange Currency</Label>
              <Input onChangeText={(exchangeCurrency) => this.setState({exchangeCurrency})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Item floatingLabel>
              <Label>Coinbase Access Token</Label>
              <Input onChangeText={(cAccessToken) => this.setState({cAccessToken})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Item floatingLabel>
              <Label>Coinbase Refresh Token</Label>
              <Input onChangeText={(cRefreshToken) => this.setState({cRefreshToken})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Item floatingLabel>
              <Label>Poloniex API Key</Label>
              <Input onChangeText={(pKey) => this.setState({pKey})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Item floatingLabel last>
              <Label>Poloniex API Secret</Label>
              <Input onChangeText={(pSecret) => this.setState({pSecret})} autoCapitalize = 'none'>
              </Input>
            </Item>
            <Button iconRight block onPress = {() => this.confirmSend(this.state.emailOrAddress, this.state.amount, this.state.currency, this.state.exchangeCurrency)}>
            <Icon name="md-send"/>
              <Text style={styles.buttonText}>Send/Exchange</Text>
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
