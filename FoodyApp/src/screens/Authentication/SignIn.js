import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SIZES, COLORS, icons } from '../../constants'
import { CustomSwitch, FormInput, SocialButton, TextButton } from '../../components'
import { authErrorMessageParser, utils } from "../../utils";
import AuthLayout from './AuthLayout'
import auth from '@react-native-firebase/auth'
import styles from '../../styles/Auth.style'
import { showMessage } from "react-native-flash-message";

const SignIn = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [saveMe, setSaveMe] = useState(false)
  const [loading, setLoading] = useState(false)
  function isEnableSignIn() {
    return email !== '' && password !== '' && emailError === ''
  }

  async function handleSignIn(){
    const userValues = {
      email: email,
      password: password
    }
    try {
      setLoading(true)
     await auth().signInWithEmailAndPassword(userValues.email, userValues.password);
     showMessage({
      message: "Login Success",
      backgroundColor: COLORS.green,
       icon: "success",
    });
    } catch (error) {
      showMessage({
        message: "Login Failed",
        description: authErrorMessageParser(error.code),
        backgroundColor: COLORS.red,
        icon: "danger",
      });
    } finally {
      setLoading(false);
    }


  }

  return (
    <AuthLayout title="Let's Sign You In" subtitle="Welcome back, you've been missed" >
      <View style={styles.signInContainer}>
        <FormInput label="Email" keyboardType='email-address' autoCompleteType='email' onChange={(value) => { utils.validateEmail(value, setEmailError); setEmail(value) }} errorMsg={emailError}
          appendComponent={
            <View style={styles.appendComponentMailContainer}>
              <Image source={email === "" || (email !== "" && emailError === "") ? icons.correct : icons.cancel} style={[styles.appendComponentMailIcon, { tintColor: email === "" ? COLORS.gray : (email !== "" && emailError === "") ? COLORS.green : COLORS.red }]} />
            </View>
          } />
        <FormInput label="Password" secureTextEntry={!showPassword} autoCompleteType='password' containerStyle={{ marginTop: SIZES.radius }} onChange={(value) => setPassword(value)}
          appendComponent={
            <TouchableOpacity style={styles.appendComponentPassContainer} onPress={() => setShowPassword(!showPassword)}>
              <Image source={showPassword ? icons.eye_close : icons.eye} style={styles.appendComponentPassIcon} />
            </TouchableOpacity>
          }
        />
        <View style={styles.saveMeContainer}>
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
          <TextButton label="Forgot Password?" buttonContainerStyle={styles.forgotPassButtonContainer} labelStyle={styles.forgotPassLabel} onPress={() => navigation.navigate('ForgotPassword')} />
        </View>
        <TextButton label="Sign In" loading={loading} disabled={!isEnableSignIn()} buttonContainerStyle={{ height: 55, alignItems: 'center', marginTop: SIZES.padding, borderRadius: SIZES.radius, backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary }} labelStyle={styles.signInButtonLabel} onPress={handleSignIn} />
        <View style={styles.redirectContainer}>
          <Text style={styles.redirectText}>Don't have an account? </Text>
          <TextButton label="Sign Up" loading={loading}  buttonContainerStyle={styles.redirectButtonContainer} labelStyle={styles.redirectButtonLabel} onPress={() => navigation.navigate('SignUp')} />
        </View>
        <View style={styles.socialButtonContainer}>
          <SocialButton icon={icons.fb}  iconStyle={styles.fbIconStyle} containerStyle={styles.fbButtonContainer} onPress={() => console.log('Facebook')} />
          <SocialButton icon={icons.google} iconStyle={styles.googleIconStyle} containerStyle={styles.googleButtonContainer} onPress={() => console.log('Google')} />
        </View>
      </View>
    </AuthLayout>
  )
}

export default SignIn
