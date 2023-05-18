
import { StyleSheet } from "react-native"
import { black, green, white } from "./colors";


const stylesApp = StyleSheet.create({
  screenContainer: {
    flex: 1,

  },
  appButtonContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: "row",
    elevation: 8,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,



  },
  appButtonText: {
    fontSize: 18,
    color: white,
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: 'Raleway-ExtraBold'
  },
  appTextBold64: {
    fontSize: 64,
    color: white,
    alignSelf: 'flex-start',
    fontFamily: 'Raleway-Black'

  },
  appButton: {
    padding: 12,
  },
  appTextBold40: {
    fontSize: 40,
    color: black,
    fontFamily: 'Raleway-Medium'


  },
  appTextBold20: {
    fontSize: 20,
    color: black,
    fontFamily: 'Raleway-Regular'

  },
  appTextBold16: {
    fontSize: 16,
    color: black,
    fontFamily: 'Raleway-SemiBold'

  },

  title: {
    fontSize: 22,
    color: black,
    marginTop: 20,
    color: white,
    fontFamily: 'Raleway-Black',
    textAlign: 'center',
    justifyContent:'center'
  },
  subTitle: {
    fontSize: 13,
    color: black,
    marginTop: 10,
    color: white,
    fontFamily: 'Raleway-Medium',
    textAlign: 'center',
    maxWidth: '70%',
    justifyContent:'center'

  },
  indicator: {
    height: 2.5,
    width: 10,
    borderRadius: 2,
    marginHorizontal: 3,
    backgroundColor: 'grey'

  },
  btn: {
    height: 50,
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    justifyContent:'center'


  },

})

export default stylesApp;
