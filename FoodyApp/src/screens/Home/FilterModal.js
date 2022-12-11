import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, ScrollView, TouchableWithoutFeedback, Modal } from "react-native";
import { IconButton, TextButton, TextIconButton, TwoPointSlider } from "../../components";
import { COLORS, FONTS, SIZES, constants, icons } from "../../constants";
import styles from "../../styles/FilterModal.style";

const Section = ({ containerStyle, title, children }) => {
  return (
    <View style={[styles.sectionContainer, containerStyle]}>
      <Text style={styles.sectionText}>{title}</Text>
      {children}
    </View>
  );
};

const FilterModal = ({ isVisible, onClose }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [ratings, setRatings] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680],
  });

  function renderDistance() {
    return (
      <Section title="Distance">
        <View style={styles.distanceContainer}>
          <TwoPointSlider values={[3, 10]} min={1} max={20} postfix="km" onValuesChange={(values) => console.log(values)} />
        </View>
      </Section>
    );
  }

  function renderDeliveryTime() {
    return (
      <Section title="Delivery Time" containerStyle={styles.deliveryTimeContainer}>
        <View style={styles.deliveryTimeContainer2}>
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton key={`delivery_time-${index}`} label={item.label} labelStyle={{ color: item.id === deliveryTime ? COLORS.white : COLORS.gray, ...FONTS.body3 }} buttonContainerStyle={{ width: "30%", height: 50, margin: 5, alignItems: "center", borderRadius: SIZES.base, backgroundColor: item.id === deliveryTime ? COLORS.primary : COLORS.lightGray2, }} onPress={() => setDeliveryTime(item.id)} />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderPricingRange() {
    return (
      <Section title="Pricing Range">
        <View style={styles.pricingRangeContainer}>
          <TwoPointSlider values={[10, 50]} min={1} max={100} prefix="$" onValuesChange={(values) => console.log(values)} />
        </View>
      </Section>
    );
  }

  function renderRatings() {
    return (
      <Section title="Ratings" containerStyle={styles.ratingsContainer}>
        <View style={styles.ratingsContainer2}>
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton key={`Ratings-${index}`} containerStyle={{ flex: 1, height: 50, margin: 5, alignItems: "center", borderRadius: SIZES.base, backgroundColor: item.id === ratings ? COLORS.primary : COLORS.lightGray2, }} label={item.label} labelStyle={{ color: item.id === ratings ? COLORS.white : COLORS.gray }} icon={icons.star} iconPosition="RIGHT" iconStyle={{ tintColor: item.id === ratings ? COLORS.white : COLORS.gray, }} onPress={() => setRatings(item.id)} />
            );
          })}
        </View>
      </Section>

    );
  }
  function renderTags() {
    return (
      <Section title="Tags">
        <View style={styles.tagsContainer}>
          {constants.tags.map((item, index) => {
            return (
              <TextButton key={`tags-${index}`} label={item.label} labelStyle={{ color: item.id === tags ? COLORS.white : COLORS.gray, ...FONTS.body3 }} buttonContainerStyle={{ width: "30%", height: 50, margin: 5, paddingHorizontal: SIZES.padding, alignItems: "center", borderRadius: SIZES.base, backgroundColor: item.id === tags ? COLORS.primary : COLORS.lightGray2, }} onPress={() => setTags(item.id)} />
            );
          })}
        </View>
      </Section>
    );
  }

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View style={styles.transparentBackground} />
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.modalView, {top: modalY}]}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Filters</Text>
            <IconButton containerStyle={styles.closeButton} icon={icons.cross} iconStyle={styles.closeButtonIcon} onPress={() => setShowFilterModal(false)} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            {renderDistance()}
            {renderDeliveryTime()}
            {renderPricingRange()}
            {renderRatings()}
            {renderTags()}
          </ScrollView>
          <View style={styles.applyButtonContainer}>
            <TextButton label="Apply Filters" buttonContainerStyle={styles.applyButton} onPress={() => setShowFilterModal(false)}/>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
