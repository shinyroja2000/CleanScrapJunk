const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",

  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "500",
    marginTop: 30,
    marginBottom: 30,
    textAlign: "left",
    color: "black",
    fontWeight: "800"
  },
  loginFormView: {
    flex: 1,


  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 10,

  },
  loginButton: {
    backgroundColor: "#000080",
    borderRadius: 20,
    height: 45,
    marginTop: 10,

    width: 320,
    alignItems: "center"
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  eyeIconContainer1: {
    position: 'absolute',
    top: 290,
    right: 20,
  },
  eyeIconContainer2: {
    position: 'absolute',
    top: 375,
    right: 20,
  },
  label_text: {
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 4
  },
});
export default styles;