import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const TextInput = (props) => {
  const {
    placeholder = '',
    leftIcon,
    label = '',
    value = '',
    onChangeText,
    editable,
    secureTextEntry = false,
    rightIcon,
    type,
    isError = false,
    onError,
    onRightIconPress,
    onLefttIconPress,
    multiline,
    autoCapitalize
  } = props

  const _ref = useRef(null);
  const [stateColor, setStateColor] = useState(`gray`);
  const [error, setError] = useState({
    isError: false,
    message: '',
  });

  const [_type, setType] = useState({
    autoCompleteType: 'off',
    keyboardType: 'default',
    textContentType: 'none',
  });

  useEffect(() => {
    switch (type) {
      case 'email':
        setType({
          autoCompleteType: 'email',
          keyboardType: 'email-address',
          textContentType: 'emailAddress',
        });
        break;
      case 'number':
        setType({
          autoCompleteType: 'tel',
          keyboardType: 'number-pad',
          textContentType: 'telephoneNumber',
        });
        break;

      default:
        setType({
          autoCompleteType: 'off',
          keyboardType: 'default',
          textContentType: 'none',
        });
        break;
    }
  }, []);

  useEffect(() => {
    switch (type) {
      case 'email':
        if (value !== '' && value !== null) {
          if (
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              value,
            )
          ) {
            setError({
              isError: false,
              message: '',
            });
            onError && onError(false);
            setStateColor(`gray`);
          } else {
            onError && onError(true);
            setError({
              isError: true,
              message: 'No es un correo valido',
            });
            setStateColor('red');
          }
        }
        break;
      case 'password':
        if (value !== '' && value !== null) {
          if (String(value).length <= 7) {
            setError({
              isError: true,
              message: 'Minimo 8 caracteres',
            });
            onError && onError(true);
            setStateColor('red');
          } else {
            setError({
              isError: false,
              message: '',
            });
            onError && onError(false);
            setStateColor('gray');
          }
        }
        break;
      default:
        break;
    }
  }, [value]);

  useEffect(() => {
    if (isError) {
      setError({
        isError: true,
        message: 'Campo requerido',
      });
      onError && onError(isError);
      setStateColor('red');
    } else {
      setError({
        isError: false,
        message: '',
      });
      onError && onError(isError);
      setStateColor(`gray`);
    }
  }, [isError === true]);

  useEffect(() => {
    if (_ref?.current?.isFocused() || value) {
        setStateColor(`gray`);
    } else {
      //setStateColor(`${colors.text}80`);
    }
  }, [_ref?.current]);

  const styleInput = StyleSheet.create({
    style: {
      alignItems: 'center',
      color: stateColor,
    },
    containerStyle: {
      alignItems: 'center',
    },
    inputStyle: {
      color: stateColor,
      alignItems: 'center',
      textAlign: 'justify',
      paddingRight: 20,
    },
    leftIconContainerStyle: {
      marginLeft: 0,
    },
    inputContainerStyle: {
      height: multiline ? 200 : 40,
      width: '100%',
      marginTop: 10,
      textAlign: 'justify',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: stateColor,
    },
  });

  return (
    <Input
      placeholder={placeholder}
      autoCompleteType={_type.autoCompleteType}
      keyboardType={_type.keyboardType}
      textContentType={_type.textContentType}
      label={label}
      value={value}
      errorMessage={error.isError ? error.message : ''}
      onChangeText={onChangeText}
      autoCapitalize={!autoCapitalize ? "none" : "sentences"}
      editable={editable}
      secureTextEntry={secureTextEntry}
      multiline={multiline ? true : false}
      leftIcon={
        <Icons
          name={leftIcon}
          color={stateColor}
          size={25}
          style={{marginLeft: 10}}
          onPress={onLefttIconPress}
        />
      }
      rightIcon={
        <Icons
          name={rightIcon}
          color={stateColor}
          size={25}
          onPress={onRightIconPress}
        />
      }
      style={[styleInput.style]}
      labelStyle={[{color: stateColor}]}
      textAlignVertical="center"
      inputContainerStyle={styleInput.inputContainerStyle}
      selectionColor={'gray'}
      containerStyle={styleInput.containerStyle}
      inputStyle={[styleInput.inputStyle]}
      placeholderTextColor={stateColor}
      leftIconContainerStyle={styleInput.leftIconContainerStyle}
      errorStyle={{color: 'red'}}
      ref={_ref}
    />
  );
};
