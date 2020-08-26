import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import logo from './assets/instagram.png';

import Feed from './pages/Feed';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
    },
    {
      // centralizando o conteudo do header
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        // Definindo o padrão de cabeçalho
        headerTitle: <Image source={logo} />,
        // cor de fundo do cabeçalho
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  ),
);

export default Routes;
