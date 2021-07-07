import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BeltsScreen from './src/screens/BeltsScreen';
import CategoriesScreen from "./src/screens/CategoriesScreen";

const navigator = createStackNavigator({
  Belts: BeltsScreen,
  Categories: CategoriesScreen
  }, {
    initialRouteName: 'Belts',
    defaultNavigationOptions: {
      title: 'Altitud MMA y BJJ'
    }
});

export default createAppContainer(navigator);