import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import BreakScreen from './BreakScreen';
import ScreenBrightness from './ScreenBrightness';
import Exercise from './Exercise';
import EyeTest from './EyeTest';


// Create a Stack Navigator
const Stack = createStackNavigator();

const NewsScreen = () => {
  const articles = [
    { id: 1, title: '눈 건강을 위한\n9가지 음식🥕', content: '1. 당근\n\n당근은 비타민 A가 풍부해 눈 건강에 좋은 대표적인 식품입니다. 비타민 A는 망막의 간상세포에서 일련의 작용을 통해 시각을 형성하는 데에 필수적이며, 로돕신이라는 물질을 합성해 어두운 곳에서도 사물을 잘 인식할 수 있도록 돕습니다.또한 비타민 A는 안구건조증, 감염성 질환으로부터 눈을 보호해주기 때문에 눈 건강을 지키기 위해서는 꼭 챙겨야 할 영양소입니다. \n\n비타민 A 의 결핍 시 시력이 저하될 뿐 아니라 야맹증에 걸릴 수도 있으니 눈 건강을 위해 당근을 챙겨먹으면 좋습니다. 당근은 익혀서 먹는 것이 흡수율 을 높일 수 있으니 생으로 먹는 것보다는 조리해서 섭취하는 것을 권장합니다.' },
    { id: 2, title: '봄철 눈 건강 \n가이드🌸', content: '최근 건강심사평가원 데이터에 의하면, 2020년 ~ 2021년 기준 안구건조증 환자는 본격적으로 봄이 시작되는 3~4월부터 급증하는 것으로 나타났습니다. 이렇듯 미세먼지, 꽃가루가 심해지는 봄철에는 눈 건강에도 이상이 생기기 쉽습니다. \n\n1. 실내 습도 45% 이상 유지하기 \n\n먼저, 실내 공기가 건조하면 눈이 쉽게 피로감을 느낄 수 있기 때문에, 가습기, 젖은 수건, 잎이 넓은 화분 등을 이용해 실내 습도를 항시 최소 45% 이상 유지하는 것이 좋습니다. 실내 습도 유지를 위해 가습기를 사용한다면 깨끗한 물로 자주 교체할 수 있는 관리 쉬운 소형제품을 추천드려요! \n\n[출처] [아이리움안과가 알려드리는 봄철 눈 건강 가이드 👀]|작성자 아이리움 연구소' },
    { id: 3, title: '업데이트 중...⚒️', content: '업데이트 중...' },
  ];

  const renderArticle = ({ item }) => {
    return (
      <View style={styles.articleContainer}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleContent}>{item.content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiperContainer}
        dotColor="#ccc"
        activeDotColor="#32A055"
      >
        {articles.map((article) => (
          <View key={article.id} style={styles.swiperSlide}>
            <FlatList
              data={[article]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderArticle}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

// HomeScreen component
const HomeScreen = ({ navigation }) => {
  const handleFunction1 = () => {
    // Navigate to the NewsScreen
    navigation.navigate('News');
    console.log('Function 1 pressed');
  };

  const handleFunction2 = () => {
    // Function 2 logic goes here
    navigation.navigate('EyeTest');
    console.log('Function 2 pressed');
  };

  const handleFunction3 = () => {
    // Function 3 logic goes here
    console.log('Function 3 pressed');
  };

  const handleFunction4 = () => {
    // Function 4 logic goes here
    navigation.navigate('Exercise');
    console.log('Function 4 pressed');
  };

  const handleFunction5 = () => {
    // Function 5 logic goes here
    navigation.navigate('ScreenBrightness');
    console.log('Function 5 pressed');
  };

  const handleFunction6 = () => {
    navigation.navigate('Break'); // Navigate to the BreakScreen
    console.log('Function 6 pressed');
  };

  return (
    <View style={styles.container}>

      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="bars" size={20} color="#32A055" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>👀{"\n"}EYEing<Text style={styles.title2}>아잉</Text></Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleFunction1}>
          <Text style={styles.emoji}>📚</Text>
          <Text style={styles.buttonText}>정보</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleFunction2}>
          <Text style={styles.emoji}>📏</Text>
          <Text style={styles.buttonText}>눈 건강 측정</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleFunction3}>
          <Text style={styles.emoji}>🖥</Text>
          <Text style={styles.buttonText}>모니터 사용</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleFunction4}>
          <Text style={styles.emoji}>💪</Text>
          <Text style={styles.buttonText}>눈 운동</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleFunction5}>
          <Text style={styles.emoji}>✨</Text>
          <Text style={styles.buttonText}>밝기/컬러 조정</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleFunction6}>
          <Text style={styles.emoji}>⏰</Text>
          <Text style={styles.buttonText}>휴식 알람</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen
          name="Break"
          component={BreakScreen}
        />
        <Stack.Screen
          name="ScreenBrightness"
          component={ScreenBrightness}
        />
        <Stack.Screen 
          name="Exercise" 
          component={Exercise} 
        />
        <Stack.Screen 
          name="EyeTest" 
          component={EyeTest} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
  title2: {
    flexDirection: 'row',
    color: '#32A055',
    fontSize: 24,
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
  },
  swiperContainer: {
    flex: 0,
  },
  swiperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  articleContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 100,
    width: 330,
    height: 550,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  articleTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  articleContent: {
    fontSize: 18,
    color: '#777',
    lineHeight: 24,
  },
});

