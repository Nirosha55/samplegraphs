import * as React from 'react';
import {View, Text, Button} from 'react-native';

const NiruScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Niru Screen</Text>
         <Button
          title="Go to Niru... again"
          onPress={() => navigation.push('Niru')}
        />
        <Button
          title="Go to login... again"
          onPress={() => navigation.push('Login')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('HomeScrn')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
}

export default NiruScreen;
