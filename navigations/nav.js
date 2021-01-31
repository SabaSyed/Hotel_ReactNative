import holmes from "../comps/home";
import hoteldesc from "../comps/hoteldesc";
import Panel1 from "../comps/Panel";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const Navigator = createSwitchNavigator(
  {
    Home: holmes,
    Hoteldesc: hoteldesc,
    Panel: Panel1,
  },
  {
    initialRouteName: "Home",
  }
);
const nav = createAppContainer(Navigator);

export default nav;
