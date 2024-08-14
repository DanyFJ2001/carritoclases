import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

//Gestionar los estilos
export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    },
    titleHeaderBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    textBody: {
        fontSize: 15
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInput: {
        marginTop: 30,
        gap: 10
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 10
    },
    textr: {

        marginTop: 30,
        fontSize: 16,
        color: PRIMARY_COLOR,
        fontWeight: "bold",
        textAlign: "center"
    },
    contendcard: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderStyle: "solid",
        borderColor: PRIMARY_COLOR,
        borderWidth: 2,
        marginBottom: 15,
        borderRadius: 10
    },
    titlecard: {
        fontWeight: "bold",
        color: 'black',
        fontSize: 15
    },
    imagecard: {
        width: 70,
        height: 70
    },
    icon: {
        flex: 1,
        alignItems: 'flex-end'

    },
    contentPrincipal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    modal: {
        padding: 25,
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 5


    },
    headerModal: {
        flexDirection: "row",
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10
    },
    icon2: {
        flex: 1,
        alignItems: 'flex-end'

    },
    titlemodal: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
  
    imagemodel: {

        width: 200,
        height: 200,

    },
    contentQuantity: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonquantity: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: "center",
        alignItems: "center",
        margin: 15
    },
    texbuttonquantity: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: "bold"
    },
    texquantity: {
        fontSize: 20,
        color: '#000'
    },
    iconPasswordd: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 10
    },
    textRedirection: {
        marginTop: 30,
        fontSize: 16,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    buttonaddcart:{
        marginTop:15,
        backgroundColor:PRIMARY_COLOR,
        borderRadius:5,
        paddingVertical:10,
        alignItems:"center"
    
    },
    texbutton:{
        backgroundColor:'BLACK',
        fontWeight:"bold",
        textAlign:"center"

    },
    messagestock:{
        fontSize:20,
        fontWeight:"bold",
        color:'#a92424',
        textAlign:"center"
    },
    contentheaderhome:{
        flexDirection:"row",
        alignItems:"center"
    },
    inconcardhome:{
        flex:1,
        alignItems:"flex-end",
        paddingHorizontal:33

    },
    texIconcard:{backgroundColor:SECUNDARY_COLOR,
        borderRadius:20,
        paddingHorizontal:5,
        fontSize:13,
        fontWeight:"bold"

    },
    headertable:{
        flexDirection:"row",
    justifyContent:"space-between"
    },
    headerinformation:{
        flexDirection:"row",
      
    },
    texinformation:{
        marginHorizontal:10
    }
    
});