import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// Create a Stack Navigator
const Stack = createStackNavigator();

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>News Screen</Text>
      {/* Add your news layout components here */}
    </View>
  );
};

      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="bars" size={20} color="#32A055" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>👀{"\n"}EYEing</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleFunction1}>
          <Text style={styles.emoji}>📚</Text>
          <Text style={styles.buttonText}>정보</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleFunction2()}>
          <Text style={styles.emoji}>📏</Text>
          <Text style={styles.buttonText}>눈 건강 측정</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleFunction3()}>
          <Text style={styles.emoji}>🖥</Text>
          <Text style={styles.buttonText}>모니터 사용</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleFunction4()}>
          <Text style={styles.emoji}>💪</Text>
          <Text style={styles.buttonText}>눈 운동</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleFunction5()}>
          <Text style={styles.emoji}>✨</Text>
          <Text style={styles.buttonText}>밝기/컬러 조정</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleFunction6()}>
          <Text style={styles.emoji}>⏰</Text>
          <Text style={styles.buttonText}>휴식 알람</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Function to handle button presses
const handleFunction1 = () => {
  // Add your functionality for Function 1 here
};

// Rest of the handleFunctionX functions for each button

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  menuButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    flexDirection: 'row',
    color: '#32A055',
    fontSize: 106,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 70,
    lineHeight: 110,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 0,
    backgroundColor: '#32A055',
    height: 120,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  emoji: {
    color: '#fff',
    fontSize: 70,
    textAlign: 'center',
    marginVertical: 10,
  }
});
