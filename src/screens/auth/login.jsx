import React from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

const Login = () => {

    const handleLogin = () => {
        Alert.alert("Logicloom", 'Subscribe for more')
    }
    const handleRegister = () => {}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
            <Text style={styles.title}>Sign in to your Account</Text>
            <Text style={styles.subtitle}>Sign in to your Account</Text>
        </View>
        <View style={styles.logoContainer}>
            <Image source={require("../../../assets/logo.png")} style={styles.logo}/>
        </View>
      </View>
      <View style={styles.form}>
        <View>
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder='logicloom@gmail.com' placeholderTextColor='#000' style={styles.input} />
        </View>
        <View>
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder='********' placeholderTextColor='#000' secureTextEntry style={styles.input} />
        </View>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>
        <View style={styles.loginButtonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.divider}>
            <View style={styles.dividerLine}/>
            <Text>Or login with</Text>
            <View style={styles.dividerLine}/>
        </View>
        <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="google" size={16} />
                <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="facebook-square" size={16} />
                <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <Text>Don't have an account? <Text style={{color: '#7AA629'}} onPress={handleRegister}>Register</Text></Text>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: '20%',
        minHeight: 200,
        backgroundColor: '#1E2B37',
        paddingTop: 40,
        paddingBottom: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    headerTextContainer: {
        flex: 1
    },
    title: {
        fontSize: 36,
        color: '#fff',
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#ccc'
    },
    logoContainer: {
        minWidth: 100
    },
    logo: {
        width: 100,
        height: 100,
        objectFit: 'fill'
    },
    form: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 40,
        gap: 12
    },
    label: {
        fontSize: 14,
        color: '#AFB8BE',
        marginBottom: 4
    },
    input: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#ccc',
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 8,
        lineHeight: 0
    },
    forgotPassword: {
        color: '#7AA629',
        alignSelf: 'flex-end'
    },
    loginButtonContainer: {
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: 20,
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#C1E866',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    divider: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 8
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc'
    },
    socialLoginContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 20
    },
    socialButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 12,
        gap: 4
    },
    socialButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#636970'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 32,
        paddingVertical: 16
    }
})