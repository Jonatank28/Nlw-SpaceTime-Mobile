import { StatusBar } from 'react-native'
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native'
import luz from './src/assets/luz.png'
import Stripes from './src/assets/stripes.svg'
import Logo from './src/assets/logo.svg'
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { styled } from 'nativewind'

const StylesStripes = styled(Stripes)
const StylesLogo = styled(Logo)

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        BaiJamjuree_700Bold,
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <ImageBackground
            source={luz}
            imageStyle={{ position: 'absolute', left: '-100%' }}
            className="relative flex-1 justify-center items-center bg-gray-900 px-8 py-10"
        >
            <View className="flex-1 items-center justify-center gap-6">
                <StylesLogo />
                <View className="space-y-2">
                    <Text className="text-center font-title text-2xl leading-tight text-gray-50">
                        Sua cápsula do tempo
                    </Text>
                    <Text className="text-center font-body text-base leading-relaxed text-gray-100">
                        Colecione momentos marcantes da sua jornada e
                        compartilhe (se quiser) com o mundo!
                    </Text>
                </View>

                <TouchableOpacity
                    activeOpacity={0.7}
                    className="rounded-full bg-green-500 px-5 py-2"
                >
                    <Text className="font-alt text-sm uppercase text-black">
                        COMEÇAR A CADASTRAR
                    </Text>
                </TouchableOpacity>
            </View>
            <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
                Feito com 💜 no NLW da Rocketseat
            </Text>
            <StylesStripes className="absolute left-1" />
            <StatusBar style="ligth" translucent />
        </ImageBackground>
    )
}
