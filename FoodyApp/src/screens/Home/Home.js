import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, } from 'react-native';
import {HorizontalFoodCard, Section, VerticalFoodCard} from '../../components';
import {FONTS, SIZES, COLORS, icons, dummyData} from '../../constants';
import styles from '../../styles/Home.style';
import database from "@react-native-firebase/database";

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(0);
  const [menuList, setMenuList] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  async function handleChangeCategory(categoryId, menuTypeId) {
    await database()
      .ref(`/categories`)
      .once('value')
      .then(snapshot => {
        setCategories(snapshot.val());
      });
    await database()
      .ref(`/categories/${categoryId}/menu`)
      .on('value', snapshot => {
        for(let i = 0; i < snapshot.val().length; i++){
          if(snapshot.val()[i].id === menuTypeId){
            setMenuList(snapshot.val()[i].list);
          }
          if(snapshot.val()[i].id === 5){
            setRecommends(snapshot.val()[i].list);
          }
          if(snapshot.val()[i].id === 2){
            setPopular(snapshot.val()[i].list);
          }
          setMenu(snapshot.val());
        }
      });
  }
  async function handleFavourite(item) {
    await database()
      .ref(`/categories/${selectedCategoryId}/menu/2/list/${item.id}/`)
      .update({
        isFavourite: !item.isFavourite,
      });
  }
  // Render
  function renderSearch() {
    //onPress >
    return (
      <View style={styles.searchContainer}>
        <Image source={icons.search} style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity >
        <Image source={icons.filter} style={styles.searchFilterIcon} />
        </TouchableOpacity>
      </View>
    );
  }
  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menuTypesContainer}
        renderItem={({item, index}) => (
          <TouchableOpacity style={{ marginLeft: SIZES.padding, marginRight:index === menu.length - 1 ? SIZES.padding : 0,}} onPress={() => {setSelectedMenuType(item.id);handleChangeCategory(selectedCategoryId, item.id); }}>
            <Text style={{ color: selectedMenuType === item.id ? COLORS.primary : COLORS.black,...FONTS.h3,}}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  function renderRecommendedSection() {
    return (
      <Section title="Recommended"  onPress={() => console.log('Show all recommended')}>
        <FlatList
          data={recommends}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index === 0 ? SIZES.padding : 18,
                marginRight: index === recommends.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: 'center',
              }}
              imageStyle={styles.recommendedImage}
              item={item}
              onPress={() => console.log('HorizontalFoodCard')}
            />
          )}
        />
      </Section>
    );
  }

  function renderPopularSection() {
    return (
      <Section  title="Popular near you" onPress={() => console.log('Show all popular')}>
        <FlatList
          data={popular}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <VerticalFoodCard onPressFav={() => handleFavourite(item)}  containerStyle={{ marginLeft: index === 0 ? SIZES.padding : 18,  marginRight: index === popular.length - 1 ? SIZES.padding : 0, padding: 18, }} item={item} onPress={() => console.log('VerticalFoodCard')} />
          )}
        />
      </Section>
    );
  }

  function renderFoodCategories() {
    return (
      <FlatList
        data={categories}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: 55,
              marginTop: SIZES.padding,
              marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
              marginRight: index === categories.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
              backgroundColor: selectedCategoryId === item.id  ? COLORS.primary : COLORS.lightGray2,
            }}
            onPress={() => { setSelectedCategoryId(item.id);  handleChangeCategory(item.id, selectedMenuType);}}>
            <Image source={{uri: item.icon }} style={styles.categoryImage} />
            <Text style={{  alignSelf: 'center',  marginRight: SIZES.base, color: selectedCategoryId === item.id ? COLORS.white : COLORS.darkGray, ...FONTS.h3, }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  function renderDeliveryTo() {
    return (
      <View style={styles.deliveryToContainer}>
        <Text style={{color: COLORS.primary, ...FONTS.h3}}>Delivery to</Text>
        <TouchableOpacity style={styles.deliveryToButton}>
          <Text style={styles.deliveryToButtonText}>{dummyData?.myProfile?.address}</Text>
          <Image source={icons.down_arrow} style={styles.deliveryToButtonIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={ styles.homeContainer}>
      {renderSearch()}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderDeliveryTo()}
            {renderFoodCategories()}
            {renderPopularSection()}
            {renderRecommendedSection()}
            {renderMenuTypes()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <HorizontalFoodCard containerStyle={styles.foodCardContainer}  imageStyle={styles.foodCardImage}  item={item} onPress={() => console.log('HorizontalFoodCard')} />
          );
        }}
        ListFooterComponent={<View style={styles.footerSpace} />}
      />
    </View>
  );
};

export default Home;
