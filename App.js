import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/IconButton';
import {Colors} from './constants/colors.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle:{backgroundColor:Colors.primary500},
            headerTintColor:Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700}
          }}
        >
          <Stack.Screen name="AllPlaces"
                        title="Your favorite places"
                        component={AllPlaces}
                        options={({navigation}) => ({
                          headerRight: ({tintColor}) =>
                            <IconButton
                              icon="add"
                              color={tintColor} size={24}
                              onPress={() => navigation.navigate('AddPlace')}/>,
                        })}/>
          <Stack.Screen name="AddPlace" component={AddPlace}
                        options={{
                          title:"Add a new Place",
                        }}/>
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}
