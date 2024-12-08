import * as RNLocalize from 'react-native-localize';
import i18n, { setLocale, getLocale } from './localize';
import RESERT from 'react-native-restart';
import { I18nManager } from 'react-native';
import { router, useRootNavigationState } from 'expo-router';
// import useSplashHook from "~/hooks/splash/useSplashHook";
import RNRESTART from 'react-native-restart';
import { storage } from '../storage';
// This function will be called from your components
export function changeLanguage() {
  const currentLanguage = i18n.locale;
  const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';

  setLocale(newLanguage);
  // The line below is not necessary as setLocale already sets i18n.locale
  // i18n.locale = languageCode;
  RESERT.restart();
  console.log('Language changed to:', newLanguage);

  // Instead of restarting the app, we'll return the new locale
  // so that the calling component can update its state
  return newLanguage;
}

// This function can be used to initialize the language when your app starts
export function initializeLanguage() {
  const currentLocale = getLocale();
  i18n.locale = currentLocale;
  const isRTL = currentLocale === 'ar'; //false
  console.log('the hlper is REf', isRTL, I18nManager.isRTL);
  const hasSetRTL = storage.getString('hasSetRTL');

  if (!hasSetRTL || hasSetRTL !== currentLocale) {
    I18nManager.forceRTL(isRTL);
    I18nManager.allowRTL(isRTL);
    storage.set('hasSetRTL', currentLocale);
    RNRESTART.restart();
  }

  return currentLocale;
}
