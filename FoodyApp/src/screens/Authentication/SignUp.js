import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FormInput, SocialButton, TextButton } from '../../components'
import { SIZES, COLORS, icons } from '../../constants'
import { utils } from '../../utils'
import AuthLayout from './AuthLayout'
import styles from '../../styles/Auth.style'

const SignUp = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  function isEnableSignUp() {
    return email != '' && username != '' && password != '' && emailError == '' && usernameError == '' && passwordError == ''
  }
  const handleSignUp = () => {
    navigation.navigate('SignIn') //firebase bağlanınca register işlemleri burada yapılacak
  }

  return (
    <AuthLayout title="Getting Started" subtitle="Create an account to continue!" titleContainerStyle={{ marginTop: SIZES.radius }}>
      <View style={styles.signUpContainer}>
        <FormInput label="Email" keyboardType='email-address' autoCompleteType='email' onChange={(value) => { utils.validateEmail(value, setEmailError); setEmail(value) }} errorMsg={emailError}
          appendComponent={
            <View style={styles.appendComponentMailContainer}>
              <Image source={email == '' || (email != '' && emailError == '') ? icons.correct : icons.cross} style={[styles.appendComponentMailIcon, { tintColor: email == '' || (email != '' && emailError == '') ? COLORS.green : COLORS.red }]} />
            </View>
          }
        />
        <FormInput label="Username" containerStyle={styles.formInputContainer} onChange={(value) => { setUsername(value) }} errorMsg={usernameError}
          appendComponent={
            <View style={styles.appendComponentMailContainer}>
              <Image source={username == '' || (username != '' && usernameError == '') ? icons.correct : icons.cross} style={[styles.appendComponentMailIcon, { tintColor: username == '' ? COLORS.gray : (username != '' && usernameError == '') ? COLORS.green : COLORS.red }]} />
            </View>
          }
        />
        <FormInput label="Password" secureTextEntry={!showPassword} autoCompleteType='password' containerStyle={{ marginTop: SIZES.radius }} onChange={(value) => { utils.validatePassword(value, setPasswordError); setPassword(value) }} errorMsg={passwordError}
          appendComponent={
            <TouchableOpacity style={styles.appendComponentPassContainer} onPress={() => setShowPassword(!showPassword)}>
              <Image source={showPassword ? icons.eye_close : icons.eye} style={styles.appendComponentPassIcon} />
            </TouchableOpacity>
          }
        />
        <TextButton label="Sign Up" disabled={isEnableSignUp() ? true : false} buttonContainerStyle={{ height: 55, alignItems: 'center', marginTop: SIZES.padding, borderRadius: SIZES.radius, backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary }} onPress={handleSignUp} />
        <View style={styles.redirectContainer} >
          <Text style={styles.redirectText}>Already have an account?</Text>
          <TextButton label="Sign In" buttonContainerStyle={styles.redirectButtonContainer} labelStyle={styles.redirectButtonLabel} onPress={() => navigation.navigate('SignIn')} />
        </View>
        <View style={styles.socialButtonContainer}>
          <SocialButton icon={icons.fb} iconStyle={styles.fbIconStyle} containerStyle={styles.fbButtonContainer} onPress={() => console.log('Facebook')} />
          <SocialButton icon={icons.google} iconStyle={styles.googleIconStyle} containerStyle={styles.googleButtonContainer} onPress={() => console.log('Google')} />
        </View>
      </View>
    </AuthLayout>
  )
}

export default SignUp