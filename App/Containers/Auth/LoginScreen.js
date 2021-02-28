import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { 
  KeyboardAvoidingView, 
  TouchableOpacity,
  ScrollView, 
  StatusBar, 
  Image, 
  Text, 
  View,
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import Images from '../../Images'
import { Formik } from 'formik'
import * as Yup from 'yup'

// App Headers
import InputPassword from '../../Components/InputPassword'
import FullButton from '../../Components/FullButton'
import AppHeader from '../../Components/AppHeader'
import InputText from '../../Components/InputText'

// Styles
import styles from '../Styles/Auth/LoginScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

// Schema
const Schema = Yup.object().shape({
  email: Yup.string().required("Email Wajib Diisi").email('Format email tidak sama'),
  password: Yup.string().required('Wajib diisi').oneOf([Yup.ref('confirm')], "Password tidak sama").min(6, 'Minimal 6 karakter'),
  confirm: Yup.string().required('Wajib diisi').oneOf([Yup.ref('password')], "Password tidak sama").min(6, 'Minimal 6 karakter')
})

const LoginScreen = props => {

  const handleSubmit = ()=>{
    props.navigation.navigate('MainApp')
  }

  const renderForm = formProps =>{
    const { setFieldValue, errors, values } = formProps
    const setValue = useCallback(setFieldValue, [])
    const onSubmit = useCallback((e) => {formProps.handleSubmit(e)}, [])

    return(
      <KeyboardAvoidingView style={styles.keyBoard}>
        <InputText
          name="email"
          label="Masukan Email"
          errors={errors.email}
          value={values.email}
          setFieldValue={setValue}
          returnKeyType="next"
        />
        <InputPassword
          label="Password"
          name="password"
          value={values.password}
          errors={errors.password}
          setFieldValue={setValue}
          returnKeyType="next"
        />
        <InputPassword
          label="Konfirmasi Password"
          name="confirm"
          value={values.confirm}
          errors={errors.confirm}
          setFieldValue={setValue}
          returnKeyType="next"
        />
        <FullButton style={styles.button} onPress={onSubmit}>
          <Text style={styles.label}>Login Cashier</Text>
        </FullButton>
      </KeyboardAvoidingView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppHeader
        left={<View style={styles.left}>
          <TouchableOpacity activeOpacity={0.9} style={styles.btnBack} onPress={()=> props.navigation.goBack()}>
            <Image source={Images.IcBack} style={styles.icons}/>
            <Text style={styles.labelLogin}>Login</Text>
          </TouchableOpacity>
        </View>}
      />
      <ScrollView>
        <View style={apply("p-4")}>
          <Text style={styles.title}>Selamat Datang Di Cashier Cash</Text>
          <Text style={styles.childTitle}>Rasakan kemudahan memanagge kebutuhan cashiermu di   <Text style={apply("font-medium")}>Cashier Cash</Text></Text>
        </View>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={Schema}
          initialValues={{
            email: '',
            password: '',
            confirm: '',
          }}>
            {formProps => renderForm(formProps)}
        </Formik>
        <View style={styles.middle}>
          <View style={styles.line} />
          <Text style={styles.or}>Atau</Text>
        </View>
        <View style={apply("px-4")}>
          <TouchableOpacity style={styles.btnSosmed} activeOpacity={0.9}>
            <Image source={Images.IcGoogle} style={styles.icons}/>
            <Text style={styles.loginWith}>Daftar Dengan Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSosmed} activeOpacity={0.9}>
            <Image source={Images.IcFacebook} style={styles.icons}/>
            <Text style={styles.loginWith}>Daftar Dengan Google</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.noHaveAccount}>Belum Punya Akun ? <Text style={apply("font-medium")} onPress={()=> props.navigation.navigate('Register') }>Register</Text></Text>
        <Text style={styles.privacy}>Dengan masuk atau mendaftar, berarti kamu menyutujui <Text style={apply("font-medium")}>Syarat Ketentuan</Text> dan <Text style={apply("font-medium")}>Kebijakan Privasi</Text></Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
