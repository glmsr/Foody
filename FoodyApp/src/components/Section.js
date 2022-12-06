import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const Section = ({title, onPress, children}) => {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.sectionHeaderTextButton}>View All</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
}
export default Section;
const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    marginTop: 30,
    marginBottom: 20,
  },
  sectionHeaderTitle: {
    flex: 1,
    ...FONTS.h3,
  },
  sectionHeaderTextButton: {
    color: COLORS.primary,
    ...FONTS.body3,
  },
});
