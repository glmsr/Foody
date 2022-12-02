import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { FormInput, TextButton} from '../../components'
import { SIZES, COLORS, icons } from '../../constants'
import { utils } from '../../utils'
import AuthLayout from './AuthLayout'
import styles from '../../styles/Auth.style'

const ForgotPassword = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  function isEnableSendEmail() {
    return email != "" && emailError == ""
  }
  const handleSendEmail = () => {
    navigation.navigate("SignIn") //firebase bağlanınca reset password işlemleri burada yapılacak
  }

  return (
    <AuthLayout title="Password Recovery" subtitle="Please enter your email address to recover your password.">
      <View style={styles.forgotPasswordContainer}>
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <FormInput label="Email" keyboardType='email-address' autoCompleteType='email' onChange={(value) => { utils.validateEmail(value, setEmailError); setEmail(value) }} errorMsg={emailError}
            appendComponent={
              <View style={styles.appendComponentMailContainer}>
                <Image source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel} style={[styles.appendComponentMailIcon, { tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red }]} />
              </View>
            } />
        </View>
        <TextButton label="Send Email" disabled={isEnableSendEmail() ? false : true} buttonContainerStyle={{ height: 55, alignItems: 'center', marginTop: SIZES.padding, borderRadius: SIZES.radius, backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimary }} onPress={handleSendEmail} />
      </View>
    </AuthLayout>
  )
}

export default ForgotPassword