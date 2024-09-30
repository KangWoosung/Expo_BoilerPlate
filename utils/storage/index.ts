import { MMKV } from "react-native-mmkv";

const  ONBOARDINGSTORGAGEKEY = 'onboardingStorageKey'
const THEMESTORAGEKEY = 'themeStorageKey'
export const storage = new MMKV();

export {
    ONBOARDINGSTORGAGEKEY,
    THEMESTORAGEKEY
}