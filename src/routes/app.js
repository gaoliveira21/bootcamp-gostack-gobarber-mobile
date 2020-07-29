/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function New() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
    >
      <Stack.Screen
        options={({ navigation }) => ({
          title: 'Selecione o prestador',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Icon name="chevron-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        })}
        name="SelectProvider"
        component={SelectProvider}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          title: 'Selecione o horário',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectProvider')}
            >
              <Icon name="chevron-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        })}
        name="SelectDateTime"
        component={SelectDateTime}
      />
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: '#8d41a8',
          height: 60,
          borderTopWidth: 0,
        },
        tabStyle: {
          padding: 5,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({ color }) => (
            <Icon name="event" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarVisible: false,
          tabBarLabel: 'Agendar',
          tabBarIcon: () => (
            <Icon
              name="add-circle-outline"
              size={20}
              color="rgba(255, 255, 255, 0.6)"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
