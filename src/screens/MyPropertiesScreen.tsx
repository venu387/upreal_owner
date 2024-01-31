import {AppButton} from '@upreal/components/AppButton/AppButton';
import {Typography} from '@upreal/components/Typography';
import {AppTheme, BaseStyle} from '@upreal/config/cssConfig';
import {useAppDispatch} from '@upreal/store/hooks';
import {logout} from '@upreal/store/slices/authSlice';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import {IconType} from '@upreal/config/config.types';

type Property = {
  id: string;
  name: string;
  address: string;
  units: [];
  totalIncome: number;
  image: string;
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
    name: 'Property Name',
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
  <View style={[styles.item, styles.elevation]}>
    <Image
      style={styles.image}
      source={require('@upreal/assets/images/villa_1.jpg')}
    />
    <Typography variant={'h6'}>{item.name}</Typography>

    <Typography variant={'subtitle-4'}>{item.address}</Typography>
    <Typography variant={'subtitle-2'}>
      Monthly Income:{item.totalIncome}
    </Typography>
    <Typography variant={'subtitle-2'}>Vacant Units:</Typography>
    <Typography variant={'subtitle-2'}>Expired Leases:</Typography>
    <Typography variant={'subtitle-2'}>Needs Renewal Soon:</Typography>
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

      <View style={{marginTop: 5, width: '100%'}}>
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
    marginHorizontal: 15,
    borderRadius: 10,
    borderColor: AppTheme?.fontColor1,
    backgroundColor: 'white',
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: '3%',
    resizeMode: 'cover',
    height: 180,
    width: 380,
  },
  elevation: {
    shadowColor: '#21130d',
    elevation: 20,
  },
});

export default MyPropertiesScreen;
