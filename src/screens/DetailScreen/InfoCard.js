import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {primaryLabel, secondryLabel} from '../../constans/theme';

const InfoCard = props => {
  const {title, genres, synopsis} = props.item;
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.genresRow}>
        {genres &&
          genres.map((genre, key) => (
            <Text key={key} style={styles.genresTextStyle}>
              {genre.name + ' '}
            </Text>
          ))}
      </View>
      <Text style={styles.decriptionTextStyle}>{synopsis}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titleStyle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: primaryLabel,
  },
  genresRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  genresTextStyle: {
    fontSize: 14,
    color: secondryLabel,
  },
  decriptionTextStyle: {
    marginTop: 8,
    fontSize: 14,
    color: secondryLabel,
  },
});

export default InfoCard;
