import { NativeModules } from 'react-native';

type DatSdkType = {
  multiply(a: number, b: number): Promise<number>;
};

const { DatSdk } = NativeModules;

export default DatSdk as DatSdkType;
