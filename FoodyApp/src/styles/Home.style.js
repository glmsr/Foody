import {StyleSheet} from 'react-native';
import {FONTS, SIZES, COLORS} from '../constants';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
  searchInput: {
    flex: 1,
    marginLeft: SIZES.radius,
    ...FONTS.body3,
  },
  searchFilterIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
  menuTypesContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
recommendedImage: {
  marginTop: 35,
  height: 150,
  width: 150,
},
  categoryImage: {
    marginTop: 5,
    height: 50,
    width: 50,
  },
  deliveryToContainer: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
  },
  deliveryToButton : {
    flexDirection: 'row',
    marginTop: SIZES.base,
    alignItems: 'center',
  },
  deliveryToButtonText:{
    ...FONTS.h3
  },
  deliveryToButtonIcon: {
    marginLeft: SIZES.base,
    width: 20,
    height: 20,
  },
  homeContainer: {
    flex: 1,
  },
  foodCardContainer: {
    height: 130,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
  },
  foodCardImage: {
    marginTop: 20,
    height: 110,
    width: 110,
  },
  footerSpace: {
    height: 200
  },


});
export default styles;
