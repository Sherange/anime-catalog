import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ImageCard = props => {
  const {images} = props;
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{uri: images.jpg.large_image_url}}
        style={styles.imageStyle}
        resizeMode="cover"
      />
    </View>
  );
};

ImageCard.propTypes = {
  images: PropTypes.shape({
    jpg: PropTypes.object.isRequired,
  }),
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  imageStyle: {
    width: Dimensions.get('window').width - 30,
    height: 200,
    borderRadius: 20,
  },
});

export default ImageCard;
