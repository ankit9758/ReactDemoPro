
import { StyleSheet } from "react-native"
import { green, white } from "./colors";

const stylesApp=StyleSheet.create({
    screenContainer: {
        flex: 1,
       justifyContent:"center",
      },
      appButtonContainer: {
        backgroundColor:green,
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
        color: green,
        fontWeight: "bold",
        alignSelf: 'flex-start',
      }
})

export default stylesApp;
