import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {ICON} from '@src/assets';

const CategoryItem = ({item, index}: {item: CategoryType; index: number}) => {
  const {note, img, showL, coins, description} = item;
  const {width} = useWindowDimensions();
  const ITEM_WIDTH = width / 2;

  const itemCoinsStyle = {
    ...styles.itemCoins,
    ...{color: showL ? '#696974' : '#0062FF'},
  };

  const imgStyle = {
    width: ITEM_WIDTH,
    height: 98,
  };

  const containerStyle = {
    ...styles.container,
    ...{
      width: ITEM_WIDTH,
      marginLeft: index === 0 ? 24 : 0,
    },
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity style={styles.touch}>
        <Image source={img} style={imgStyle} />
        <View style={styles.itemDetail}>
          <View style={styles.itemCoinsWrapper}>
            {showL && <Image source={ICON.L} style={styles.imgL} />}
            <Text style={itemCoinsStyle}>
              {new Intl.NumberFormat().format(coins)} Coins
            </Text>
          </View>
          <Text style={styles.description}>{description}</Text>
          {note && <Text style={styles.note}>{note}</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(CategoryItem);

const styles = StyleSheet.create({
  container: {
    marginRight: 24,
    marginBottom: 24,
    backgroundColor: 'white',

    shadowColor: Platform.select({
      ios: 'rgba(23, 23, 37, 0.04)',
      android: 'rgba(23, 23, 37, 0.5)',
    }),
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 5,
    elevation: 5,
  },
  touch: {
    flex: 1,
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: '#F1F1F5',
    borderRadius: 4,
  },
  itemCoins: {
    fontFamily: 'Hellix-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  itemDetail: {
    margin: 16,
  },
  itemCoinsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgL: {
    width: 19,
    height: 19,
    marginRight: 4,
  },

  description: {
    marginTop: 8,
    color: '#92929D',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Hellix-Regular',
  },

  note: {
    marginTop: 8,
    color: '#0062FF',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Hellix-Regular',
  },
});
