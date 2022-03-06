import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    row: {
        flexDirection: 'row',
        width: '100%'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    justifyContentBetween: {
        justifyContent: 'space-between'
    },
    justifyContentAround: {
        justifyContent: 'space-around'
    },
    justifyContentEnd: {
        justifyContent: 'flex-end'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    textThin: {
        fontWeight: '100',
        opacity: .9
    },
    textBold: {
        fontWeight: 'bold',
    },
    textUpperCase: {
        textTransform: 'uppercase',
    },
    textCenter: {
        width: '100%',
        textAlign: 'center'
    },
    textWhite: {
        color: '#fff'
    }
});

export default Styles;