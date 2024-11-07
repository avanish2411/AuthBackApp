import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'


const { width, height } = Dimensions.get('window');

const Login = () => {
    useWarmUpBrowser()
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
                redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
            })

            if (createdSessionId) {
                // setActive({ session: createdSessionId })
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error('OAuth error', err)
        }
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('./../../assets/images/leaf.jpg')}
                style={styles.splashImage}
                contentFit="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <TouchableOpacity onPress={onPress} style={styles.signInButton}>
                    <Text style={styles.signInText}>Sign in with Google</Text>
                </TouchableOpacity>
                {/* <Text style={styles.noThanksText}>No, Thanks</Text> */}
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage: {
        width: '100%',
        height: height * 0.75,
    },
    textContainer: {
        backgroundColor: '#F5F5DC',
        width: '100%',
        height: height * 0.25,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 18,
    },
    welcomeText: {
        fontSize: width * 0.09,
        fontWeight: '800',
    },
    signInButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        padding: width * 0.04,
        marginTop: 20,
        borderRadius: 15,
    },
    signInText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '600',
    },
    noThanksText: {
        alignSelf: 'center',
        padding: 10,
        fontSize: width * 0.04,
        fontWeight: '400',
    },
});

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
        void WebBrowser.warmUpAsync()
        return () => {
            void WebBrowser.coolDownAsync()
        }
    }, [])
}

WebBrowser.maybeCompleteAuthSession()