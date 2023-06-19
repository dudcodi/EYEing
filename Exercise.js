import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const Exercise = () => {
  const [count, setCount] = useState(0);
  const [isCounting1, setIsCounting1] = useState(false);
  const [isCounting2, setIsCounting2] = useState(false);
  const [ballVisible, setBallVisible] = useState(false);
  const ballPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting1 && count < 10) {
        setCount((prevCount) => prevCount + 1);
      } else if (count === 10) {
        setIsCounting1(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isCounting1, count]);

  useEffect(() => {
    let timerId;

    if (isCounting2) {
      setBallVisible(true);

      const moveInterval = setInterval(() => {
        const maxX = 300; // maximum x-coordinate of the ball's position
        const maxY = 500; // maximum y-coordinate of the ball's position
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        Animated.timing(ballPosition, {
          toValue: { x: randomX, y: randomY },
          duration: 1000,
          useNativeDriver: false,
        }).start();
      }, 1000);

      timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => {
        clearInterval(moveInterval);
        clearInterval(timerId);
        ballPosition.setValue({ x: 0, y: 0 });
        setSeconds(0);
      };
    }

    return () => clearInterval(timerId);
  }, [isCounting2, ballPosition]);

  const handleStartCounting1 = () => {
    setIsCounting1(true);
    setCount(1);
  };

  const handleStopCounting1 = () => {
    setIsCounting1(false);
    setCount(0);
  };

  const handleStartCounting2 = () => {
    setIsCounting2(true);
  };

  const handleStopCounting2 = () => {
    setIsCounting2(false);
    setBallVisible(false);
    setSeconds(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>눈 운동 1</Text>
      <Text style={styles.subtitle}>3초 동안 눈을 10번 감고 뜨세요.</Text>

      <Text style={styles.count}>{count}<Text style={styles.subtitle}>번</Text></Text>

      <TouchableOpacity
        style={[styles.button, isCounting1 ? styles.disabledButton : styles.enabledButton]}
        onPress={handleStartCounting1}
        disabled={isCounting1}
      >
        <Text style={styles.buttonText}>시작</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isCounting1 ? styles.enabledButton : styles.disabledButton]}
        onPress={handleStopCounting1}
        disabled={!isCounting1}
      >
        <Text style={styles.buttonText}>멈춤</Text>
      </TouchableOpacity>

      <Text style={styles.title2}>눈 운동 2</Text>
      <Text style={styles.subtitle}>공을 눈으로 쫓아라! -무제한-</Text>

      {ballVisible && (
        <Animated.View style={[styles.ball, ballPosition.getLayout()]} />
      )}

      <Text style={styles.count}>{seconds}<Text style={styles.subtitle}>초 하는 중..</Text></Text>

      <TouchableOpacity
        style={[styles.button, isCounting2 ? styles.disabledButton : styles.enabledButton]}
        onPress={handleStartCounting2}
        disabled={isCounting2}
      >
        <Text style={styles.buttonText}>시작</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isCounting2 ? styles.enabledButton : styles.disabledButton]}
        onPress={handleStopCounting2}
        disabled={!isCounting2}
      >
        <Text style={styles.buttonText}>멈춤</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title2: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  enabledButton: {
    backgroundColor: '#32A055',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ball: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: '1',
  },
});

export default Exercise;
