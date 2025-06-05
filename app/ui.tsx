// App.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [isDark, setIsDark] = useState(true);

  const handlePress = (val) => {
    if (val === 'C') {
      setExpression('');
      setResult('');
    } else if (val === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else if (val === '=') {
      try {
        // Replace functions for evaluation
        const safeExpr = expression
          .replace(/sin/g, 'Math.sin')
          .replace(/cos/g, 'Math.cos')
          .replace(/tan/g, 'Math.tan')
          .replace(/log/g, 'Math.log10')
          .replace(/ln/g, 'Math.log')
          .replace(/√/g, 'Math.sqrt')
          .replace(/\^/g, '**');
        const evalResult = eval(safeExpr);
        setResult(evalResult.toString());
      } catch {
        setResult('Error');
      }
    } else {
      setExpression(expression + val);
    }
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const scientific = ['sin(', 'cos(', 'tan(', 'log(', 'ln(', '√(', '^'];
  const basic = [
    ['C', 'DEL', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.', '(' , ')'],
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <View style={styles.toggleRow}>
        <Text style={styles.themeText}>{isDark ? 'Dark' : 'Light'} Mode</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>

      <View style={styles.display}>
        <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.expression}>{expression}</Text>
        </ScrollView>
        <Text style={styles.result}>{result}</Text>
      </View>

      <ScrollView style={styles.buttons}>
        <View style={styles.row}>
          {scientific.map((btn) => (
            <TouchableOpacity
              key={btn}
              style={styles.button}
              onPress={() => handlePress(btn)}
            >
              <Text style={styles.buttonText}>{btn}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {basic.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  ['C', 'DEL', '=', '/', '*', '+', '-'].includes(btn)
                    ? styles.operator
                    : null,
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const darkTheme = {
  bg: '#121212',
  displayBg: '#1e1e1e',
  text: '#fff',
  button: '#2e2e2e',
  operator: '#ff9500',
};

const lightTheme = {
  bg: '#f0f0f0',
  displayBg: '#ffffff',
  text: '#000',
  button: '#ddd',
  operator: '#007aff',
};

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bg,
      paddingTop: 25,
    },
    toggleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    themeText: {
      color: theme.text,
      fontSize: 16,
    },
    display: {
      backgroundColor: theme.displayBg,
      paddingBottom: 50,
      alignItems: 'flex-end',
    },
    expression: {
      fontSize: 28,
      color: theme.text,
      minHeight: 40,
    },
    result: {
      fontSize: 36,
      color: theme.text,
      fontWeight: 'bold',
    },
    buttons: {
      marginTop: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 6,
    },
    button: {
      backgroundColor: theme.button,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
      borderRadius: 32,
      paddingVertical: 18,
    },
    operator: {
      backgroundColor: theme.operator,
    },
    buttonText: {
      fontSize: 20,
      color: theme.text,
    },
  });