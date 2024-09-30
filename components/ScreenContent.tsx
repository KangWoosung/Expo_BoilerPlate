import { Pressable, Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';
import AppText from './Custom/AppText';
import { changeLanguage } from '~/utils/localization/helpers';
import i18n from '~/utils/localization/localize';
import CustomButton from './onboarding/CustomButton';
import { storage, THEMESTORAGEKEY } from '~/utils/storage';
import { useColorScheme } from 'nativewind';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {

const {colorScheme,setColorScheme} = useColorScheme()
  return (
    <>

      <CustomButton
        onPress={() => changeLanguage()}
        title='Change Language'
        ResponsiveFontSize={15}
      />
      <CustomButton
        onPress={() => {
          console.log('change theme')
          storage.set(THEMESTORAGEKEY, !storage.getBoolean(THEMESTORAGEKEY))
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }}
        title={colorScheme === 'dark' ? 'Light Theme' : 'Dark Theme'}
        ResponsiveFontSize={15}
      />
    </>
  );
};
const styles = {
  container: `items-center  justify-center bg-blue-400 my-4 h-[40px] w-full rounded-full`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
