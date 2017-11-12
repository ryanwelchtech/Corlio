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
      currencyAmount: '',
      currencyAmountUSD: '',
      exchangeCurrency: '',
      data: []
    };
  }

  async fetchData() {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=25')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  compute = (item, currencyAmount, currencyAmountUSD, exchangeCurrency) => {
    var amount = currencyAmount * item.price_usd
    Alert.alert(
      'Total Value',
      '$' + amount + ' in USD.',
      [
        {text: 'Ok', style: 'cancel'}
      ]
    )
  }

  componentWillMount() {
    setInterval(()=> {
      this.fetchData(), 500
    })
  }

  componentDidMount() {
    setInterval(()=> {
      this.fetchData(), 500
    })
  }

  render() {
    return (
      <Container>
        <Content>
          {
            this.state.data.map(item => (
              <Form key={item.id}>
                <Item floatingLabel>
                  <Label>Amount</Label>
                  <Input onChangeText={(currencyAmount) => this.setState({currencyAmount})} autoCapitalize = 'none'>
                  </Input>
                </Item>
                <Item>
                  <Label>Currency Value in USD $</Label>
                  <Input onChangeText={(currencyAmountUSD) => this.setState({currencyAmountUSD})} autoCapitalize = 'none' value={item.price_usd}>
                  </Input>
                </Item>
                <Item last>
                  <Label>Exchange Currency {item.name}</Label>
                  <Input onChangeText={(exchangeCurrency) => this.setState({exchangeCurrency})} autoCapitalize = 'none' value={item.price_btc}>
                  </Input>
                </Item>
                <Button iconRight block onPress = {() => this.compute(item, this.state.currencyAmount, this.state.currencyAmountUSD, this.state.exchangeCurrency)}>
                <Icon name="md-calculator"/>
                  <Text style={styles.buttonText}>Calculate</Text>
                </Button>
              </Form>
            ))
          }
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
