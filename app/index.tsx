import { useFonts } from "expo-font";
import { Redirect, SplashScreen } from "expo-router";
import { ONBOARDINGSTORGAGEKEY, storage } from "~/utils/storage";
import AnimatedSplashScreen from "./animatedSplash";
import useSplashHook from "~/hooks/splash/useSplashHook";
import { useEffect, useState } from "react";
import { initializeLanguage } from "~/utils/localization/helpers";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "~/constants/Colors";
import { useLoading } from "~/context/LoadingContext";

SplashScreen.preventAutoHideAsync()

const Index = () => {
  const [showAnimatedSplash, setShowAnimatedSplash] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const UserSeeOnboarding = storage.getBoolean(ONBOARDINGSTORGAGEKEY)
  const { setIsLoading} = useLoading()
  const ready = useSplashHook()
  const [loaded] = useFonts({
    ElMessiriBold: require('../assets/fonts/El_Messiri/ElMessiri-Bold.ttf'),
    ElMessiriMedium: require('../assets/fonts/El_Messiri/ElMessiri-Medium.ttf'),
    ElMessiriRegular: require('../assets/fonts/El_Messiri/ElMessiri-Regular.ttf'),
    ElMessiriSemiBold: require('../assets/fonts/El_Messiri/ElMessiri-SemiBold.ttf'),
  });

  useEffect(() => {
    SplashScreen.hideAsync()
    if (ready && loaded) {
        setShowAnimatedSplash(true);
        setAnimationFinished(true);
        setIsLoading(true)

    }
  }, [ready, loaded])

  const handleAnimationFinish = () => {
    setAnimationFinished(false);
    console.log('handle finxish animated')
  };
  
    if (!ready && !loaded) {
    return (
      <AnimatedSplashScreen/>
    );
  }

  if (showAnimatedSplash && !animationFinished) {
    return <AnimatedSplashScreen onAnimationFinish={handleAnimationFinish} />;
  }

  if (animationFinished) {
    if (!UserSeeOnboarding) {
      console.log('redirecting to onboarding', UserSeeOnboarding)
      return <Redirect href="/onboarding" />;
    } else {
      console.log('redirecting to tabs', UserSeeOnboarding)
      return <Redirect href="/(tabs)" />;
    }
  }

 return <AnimatedSplashScreen/>
};

export default Index;