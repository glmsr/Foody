
import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import { HorizontalFoodCard, VerticalFoodCard } from '../../components'
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants'

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>View All</Text>
        </TouchableOpacity>
          </View>
          {/* Content */}
            {children}
    </View>
  )
}

const Home = () => {
    
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [menuList, setMenuList] = React.useState([])
    const [recommends, setRecommends] = React.useState([])
    const [popular, setPopular] = React.useState([])
  
  
    
    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])
    
    
    function handleChangeCategory(categoryId, menuTypeId) {
        // Retrieve the popular menu
        let selectedPopular = dummyData.menu.find(a => a.name == "Popular")

        // Retrieve the recommended menu
        let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")
        
        // Filter menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

        // Set the popular menu based on the selected categoryId
        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))

        // Set the recommended menu based on the categoryId

        setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

        // set the menu based on category
        setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
    }
    
    // Render
    function renderSearch() {
        return (
            <View
            style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
        }}
        >
        {/* Icon */}
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.black,
          }}
        />
      
        {/* Text Input */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="Search"
        />

        {/* Filter Button */}
        <TouchableOpacity
        //onPress
        >
          <Image
            source={icons.filter}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
        

      </View>
    )
  }
  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
            }}
            onPress={() => {
              setSelectedMenuType(item.id)
              handleChangeCategory(selectedCategoryId, item.id)
            }}
          >
            <Text
              style={{
                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
      )}
      />
  )
}
    
    function renderRecommendedSection() {
        return (
            <Section
                title="Recommended"
                onPress={() => console.log("Show all recommended")}
            >
                <FlatList
                    data={recommends}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 180,
                                width: SIZES.width * 0.85,
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center',
                            }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width: 150,
                            }}
                            item={item}
                            onPress={() => console.log("HorizontalFoodCard")}
                        />
                    }}
                />
                
            </Section>
            
        )
    }

    function renderPopularSection() {
        return (
            <Section
                title="Popular near you"
                onPress={() => console.log("Show all popular")}
            >
                <FlatList
                    data={popular}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        <VerticalFoodCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                                height: 180,
                                width: SIZES.width * 0.85,
                                paddingRight: SIZES.radius,
                                alignItems: 'center',
                            }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width: 150,
                            }}
                            item={item}
                            onPress={() => console.log("VerticalFoodCard")}
                        />
                    }}
                />
                
            </Section>
            
        )
    }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search */}
      {renderSearch()}

      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
            <View>
                {/* Popluar */}
                {renderPopularSection()}

                {/* Recommended */}
                {renderRecommendedSection()}
                {/* Menu Types */}
                {renderMenuTypes() }
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110
              }}
              item={item}
              onPress={() => console.log("HorizontalFoodCard")}
            />
          )
        }}
      />
      </View>
    )
  }



export default Home

//IF EVERYTHING FAILS, RUN THESE INSTEAD
// import React from 'react';
// import { View, Text } from 'react-native';
// const Home = () => {
//     return (
//         <View>
//             <Text>Home</Text>
//         </View>
//     )
// }
// export default Home

