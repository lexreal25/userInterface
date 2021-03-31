import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TextInput, ImageBackground } from 'react-native';
import profile from './assets/profile.jpg'
import background from './assets/background.jpg'



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={{width: '100%', height:'100%'}}>
        <Image style={styles.image} source={profile} />
        
        {/*input fields for name*/}
        <View style={styles.inputText}>
          <Text style={styles.label}>Name :</Text>
          <TextInput editable placeholder={'Mr. Like Me'} style={[styles.label,styles.generalProps, styles.details]} />
        </View>

        {/*input fields email address */}
        <View style={styles.inputText}>
          <Text style={styles.label}>Email :</Text>
          <TextInput editable placeholder={'username@mail.com'} style={[styles.label,styles.generalProps, styles.details]} />
        </View>

        {/*input fields for phone number */}
        <View style={styles.inputText}>
          <Text style={styles.label}>Number :</Text>
          <TextInput editable={true} keyboardType="numeric" placeholder={'+233 002 532 4567'} style={[styles.label, styles.generalProps, styles.details]} />
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  image:{
    width: 200,
    height: 200,
    marginBottom: 30,
    marginTop: 100,
    alignSelf: 'center',
    borderRadius: 100
  },
  inputText: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  generalProps: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'black',
    fontSize: 18,
    fontStyle: 'normal',
    paddingHorizontal: 5
  },
  label: {
    flex: 2.5,
    fontSize: 20,
    color: '#fff',
    textAlign: 'left',
    borderColor:'transparent',
    borderWidth: 2,
    fontWeight: 'normal',
    fontFamily: "sans-serif-medium",
  },
  details: {
    flex: 7.5,
  }
});
