import {BACKGROUND, ICON} from '@src/assets';
import {DATA} from '@src/constants/data';
import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Item from './Item';
import {styles} from './styles';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderCategoryItem: ListRenderItem<CategoryType> = useCallback(
    ({item, index}) => <Item item={item} index={index} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: CategoryType) => item.id.toString(),
    [],
  );

  const renderCategoryList = (type: 'PETROL' | 'RENTAL' | 'FOOD') => {
    let categoryName = '';
    switch (type) {
      case 'FOOD':
        categoryName = 'Food and Beverage';
        break;
      case 'PETROL':
        categoryName = 'Petrol';
        break;
      case 'RENTAL':
        categoryName = 'Rental Rebate';
        break;
      default:
        break;
    }
    return (
      <View>
        <View>
          <Text style={styles.categoryName}>{categoryName}</Text>
        </View>
        <FlatList
          horizontal
          data={DATA[type]}
          renderItem={renderCategoryItem}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderItem = useCallback(() => {
    return (
      <View>
        {renderCategoryList('PETROL')}
        {renderCategoryList('RENTAL')}
        {renderCategoryList('FOOD')}
      </View>
    );
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <>
        <View style={styles.overlay} />
        <View
          style={[
            styles.headerContainer,
            {
              paddingTop: top + 16,
            },
          ]}>
          <TouchableOpacity style={styles.backBtn}>
            <Image source={ICON.CHEVRON_LEFT} />
          </TouchableOpacity>

          <View style={styles.tierWrapper}>
            <Text style={styles.tierLevel}>Silver Tier</Text>
            <Text style={styles.tierLevelDesc}>
              In Silver Tier, every $1 in rental fee paid, you get 2 coins to
              redeem exclusive rewards.
            </Text>
          </View>

          <View style={styles.coinsCardWrapper}>
            <ImageBackground source={BACKGROUND.MASK}>
              <Text style={styles.availableCoins}>Available Coin balance</Text>
              <Text style={styles.coins}>340</Text>
              <View style={styles.progressBarWrapper}>
                <View style={styles.nextLevelBar} />
                <View style={styles.currentBar} />
              </View>
              <Text style={styles.nextLevelDesc}>
                You have paid rental fee for $1,200. Pay more $800 to achieve
                Gold Tier.
              </Text>
              <View style={styles.benefitsWrapper}>
                <TouchableOpacity style={styles.benefitsBtn}>
                  <Text style={styles.viewBenefits}>View tier benefits</Text>
                  <Image source={ICON.CHEVRON_RIGHT} />
                </TouchableOpacity>
              </View>
              <View style={styles.myCouponsWrapper}>
                <TouchableOpacity style={styles.myCouponsBtn}>
                  <Text style={styles.myCouponsTxt}>My Coupons</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.updatedTime}>Updated : 02/11/2021</Text>
            </ImageBackground>
          </View>
        </View>
      </>
    );
  }, [top]);

  return (
    <FlatList
      data={[0]}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.flatList}
    />
  );
};

export default HomeScreen;
