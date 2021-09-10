import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import { rootStore } from '@nxrgr/marvel/store';
import {
  CharacterDetailScreen,
  CharacterListScreen,
  RootStackParamList,
  HeaderTitle,
  theme,
} from '@nxrgr/marvel/ui-app';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={rootStore}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="ListScreen"
            component={CharacterListScreen}
            options={{
              title: 'Character List',
              headerStyle: {
                backgroundColor: theme.colors.notification,
              },
              headerTintColor: theme.colors.text,
              headerTitle: () => <HeaderTitle />,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={CharacterDetailScreen}
            options={{
              title: '',
              headerShadowVisible: false,
              headerTransparent: true,
              headerBackTitle: '',
              headerTintColor: theme.colors.text,
              headerStyle: {
                backgroundColor: 'transparent',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
