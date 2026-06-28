import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';

export default function EventFeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Event Feed — Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 16,
    color: colors.textSecondary,
  },
});
