import { ChevronDown, SearchIcon } from '@/components/common/icons/svg';
import { COLORS } from '@/lib/constants/color.constant';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationTitle}>Location</Text>
      <View style={styles.location}>
        <Text style={styles.address}>Bilzen, Tanjungbalai</Text>
        <ChevronDown size={14} color={COLORS.SURFACE.NORMAL} />
      </View>
      <HomeSearch />
    </View>
  );
};

const HomeSearch = () => {
  return (
    <View style={styles.search}>
      <View style={styles.searchBar}>
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
        <TextInput style={styles.searchInput} placeholder="Search coffee" placeholderTextColor={COLORS.GREY.LIGHT} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
  locationTitle: {
    fontSize: 14,
    color: COLORS.GREY.LIGHT,
    fontWeight: 300,
  },
  location: {
    marginTop: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  address: {
    fontSize: 16,
    color: COLORS.SURFACE.NORMAL,
  },
  search: {
    marginTop: 15,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    height: 58,
  },
  searchIcon: {
    position: 'absolute',
    left: 14,
    top: '32%',
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: COLORS.GREY.NORMAL,
    width: '100%',
    fontSize: 16,
    paddingHorizontal: 45,
    height: '100%',
    borderRadius: 10,
    color: COLORS.SURFACE.WHITE,
  },
});
