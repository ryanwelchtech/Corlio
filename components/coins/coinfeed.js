import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
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
  Icon
} from 'native-base';

export default class App extends Component<{}> {

  state = {
    data: []
  }

  async fetchData() {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=25')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  showCoinInfo = (item) => {
    Alert.alert(
      item.name + ' Info',
      'Rank: ' + item.rank + '\nMarket cap: ' + item.market_cap_usd + '\nPrice in BTC: ' + item.price_btc + '\nAvailable supply: ' + item.available_supply + '\nTotal supply: ' + item.total_supply,
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
      <View>
        {
          this.state.data.map(item => (
            <View key = {item.id} style = {styles.container}>
              <TouchableOpacity onPress = {() => this.showCoinInfo(item)} style={styles.upperRow}>
                <Image
                  source={{uri: 'https://files.coinmarketcap.com/static/img/coins/64x64/' + item.id + '.png'}}
                  style= {styles.image}
                />
                <Text style={styles.symbol}>{item.symbol}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price_usd}>${item.price_usd} USD</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => this.showCoinInfo(item)} style={styles.stats}>
                <Text>1h:
                     <Text style={styles.percent_change_1h}> {item.percent_change_1h} % </Text>
                </Text>
                <Text>24h:
                     <Text style={styles.percent_change_24h}> {item.percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text style={styles.percent_change_7d}> {item.percent_change_7d} % </Text>
                </Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      display: "flex",
      marginBottom: 20,
      borderBottomColor: "#4286f4",
      borderBottomWidth: 3,
      padding: 20
  },
  upperRow: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 15
  },
  symbol: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 5,
      fontWeight: "bold",
  },
  name: {
      marginTop: 10,
      marginLeft: 5,
      marginRight: 20
  },
  price_usd: {
      marginTop: 10,
      marginLeft: "auto",
      marginRight: 10,
      fontWeight: "bold",
  },
  image: {
      width: 35,
      height: 35,
  },
  stats: {
      display: "flex",
      borderTopColor: "black",
      borderTopWidth: 2,
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-around"
  },
  percentChangePlus: {
      color: "#00BFA5",
      fontWeight: "bold",
      marginLeft: 5
  },
  percentChangeMinus: {
      color: "#DD2C00",
      fontWeight: "bold",
      marginLeft: 5
  }
})
