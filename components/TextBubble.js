import React, { Component } from 'react';
import { FlatList, Text, ScrollView, StyleSheet, View } from 'react-native';

// STYLES
const styles = StyleSheet.create({
  viewContainer: {
    paddingTop: '25%',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    overflow: 'scroll',
  },
  basicBubble: {
    // justifyContent: 'space-evenly',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 15,
    fontSize: 20,
    padding: '3%',
    lineHeight: 0,
    flexDirection: 'column',
    marginBottom: 15,
    maxWidth: '65%',
    // overflow: 'visible',
  },
  bot: {
    borderColor: '#C34271',
    backgroundColor: '#F070A1',
  },
  user: {
    borderColor: '#12C988',
    backgroundColor: '#16FFBD',
    alignSelf: 'flex-end',
  },
});


const TextBubble = props => (
  <View style={styles.viewContainer}>
    <FlatList
      data={[
        {key: '1a', text: 'I am so angry!', from: 'user'},
        {key: '2a', text: 'Why would you do this to me? I thought you loved me! But you hurt me. You abandonded me!', from: 'user'},
        {key: '3a', text: "I'm so sorry", from: 'bot'},
        {key: '4a', text: "I don't want you to hurt.", from: 'bot'},
        {key: '5a', text: "I really let you down.", from: 'bot'},
        {key: '6a', text: "You're the worst. Why would you do this to me?", from: 'user'},
        {key: '7a', text: "You're right.", from: 'bot'},
        {key: '8a', text: "I don't know. I wish I could take it back.", from: 'bot'},
        {key: '9a', text: "You didn't deserve that.", from: 'bot'},
      ]}
      renderItem={({item}) => <Text style={[styles.basicBubble, styles[item.from]]}>{item.text}</Text>}
    />
  </View>
)

export default TextBubble
