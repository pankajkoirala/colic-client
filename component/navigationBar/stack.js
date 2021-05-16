import React from "react";
import { Header } from "react-native-elements";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "../pages/homepage/homepageContainer";
import Chat from "../pages/chat/chatContainer";
import ContactUsPage from "../pages/contactus/contactus";
import BlogPage from "../pages/blog/blogContainer";
import Login from "../pages/auth/login/loginContainer";
import LoginFrontPage from "../pages/auth/loginFrontPage";
import SignUp from "../pages/auth/signup/signupContainer";
import Profile from "../pages/profile/profileContainer";
import verifyUser from "../pages/auth/signup/verifyUser";
import SingleBlogView from "./../pages/blog/detailView";

const Stack = createStackNavigator();

//page header
export function PageHeader(props) {
  return (
    <Header
      leftComponent={{
        icon: "menu",
        color: "#fff",
        onPress: () => props.navigation.openDrawer(),
      }}
      centerComponent={{ text: props.title, style: { color: "#fff" } }}
      rightComponent={{
        icon: "home",
        color: "#fff",
        onPress: () => props.navigation.navigate("Home"),
      }}
    />
  );
}

const AuthScreen = {
  loginFrontPage: LoginFrontPage,
  signupPage: SignUp,
  login: Login,
  VerifyUser: verifyUser,
};

const AppScreen = {
  Chat: Chat,
};

export default function AppStack(props) {
  const { token } = useSelector((state) => ({
    token: state.token.token,
  }));
  //const token = "pankaja";
  return (
    <Stack.Navigator
      screenOptions={token ? { headerShown: false } : { headerShown: false }}
    >
      {token
        ? Object.entries(AppScreen).map(([name, component]) => (
            <Stack.Screen
              name={name}
              component={component}
              options={({ navigation, route }) => ({
                header: (props) => <PageHeader {...props} title={name} />,
              })}
              key={name}
            />
          ))
        : Object.entries(AuthScreen).map(([name, component]) => (
            <Stack.Screen name={name} component={component} key={name} />
          ))}
    </Stack.Navigator>
  );
}

const ProfileScreen = {
  Profile: Profile,
};

const HomeScreen = {
  Home: Homepage,
};
const BlogScreen = {
  Blog: BlogPage,
  SingleBlogView: SingleBlogView,
};

const FileScreen = {
  ContactUs: ContactUsPage,
};

export function ProfileStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(ProfileScreen).map(([name, component]) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
    </Stack.Navigator>
  );
}
export function HomePageStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(HomeScreen).map(([name, component]) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
    </Stack.Navigator>
  );
}
export function BlogStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(BlogScreen).map(([name, component]) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
    </Stack.Navigator>
  );
}
export function FileStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(FileScreen).map(([name, component]) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
    </Stack.Navigator>
  );
}
