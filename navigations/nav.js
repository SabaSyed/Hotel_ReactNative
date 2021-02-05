import holmes from "../comps/home";
import hoteldesc from "../comps/hoteldesc";
import third from '../comps/Bookform';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const Navigator = createSwitchNavigator(
  {
    Home: holmes,
    Hoteldesc: hoteldesc,
    Third: third,
  },
  {
    initialRouteName: 'Home',
  }
);
const nav = createAppContainer(Navigator);

export default nav;
