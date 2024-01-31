import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  KeyboardTypeOptions,
} from 'react-native';
import {colors, AppTheme, BaseStyle} from '@upreal/config/cssConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconSize, IconType} from '@upreal/config/config.types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {UpRealIcon} from '@upreal/components/UpRealIcon/UpRealIcon';

export type TextInputProps = {
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
  icon?: {name: string; type: IconType};
};

export const TextField = (props: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {label, type, kbType, value, max, setValue, error, icon, ...rest} =
    props;
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 5,
      }}>
      {icon && (
        <>
          <UpRealIcon
            style={{
              verticalAlign: 'bottom',
              marginRight: 10,
              marginBottom: 12,
            }}
            name={icon.name}
            size={IconSize.small}
            color={AppTheme?.buttonPrimaryColor}
            type={icon.type}
          />
        </>
      )}
      <View
        style={[
          styles.view,
          {
            paddingBottom: value?.length > 0 ? 8 : 0,
            borderBottomColor: error
              ? colors['state-error']
              : colors['slate-500'],
          },
        ]}>
        {value && (
          <Text
            style={[
              BaseStyle.label,
              BaseStyle.bold,
              error ? BaseStyle.error : {},
            ]}>
            {label}
          </Text>
        )}
        <TextInput
          style={[BaseStyle.textFieldInput, error ? BaseStyle.error : {}]}
          textContentType={type}
          secureTextEntry={
            !showPassword && (type === 'password' || type === 'newPassword')
          }
          keyboardType={kbType}
          placeholder={label}
          placeholderTextColor={
            error ? colors['state-error'] : AppTheme?.fontColor1
          }
          onChangeText={setValue}
          value={value}
          maxLength={max}
        />
        {(type === 'password' || type === 'newPassword') && (
          <Icon
            onPress={() => setShowPassword(!showPassword)}
            name={showPassword ? 'eye' : 'eye-off'}
            size={IconSize.small}
            color={AppTheme?.buttonPrimaryColor}
            style={{position: 'absolute', right: 0, marginTop: 10}}></Icon>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: '5%',
    width: '80%',
    height: 50,
    borderBottomColor: AppTheme?.fontColor2,
    borderBottomWidth: 1,
  },
});
