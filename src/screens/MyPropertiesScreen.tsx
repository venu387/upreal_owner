import {AppButton} from '@upreal/components/AppButton/AppButton';
import {Typography} from '@upreal/components/Typography';
import {AppTheme, BaseStyle} from '@upreal/config/cssConfig';
import {useAppDispatch} from '@upreal/store/hooks';
import {logout} from '@upreal/store/slices/authSlice';
import React from 'react';
import {FlatList, SafeAreaView, View, StyleSheet, Button} from 'react-native';
import {v4 as uuidv4} from 'uuid';

type Property = {
  id: string;
  name: string;
  address: string;
  units: [];
  totalIncome: number;
};
type Unit = {
  unitNumber: string;
  income: number;
  currency: string;
  leaseType: LeaseType;
};

enum LeaseType {
  monthly = 1,
  yearly = 2,
}

const properties = [
  {
    name: '1000 Main St',
    address: '1000 Main St, Bangalore, Karnataka 560001',
    units: [
      {
        unitNumber: '101',
        income: 1000000,
        currency: 'INR',
        leaseType: 'yearly',
      } as unknown as Unit,
      {
        unitNumber: '201',
        income: 20000,
        currency: 'INR',
        leaseType: 'monthly',
      } as unknown as Unit,
    ],
    totalIncome: 20000,
  } as unknown as Property,
] as unknown as Property[];

type PropertyProps = {item: Property};

const PropertyItem = ({item}: PropertyProps) => (
  <View style={styles.item}>
    <Typography variant={'h5'}>{item.name}</Typography>
    <Typography variant={'subtitle-1'}>{item.address}</Typography>
  </View>
);

const MyPropertiesScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={properties}
        renderItem={({item}) => <PropertyItem item={item} />}
        keyExtractor={item => item.address}
      />

      <View style={{marginTop: 40, width: '100%'}}>
        <AppButton
          title={'Sign out'}
          onPress={() => dispatch(logout())}
          buttonStyles={BaseStyle.primaryButton}
          textStyles={BaseStyle.fontColorSecondary}></AppButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },
  item: {
    //width: '100%',
    //alignItems: 'center',
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: AppTheme?.fontColor1,
    padding: 10,
  },
});

export default MyPropertiesScreen;
