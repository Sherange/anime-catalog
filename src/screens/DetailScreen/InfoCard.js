import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  primaryLabel,
  secondryTextColor,
  secondryLabel,
  primaryColor,
} from '../../constans/theme';
import RatingCard from '../../components/RatingCard/RatingCard';

const InfoCard = props => {
  const {title, genres, synopsis, rank, score, rating, duration, popularity} =
    props.item;

  return (
    <View style={styles.infoContainer}>
      <View style={styles.titleWrapper}>
        {title && <Text style={styles.titleStyle}>{title}</Text>}
        {props.isFav ? (
          <TouchableOpacity onPress={props.addToFav}>
            <MaterialIcons name="favorite" size={20} color={primaryColor} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={props.addToFav}>
            <MaterialIcons
              name="favorite-border"
              size={20}
              color={primaryColor}
            />
          </TouchableOpacity>
        )}
      </View>

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
      {rating && <Text style={styles.ratingText}>{rating}</Text>}
      {rating && <Text style={styles.durationText}>{duration}</Text>}
      <Text style={styles.durationText}>{'Description'}</Text>
      <Text style={styles.decriptionTextStyle}>
        {synopsis == null ? 'N/A' : synopsis}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexGrow: 1,
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
  titleWrapper: {
    flexDirection: 'row',
    marginRight: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default InfoCard;
