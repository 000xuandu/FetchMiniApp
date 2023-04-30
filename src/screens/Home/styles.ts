import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#171725',
    height: 428,

    position: 'absolute',
    right: 0,
    left: 0,
  },
  headerContainer: {},
  backBtn: {
    width: 40,
    height: 40,
    marginHorizontal: 24,

    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tierWrapper: {
    marginHorizontal: 24,
  },
  tierLevel: {
    marginTop: 16,
    lineHeight: 40,

    fontFamily: 'Hellix-SemiBold',
    fontSize: 32,
    color: 'white',
  },
  tierLevelDesc: {
    marginTop: 8,
    lineHeight: 24,

    fontFamily: 'Hellix-Regular',
    fontSize: 16,
    color: '#B5B5BE',
  },

  coinsCardWrapper: {
    marginTop: 40,
    marginBottom: 8,
    backgroundColor: 'white',
    marginHorizontal: 16,
    padding: 24,

    borderWidth: 1,
    borderColor: '#FAFAFB',
    borderRadius: 8,

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
    elevation: 4,
  },
  availableCoins: {
    fontFamily: 'Hellix-SemiBold',
    fontSize: 14,
    lineHeight: 24,
    color: '#B5B5BE',
  },
  coins: {
    marginTop: 8,
    fontFamily: 'Hellix-Regular',
    fontSize: 48,
    lineHeight: 56,
    color: '#171725',
  },
  progressBarWrapper: {
    marginTop: 34,
  },
  nextLevelBar: {
    backgroundColor: '#E2E2EA',
    height: 5,
    borderRadius: 5,
  },
  currentBar: {
    backgroundColor: '#0062FF',
    height: 5,
    width: '65%',
    position: 'absolute',
    borderRadius: 5,
  },
  nextLevelDesc: {
    marginTop: 34,
    fontFamily: 'Hellix-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#92929D',
  },
  benefitsWrapper: {
    marginTop: 16,
  },
  viewBenefits: {
    fontFamily: 'Hellix-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0062FF',
  },
  benefitsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myCouponsWrapper: {
    marginTop: 24,
  },
  myCouponsBtn: {
    backgroundColor: '#171725',
    borderRadius: 4,
    alignItems: 'center',
  },
  myCouponsTxt: {
    fontFamily: 'Hellix-SemiBold',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    margin: 18,
  },
  updatedTime: {
    fontFamily: 'Hellix-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#B5B5BE',
    marginTop: 16,
    textAlign: 'center',
  },
  categoryName: {
    padding: 24,
    fontFamily: 'Hellix-SemiBold',
    fontSize: 18,
    lineHeight: 24,
    color: '#171725',
  },
  contentContainer: {paddingBottom: 16},
  flatList: {flex: 1, backgroundColor: 'white'},
});
