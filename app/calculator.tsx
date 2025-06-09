import React, { useState } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setDisplayValue('0');
    setStoredValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
      return;
    }

    if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(displayValue);

    if (storedValue === null) {
      setStoredValue(inputValue);
    } else if (operation) {
      const currentValue = storedValue || 0;
      let newValue = 0;

      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '×':
          newValue = currentValue * inputValue;
          break;
        case '÷':
          newValue = currentValue / inputValue;
          break;
        default:
          break;
      }

      setStoredValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    if (!operation || storedValue === null) return;

    performOperation(null);
  };

  const toggleSign = () => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(String(newValue));
  };

  const percentage = () => {
    const newValue = parseFloat(displayValue) / 100;
    setDisplayValue(String(newValue));
  };

  const Button = ({ onPress, text, style, textStyle }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
          {displayValue}
        </Text>
      </View>

      <View style={styles.row}>
        <Button text="AC" onPress={clearAll} style={styles.functionButton} />
        <Button text="+/-" onPress={toggleSign} style={styles.functionButton} />
        <Button text="%" onPress={percentage} style={styles.functionButton} />
        <Button text="÷" onPress={() => performOperation('÷')} style={styles.operationButton} />
      </View>

      <View style={styles.row}>
        <Button text="7" onPress={() => inputDigit(7)} style={styles.numberButton} />
        <Button text="8" onPress={() => inputDigit(8)} style={styles.numberButton} />
        <Button text="9" onPress={() => inputDigit(9)} style={styles.numberButton} />
        <Button text="×" onPress={() => performOperation('×')} style={styles.operationButton} />
      </View>

      <View style={styles.row}>
        <Button text="4" onPress={() => inputDigit(4)} style={styles.numberButton} />
        <Button text="5" onPress={() => inputDigit(5)} style={styles.numberButton} />
        <Button text="6" onPress={() => inputDigit(6)} style={styles.numberButton} />
        <Button text="-" onPress={() => performOperation('-')} style={styles.operationButton} />
      </View>

      <View style={styles.row}>
        <Button text="1" onPress={() => inputDigit(1)} style={styles.numberButton} />
        <Button text="2" onPress={() => inputDigit(2)} style={styles.numberButton} />
        <Button text="3" onPress={() => inputDigit(3)} style={styles.numberButton} />
        <Button text="+" onPress={() => performOperation('+')} style={styles.operationButton} />
      </View>

      <View style={styles.row}>
        <Button text="0" onPress={() => inputDigit(0)} style={styles.zeroButton} />
        <Button text="." onPress={inputDot} style={styles.numberButton} />
        <Button text="=" onPress={handleEquals} style={styles.operationButton} />
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');
const buttonSize = width / 4 - 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    paddingBottom:40
  },
  display: {
    padding: 20,
    alignItems: 'flex-end',
  },
  displayText: {
    color: '#fff',
    fontSize: 64,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
  },
  numberButton: {
    backgroundColor: '#333',
  },
  zeroButton: {
    width: buttonSize * 2 + 10,
    borderRadius: buttonSize / 2,
    paddingLeft: buttonSize / 2 + 5,
    alignItems: 'flex-start',
    backgroundColor: '#333',
  },
  functionButton: {
    backgroundColor: '#a5a5a5',
  },
  operationButton: {
    backgroundColor: '#ff9500',
  },
});

export default Calculator;
