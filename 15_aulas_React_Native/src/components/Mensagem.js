import React from 'react';
import { TextInput } from 'react-native';

const Mensagem = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{ height: 100, width: '80%', borderColor: 'gray', borderWidth: 1 , color: 'black', borderRadius: 5, marginTop:10,}}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default Mensagem;