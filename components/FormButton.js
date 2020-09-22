import React from 'react';
import { StyleSheet, Dimensions ,Button} from 'react-native';

const { width, height } = Dimensions.get('screen');

export default function FormButton({ title, modeValue, ...rest }) {
  return (
    <Button
      mode={modeValue}
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}
      title={title}
    />

  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  },
  buttonContainer: {
    width: width / 2,
    height: height / 15
  }
});
