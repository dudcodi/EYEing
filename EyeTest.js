import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, TextInput, Text } from 'react-native';

const EyeTest = () => {
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerChange = (text) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = text;
    setAnswers(updatedAnswers);
  };

const handleNextPress = () => {
  if (currentIndex < images.length - 1) {
    const currentAnswer = answers[currentIndex];
    const isCorrect =
      currentIndex === 6
        ? currentAnswer !== '5'
        : currentAnswer &&
          currentAnswer.toLowerCase() === correctAnswers[currentIndex].toLowerCase();
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    }
    setCurrentIndex(currentIndex + 1);
  } else {
    const lastAnswer = answers[answers.length - 1];
    const isLastAnswerCorrect =
      lastAnswer &&
      lastAnswer.toLowerCase() === correctAnswers[correctAnswers.length - 1].toLowerCase();
    if (isLastAnswerCorrect) {
      setCorrectCount(correctCount + 1);
    }
    setShowScore(true);
  }
};


  const handleRestart = () => {
    setAnswers([]);
    setCurrentIndex(0);
    setCorrectCount(0);
    setShowScore(false);
  };

  const images = [
    require('eyeing/color01.png'),
    require('eyeing/color02.png'),
    require('eyeing/color03.png'),
    require('eyeing/color04.png'),
    require('eyeing/color05.png'),
    require('eyeing/color08.png'),
    require('eyeing/color09.png'),
    require('eyeing/color10.png'),
  ];

  const correctAnswers = ['15', '5', '75', '8', '48', '7', 'answer9', '66'];

  return (
    <View style={styles.container}>
      {!showScore ? (
        <>
       <Text style={styles.correctCountText}>점수: {correctCount}점</Text>
          <Image source={images[currentIndex]} style={styles.image} />
          {answers[currentIndex] && (
            <Text style={styles.answerText}>나의 답: {answers[currentIndex]}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="정답은? -모르겠으면 아무 숫자나"
            onChangeText={handleAnswerChange}
            value={answers[currentIndex]}
          />
          <TouchableOpacity
          
            style={styles.button}
            onPress={handleNextPress}
            disabled={!answers[currentIndex]}
          >
            <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            Your score: {correctCount}/{images.length}
          </Text>
          <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
            <Text style={styles.restartButtonText}>Restart</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingVertical: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 0,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#32A055',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#32A055',
    marginBottom: 20,
  },
  correctCountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#32A055',
    marginTop: 0,
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#32A055',
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#32A055',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default EyeTest;
