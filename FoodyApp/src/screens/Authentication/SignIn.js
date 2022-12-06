import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SIZES, COLORS, icons } from '../../constants'
import { CustomSwitch, FormInput, SocialButton, TextButton } from '../../components'
import { utils } from '../../utils'
import AuthLayout from './AuthLayout'
import styles from '../../styles/Auth.style'

const SignIn = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [saveMe, setSaveMe] = useState(false)

  function isEnableSignIn() {
    return email != '' && password != '' && emailError == ''
  }

  const handleSignIn = () => {
    navigation.navigate('Home') //firebase bağlanınca login işlemleri burada yapılacak
  }

  return (
    <AuthLayout title="Let's Sign You In" subtitle="Welcome back, you've been missed" >
      <View style={styles.signInContainer}>
        <FormInput label="Email" keyboardType='email-address' autoCompleteType='email' onChange={(value) => { utils.validateEmail(value, setEmailError); setEmail(value) }} errorMsg={emailError}
          appendComponent={
            <View style={styles.appendComponentMailContainer}>
              <Image source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel} style={[styles.appendComponentMailIcon, { tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red }]} />
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
        <TextButton label="Sign In" disabled={isEnableSignIn() ? false : true} buttonContainerStyle={{ height: 55, alignItems: 'center', marginTop: SIZES.padding, borderRadius: SIZES.radius, backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary }} labelStyle={styles.signInButtonLabel} onPress={handleSignIn} />
        <View style={styles.redirectContainer}>
          <Text style={styles.redirectText}>Don't have an account? </Text>
          <TextButton label="Sign Up" buttonContainerStyle={styles.redirectButtonContainer} labelStyle={styles.redirectButtonLabel} onPress={() => navigation.navigate('SignUp')} />
        </View>
        <View style={styles.socialButtonContainer}>
          <SocialButton icon={icons.fb} iconStyle={styles.fbIconStyle} containerStyle={styles.fbButtonContainer} onPress={() => console.log('Facebook')} />
          <SocialButton icon={icons.google} iconStyle={styles.googleIconStyle} containerStyle={styles.googleButtonContainer} onPress={() => console.log('Google')} />
        </View>
      </View>
    </AuthLayout>
  )
}

export default SignIn