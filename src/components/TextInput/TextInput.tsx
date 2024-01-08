import React, {Dispatch, SetStateAction} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  KeyboardTypeOptions,
} from 'react-native';
import {colors, AppTheme, BaseStyle} from '../../config/cssConfig';
import Icon from 'react-native-vector-icons/Ionicons';

interface TextInputProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>> | {(): void};
  max?: number;
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
  error?: string;
  icon?: string;
}

export const TextField = (props: TextInputProps) => {
  const {label, type, kbType, value, max, setValue, error, icon, ...rest} =
    props;
  return (
    <View
      style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
      {icon && (
        <Icon
          style={{
            verticalAlign: 'bottom',
            marginRight: 10,
            marginBottom: 10,
          }}
          name={icon}
          size={30}
          color={AppTheme?.buttonPrimaryColor}
        />
      )}
      <View
        style={[
          styles.view,
          {borderBottomColor: error ? colors['state-error'] : ''},
        ]}>
        {value && (
          <Text style={[BaseStyle.label, error ? BaseStyle.error : {}]}>
            {label}
          </Text>
        )}
        <TextInput
          style={[BaseStyle.textFieldInput, error ? BaseStyle.error : {}]}
          textContentType={type}
          secureTextEntry={type === 'password' || type === 'newPassword'}
          keyboardType={kbType}
          placeholder={label}
          placeholderTextColor={
            error ? colors['state-error'] : AppTheme?.fontColor1
          }
          onChangeText={setValue}
          value={value}
          maxLength={max}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: '5%',
    width: '80%',
    height: 58,
    borderBottomColor: AppTheme?.fontColor2,
    borderBottomWidth: 1,
  },
});
