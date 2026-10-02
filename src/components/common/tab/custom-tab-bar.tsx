import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, View } from 'react-native';
import { TabIcons } from '../icons/svg';
import { COLORS } from '@/lib/constants/color.constant';
import React from 'react';

type TabButtonProps = {
  isActive: boolean;
  icon: React.ComponentType<{ color?: string }>;
};

export const CustomTabBar = ({
  state,
  navigation,
}: BottomTabBarProps) => {

  return (
    <View style={[styles.container]}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, idx) => {
          const isActive = state.index === idx;

          return (
            <Pressable
              key={route.key}
              style={styles.tab}
              onPress={() => navigation.navigate(route.name)}
            >
              {route.name === 'Home' && (
                <TabButton isActive={isActive} icon={TabIcons.Home} />
              )}
              {route.name === 'WishList' && (
                <TabButton isActive={isActive} icon={TabIcons.Heart} />
              )}
              {route.name === 'Orders' && (
                <TabButton isActive={isActive} icon={TabIcons.Cart} />
              )}
              {route.name === 'Notifications' && (
                <TabButton isActive={isActive} icon={TabIcons.Bell} />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const TabButton = ({ isActive, icon: Icon }: TabButtonProps) => {
  return (
    <View style={styles.tabButton}>
      <Icon color={isActive ? COLORS.BRWON.NORMAL : COLORS.GREY.LIGHT} />
      {isActive && <View style={styles.tabButtonActive} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    height: 100,
    paddingHorizontal: 13,
    shadowColor: '#000000ab',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android
    elevation: 1,
  },
  tabContainer: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    gap: 20,
  },
  textStyle: {},
  tab: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonActive: {
    marginTop: 3,
    width: 20,
    height: 5,
    borderRadius: 5,
    backgroundColor: COLORS.BRWON.NORMAL,
  },
});
