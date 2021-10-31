import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <View style={styles.containerText}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.symbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>$ {coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.pricePositive
              : styles.priceNegative,
          ]}>
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerText: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  textPrice: {
    color: "#fff",
    textAlign: 'right'
  },
  image: {
    width: 30,
    height: 30,
  },
  symbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
  pricePercentage: {
    textAlign: 'right',

  },
  pricePositive: {
    color: "#00b5b9",
  },
  priceNegative: {
    color: "#fc4422",
  },
});
