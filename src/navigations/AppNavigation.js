import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import SignIn from '../screens/SignIn/SignIn'
import SignUP from '../screens/SignUp/SignUp';
import RestPassword from '../screens/ResetPassword/ResetPassword';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import MyCart from '../components/MyCart/MyCart';
import OrderSummary from '../components/OrderSummary/OrderSummary';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
          marginTop: 12,
        }
      }}
    >

      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUP} />
      <Stack.Screen name="ResetPassword" component={RestPassword} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen} />
      <Stack.Screen name='Recipe' component={RecipeScreen} />
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
      <Stack.Screen name='ProductDescription' component={ProductDescription} />
      <Stack.Screen name='MyCart' component={MyCart} />
      <Stack.Screen name='OrderSummary' component={OrderSummary} />
    </Stack.Navigator>
  )
}



const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => <DrawerContainer navigation={navigation} />}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
}


export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  )
}


console.disableYellowBox = true;