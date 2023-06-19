import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch, Button, Alert } from 'react-native';
import { Audio } from 'expo-av';

const BreakScreen = () => {
  const [alarmEnabled, setAlarmEnabled] = useState(false);
  const [intervalSeconds, setIntervalSeconds] = useState(10);
  const intervalMilliseconds = intervalSeconds * 1000;
  const [remainingTime, setRemainingTime] = useState(intervalMilliseconds);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('eyeing/iPhone-Alarm-Original.mp3')
        );
        setSound(sound);
      } catch (error) {
        console.log('Error loading sound', error);
      }
    };

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    let intervalId;

    if (alarmEnabled) {
      intervalId = setInterval(() => {
        setRemainingTime(intervalMilliseconds);
        playAlarmSound();
        Alert.alert('쉬는시간', '눈에게 쉬는시간을 주세요!', [
          {
            text: '확인',
            onPress: () => {
              stopAlarmSound();
            }
          }
        ]);
      }, intervalMilliseconds);
    }

    return () => clearInterval(intervalId);
  }, [alarmEnabled]);

  useEffect(() => {
    let timerId;

    if (remainingTime > 0) {
      timerId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else {
      stopAlarmSound();
    }

    return () => clearInterval(timerId);
  }, [remainingTime]);

  const handleToggleAlarm = () => {
    setAlarmEnabled((prevEnabled) => !prevEnabled);
    setRemainingTime(intervalMilliseconds); // Reset remaining time when disabling the alarm
  };

  const handleIntervalChange = (seconds) => {
    setIntervalSeconds(seconds);
    setRemainingTime(seconds * 1000); // Reset remaining time when changing the interval
  };

  const handleIntervalPress = () => {
    Alert.alert(
      '알람 주기',
      '나의 눈을 위한 휴식시간을 주기적으로!',
      [
        { text: '10초', onPress: () => handleIntervalChange(10) },
        { text: '20초', onPress: () => handleIntervalChange(20) },
        { text: '30초', onPress: () => handleIntervalChange(30) },
        { text: '40초', onPress: () => handleIntervalChange(40) },
        { text: '50초', onPress: () => handleIntervalChange(50) },
        { text: '60초', onPress: () => handleIntervalChange(60) },
        { text: '닫기', style: 'cancel' }
      ]
    );
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const playAlarmSound = async () => {
    try {
      if (sound) {
        await sound.replayAsync();
      }
    } catch (error) {
      console.log('Error playing sound', error);
    }
  };

  const stopAlarmSound = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
      }
    } catch (error) {
      console.log('Error stopping sound', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>⏰</Text>
      <Text style={styles.title}>휴식 알람</Text>
      <View style={styles.alarmContainer}>
        <Text style={styles.alarmText}>알람</Text>
        <Switch
          value={alarmEnabled}
          onValueChange={handleToggleAlarm}
          trackColor={{ false: '#767577', true: '#32A055' }}
          thumbColor="#f4f3f4"
        />
      </View>
      {alarmEnabled && (
        <View style={styles.intervalContainer}>
          <Text style={styles.intervalText}>알람 주기</Text>
          <Text style={styles.selectedIntervalText}>{intervalSeconds}초</Text>
          <Button
            title="알람 주기 변경"
            onPress={handleIntervalPress}
            color="#32A055"
          />
          <Text style={styles.timerText}>
            남은 시간: {formatTime(remainingTime)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  alarmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  alarmText: {
    fontSize: 18,
    marginRight: 10,
  },
  intervalContainer: {
    alignItems: 'center',
  },
  intervalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedIntervalText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 16,
  },
  emoji: {
    color: '#fff',
    fontSize: 300,
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 100,
  },
});

export default BreakScreen;
