import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {primaryColor} from '../../constans/theme';
import PropTypes from 'prop-types';

const RatingCard = props => {
  const {title, rate} = props;
  return (
    <View style={styles.ratingCard}>
      <Text>{title}</Text>
      <Text style={styles.ratingCardText}>{rate}</Text>
    </View>
  );
};

RatingCard.propTypes = {
  title: PropTypes.string.isRequired,
  rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
  ratingCard: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  ratingCardText: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
    color: primaryColor,
  },
});

export default RatingCard;
