import React, { useEffect, useState } from 'react';
import { View, Text, Slider, Switch, StatusBar } from 'react-native';
import * as Brightness from 'expo-brightness';

const ScreenBrightness = () => {
  const [brightness, setBrightness] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the current screen brightness and dark mode preference on component mount
    getCurrentBrightness();
    getDarkModePreference();

    // Cleanup function
    return () => {
      // Reset the screen brightness to the default value on component unmount
      resetBrightness();
    };
  }, []);

  useEffect(() => {
    // Update the system appearance when the dark mode state changes
    updateSystemAppearance();
  }, [isDarkMode]);

  const getCurrentBrightness = async () => {
    try {
      const currentBrightness = await Brightness.getBrightnessAsync();
      setBrightness(currentBrightness);
      console.log('Current brightness:', currentBrightness);
    } catch (error) {
      console.log('Error getting brightness:', error);
    }
  };

  const setBrightnessValue = async (value) => {
    try {
      await Brightness.setBrightnessAsync(value);
      setBrightness(value);
      console.log('Brightness set to:', value);
    } catch (error) {
      console.log('Error setting brightness:', error);
    }
  };

  const resetBrightness = async () => {
    try {
      await Brightness.setSystemBrightnessAsync(Brightness.SystemBrightness.DEFAULT);
      console.log('Brightness reset to default');
    } catch (error) {
      console.log('Error resetting brightness:', error);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getDarkModePreference = async () => {
    // Retrieve the current system appearance preference
    const isDark = await Brightness.getSystemBrightnessModeAsync();
    setIsDarkMode(isDark);
  };

  const updateSystemAppearance = async () => {
    try {
      await Brightness.setSystemBrightnessModeAsync(isDarkMode);
    } catch (error) {
      console.log('Error updating system appearance:', error);
    }
  };

  const containerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const textStyle = {
    fontSize: 18,
    marginBottom: 20,
    color: isDarkMode ? '#fff' : '#000',
  };

  const topBarStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const sliderStyle = {
    width: '80%',
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <View style={containerStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={topBarStyle}>
        <Text style={textStyle}>스크린 밝기 조절하기</Text>
      </View>
      <Slider
        style={sliderStyle}
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        value={brightness}
        onValueChange={setBrightnessValue}
        minimumTrackTintColor={isDarkMode ? '#fff' : '#000'}
        maximumTrackTintColor={isDarkMode ? '#666' : '#ccc'}
        thumbTintColor={isDarkMode ? '#fff' : '#000'}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text style={textStyle}>{'\n'}다크 모드:   </Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
};

export default ScreenBrightness;
