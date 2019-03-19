import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

// STYLES
const styles = StyleSheet.create({
  // viewContainer: {
  //   backgroundColor: #fff,
  // },
  basicBubble: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 15,
    fontSize: 22,
    padding: '1%',
    flexDirection: 'column',
    marginBottom: 15,
    maxWidth: '48%',
  }
  bot: {
    borderColor: '#C34271',
    backgroundColor: '#F070A1',
  },
  user: {
    borderColor: '#12C988',
    backgroundColor: '#16FFBD',
    right: 1,
    // marginRight: 5,
  },
});


const TextBubble = props => (
  <View style={styles.viewContainer}>
    <FlatList
      data={[
        {key: 'Devin', text: 'I am the robot!!!', from: 'bot'},
        {key: 'Emily', text: 'I am so angry!', from: 'user'},
        {key: 'Jackson', text: 'Are you really?', from: 'bot'},
        {key: 'James', text: 'Yes!', from: 'bot'},
        {key: 'Joel', text: 'I love validating others.', from: 'bot'},
      ]}
      renderItem={({item}) => <Text style={{[styles.basicBubble, styles[item.from]]}}>{item.text}</Text>}
    />
  </View>
)

export default TextBubble
