import { StyleSheet } from "react-native"
import { StatusBar } from "react-native"

export default StyleSheet.create({
    // pag index
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#EBEAEA'
      },
      item: {
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 15,
        width: 350,
        alignSelf: 'center',
        margin: 20,
        shadowColor: '#3d4379',
        shadowOffset: {width: -1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 6
      },
      titleService: {
        fontSize: 18,
        textAlign: 'center',
        color: '#3f4040',
      },
      title: {
        fontSize: 22,
        textAlign: 'left',
        margin: 30,
        marginTop: 50,
        marginBottom: 30,
        color: '#F85C70',
        fontFamily: 'Rubik-Medium'
      },

      // pag description
      textDescription: {
        fontSize: 20,
        marginTop: 70,
        color: '#F85C70',
        fontFamily: 'Rubik',
        marginLeft: 20,
        marginRight: 20
      },
      inputDescription: {
        marginBottom: 30,
        marginTop: 20,
        borderRadius: 12,
        width: 370,
        height: 220,
        textAlignVertical: 'top',
        alignSelf: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        color: '#3f4040',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 18,
        lineHeight: 17
      },
      titleInput: {
        fontSize: 20,
        color: '#F85C70',
        fontFamily: 'Rubik',
        marginLeft: 20,
        marginRight: 20
      },
      btn: {
        backgroundColor: '#3f4040',
        padding: 10,
        borderRadius: 5,
        margin: '4%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        marginBottom: 30,
        marginTop: 20
      },
      input: {
        marginBottom: 30,
        marginTop: 20,
        borderRadius: 12,
        width: 370,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        color: '#3f4040',
        paddingLeft: 20,
        paddingRight: 20,
      },
      input2: {
        marginBottom: 30,
        borderRadius: 12,
        width: 370,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        color: '#3f4040',
        paddingLeft: 20,
        paddingRight: 20,
      },
      currencyInput: {
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 12,
        width: 200,
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        color: '#3f4040',
        marginLeft: 22,
        paddingLeft: 20,
        paddingRight: 20
      }
})