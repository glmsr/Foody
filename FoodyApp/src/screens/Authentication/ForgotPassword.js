import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { FormInput, TextButton} from '../../components'
import { SIZES, COLORS, icons } from '../../constants'
import { authErrorMessageParser, utils } from "../../utils";
import { showMessage } from "react-native-flash-message";
import AuthLayout from './AuthLayout'
import auth from '@react-native-firebase/auth'
import styles from '../../styles/Auth.style'

const ForgotPassword = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [loading, setLoading] = useState(false)

  function isEnableSendEmail() {
    return email !== "" && emailError === ""
  }

  async function handleSendEmail() {
    setLoading(true)
    await auth().sendPasswordResetEmail(email)
      .then(() => {
        showMessage({
          message: "Email sent",
          description: "Please go to your email to reset your password",
          backgroundColor: COLORS.green,
          icon: "success",
        });
        navigation.navigate('SignIn')
      })
      .catch(error => {
        showMessage({
          message: "Error",
          description: authErrorMessageParser(error.code),
          backgroundColor: COLORS.red,
          icon: "danger",
        });
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <AuthLayout title="Password Recovery" subtitle="Please enter your email address to recover your password.">
      <View style={styles.forgotPasswordContainer}>
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <FormInput label="Email" keyboardType='email-address' autoCompleteType='email' onChange={(value) => { utils.validateEmail(value, setEmailError); setEmail(value) }} errorMsg={emailError}
            appendComponent={
              <View style={styles.appendComponentMailContainer}>
                <Image source={email === "" || (email !== "" && emailError === "") ? icons.correct : icons.cancel} style={[styles.appendComponentMailIcon, { tintColor: email === "" ? COLORS.gray : (email !== "" && emailError === "") ? COLORS.green : COLORS.red }]} />
              </View>
            } />
        </View>
        <TextButton label="Send Email" loading={loading} disabled={!isEnableSendEmail()} buttonContainerStyle={{ height: 55, alignItems: 'center', marginTop: SIZES.padding, borderRadius: SIZES.radius, backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimary }} onPress={handleSendEmail} />
      </View>
    </AuthLayout>
  )
}

export default ForgotPassword
