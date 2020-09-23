import { StyleSheet } from 'react-native'

const styleSheet = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 50,
        backgroundColor: '#3F25E5',
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        ...Platform.OS == 'ios' ?
            {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 5
                },
                shadowOpacity: 0.25,
                shadowRadius: 5,
            }
            : {
                elevation: 5,
            }
    }
});

const colors = {
    white: '#fff',
    gray: 'rgba(255, 255, 255, 0.5)',
};

export const styles = {
    styleSheet,
    colors
};
