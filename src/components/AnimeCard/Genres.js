import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {secondryLabel} from '../../constans/theme';
import PropTypes from 'prop-types';

const Genres = ({genres}) => {
  if (genres && genres.length > 0) {
    return genres.map((item, index) => {
      if (index === genres.length - 1) {
        return (
          <Text key={index} style={styles.genresStyle}>
            {item.name}
          </Text>
        );
      } else {
        return (
          <Text key={index} style={styles.genresStyle}>
            {item.name} {'/ '}
          </Text>
        );
      }
    });
  }
};

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  genresRow: {
    flexDirection: 'row',
  },
  genresStyle: {
    fontSize: 14,
    color: secondryLabel,
  },
});

export default Genres;
