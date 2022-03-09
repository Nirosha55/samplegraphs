// import * as React from 'react';
// import {View, Text, Button} from 'react-native';

// const LoginScreen = () => {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//     </View>
//     )
// }

// export default LoginScreen;
import * as React from 'react';
import {View, Text, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login Screen</Text>
      <Text>{'welcome to Login screen'}</Text>
      <Button title="Go to Niru" onPress={() => navigation.navigate('Niru')} />
    </View>
  );
};

export default LoginScreen;
