import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  KeyboardTypeOptions,
} from 'react-native';
import {AppTheme} from '../../config/config';

interface TextInputProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>> | {(): void};
  type:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'creditCardExpiration'
    | 'creditCardExpirationMonth'
    | 'creditCardExpirationYear'
    | 'creditCardSecurityCode'
    | 'creditCardType'
    | 'creditCardName'
    | 'creditCardGivenName'
    | 'creditCardMiddleName'
    | 'creditCardFamilyName'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | 'birthdate'
    | 'birthdateDay'
    | 'birthdateMonth'
    | 'birthdateYear'
    | undefined;
  kbType: KeyboardTypeOptions | undefined;
}

export const TextField = (props: TextInputProps) => {
  const {label, type, kbType, value, setValue} = props;
  return (
    <View style={styles.view}>
      {value && <Text>{label}</Text>}
      <TextInput
        style={styles.textInput}
        textContentType={type}
        secureTextEntry={type === 'password' || type === 'newPassword'}
        keyboardType={kbType}
        placeholder={label}
        onChangeText={setValue}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
  },
  view: {
    marginTop: '5%',
    width: '90%',
    height: 58,
    borderBottomColor: AppTheme?.fontColor1,
    borderBottomWidth: 1,
  },
});
