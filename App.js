import React from 'react'
import {
  Text,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => <Swiper style={styles.wrapper} showsButtons>
  <View style={styles.slide1}>
    <Text style={styles.text}>Hello Swiper</Text>
  </View>
  <View style={styles.slide2}>
    <Text style={styles.text}>Beautiful</Text>
  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>And simple</Text>
  </View>
</Swiper>


// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
// import Swiper from 'react-native-swiper-animated';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.push('Details')}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// const styles = {
//   wrapper: {
//     backgroundColor: '#009688',
//   },
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#e91e63',
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#673ab7',
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#3f51b5',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
// };

// export default () => <Swiper
//   style={styles.wrapper}
//   smoothTransition
//   loop
// >
//   <View style={styles.slide1}>
//     <Text style={styles.text}>Hello Swiper</Text>
//   </View>
//   <View style={styles.slide2}>
//     <Text style={styles.text}>Beautiful</Text>
//   </View>
//   <View style={styles.slide3}>
//     <Text style={styles.text}>And simple</Text>
//   </View>
// </Swiper>;