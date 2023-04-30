import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ICON} from '@src/assets';
import {
  AccountScreen,
  HomeScreen,
  NotificationScreen,
  WalletScreen,
} from '@src/screens';
import React, {useCallback} from 'react';
import {Image, Platform, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTab() {
  const {bottom} = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = 62 + bottom;

  const renderTabBarIcon = useCallback(
    (screen: keyof BottomTabParamList, focused: boolean) => {
      const tabBarIconStyle = {
        ...styles.tabBarIcon,
        ...(focused && {tintColor: '#FC5A5A'}),
      };
      return <Image source={ICON[screen]} style={tabBarIconStyle} />;
    },
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: TAB_BAR_HEIGHT,
          marginTop: 2,
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => renderTabBarIcon('HOME', focused),
        }}
      />
      <Tab.Screen
        name="NOTIFICATION"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => renderTabBarIcon('NOTIFICATION', focused),
          tabBarBadge: '',
          tabBarBadgeStyle: styles.tabBarBadge,
        }}
      />
      <Tab.Screen
        name="WALLET"
        component={WalletScreen}
        options={{
          tabBarIcon: ({focused}) => renderTabBarIcon('WALLET', focused),
        }}
      />
      <Tab.Screen
        name="ACCOUNT"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => renderTabBarIcon('ACCOUNT', focused),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {width: 40, height: 40},
  tabBarBadge: {
    minWidth: 12,
    maxHeight: 12,
    borderRadius: 6,
    top: Platform.select({
      ios: 15,
      android: 13,
    }),
    backgroundColor: '#FC5A5A',
  },
});
