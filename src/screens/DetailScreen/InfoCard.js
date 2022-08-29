import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  primaryLabel,
  secondryTextColor,
  secondryLabel,
} from '../../constans/theme';
import RatingCard from '../../components/RatingCard/RatingCard';

const InfoCard = props => {
  const {
    title_english,
    genres,
    synopsis,
    rank,
    score,
    rating,
    duration,
    popularity,
  } = props.item;
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.titleStyle}>{title_english}</Text>

      <View style={styles.genresRow}>
        {genres &&
          genres.map((genre, key) => (
            <Text key={key} style={styles.genresTextStyle}>
              {genre.name + ' '}
            </Text>
          ))}
      </View>

      <View style={styles.ratingCardsRow}>
        <RatingCard title="Rank" rate={rank} />
        <RatingCard title="Score" rate={score} />
        <RatingCard title="Popularity" rate={popularity} />
      </View>
      <Text style={styles.ratingText}>{rating}</Text>
      <Text style={styles.durationText}>{duration}</Text>
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
    marginVertical: 8,
  },
  genresTextStyle: {
    fontSize: 14,
    color: secondryLabel,
  },
  decriptionTextStyle: {
    marginVertical: 8,
    fontSize: 14,
    color: secondryLabel,
    lineHeight: 25,
  },
  ratingCardsRow: {
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ratingText: {
    marginVertical: 8,
    fontSize: 14,
    fontWeight: '600',
    color: secondryTextColor,
  },
  durationText: {
    marginVertical: 8,
    fontSize: 14,
    fontWeight: '600',
    color: secondryTextColor,
  },
});

export default InfoCard;
