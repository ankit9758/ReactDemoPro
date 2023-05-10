
import { StyleSheet } from "react-native"
import { black, green, white } from "./colors";

const stylesApp=StyleSheet.create({
    screenContainer: {
        flex: 1,
      
      },
      appButtonContainer: {
        justifyContent:'center',
        alignContent:'center',
        flexDirection:"row",
        elevation: 8,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical:10

      },
      appButtonText: {
        fontSize: 18,
        color: white,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      appTextBold64: {
        fontSize: 64,
        color: white,
        fontWeight: "bold",
        alignSelf: 'flex-start',
      },
      appButton: {
        padding: 12,
      },
      appTextBold40: {
        fontSize: 40,
        color: black,
        fontWeight: "bold",
      
      },
      appTextBold20: {
        fontSize: 20,
        color: black,
        fontWeight: "bold",
      
      },
})

export default stylesApp;
