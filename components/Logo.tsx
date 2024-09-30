import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeLogoSvg from '~/assets/home/Svg/LogoSvg'

type Props = {}

const Logo = (props: Props) => {
        return (
            <View className='mt-2 mb-4 flex justify-center items-center'>
                <HomeLogoSvg />
            </View>
        )
    
}

export default Logo

const styles = StyleSheet.create({})