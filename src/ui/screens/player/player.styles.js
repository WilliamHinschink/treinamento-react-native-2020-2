import { Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    videoImage: {
        width,
        height: height * 0.4
    },
    statusBar: {
        width,
        height: 5,
        backgroundColor: '#3F25E5'
    },
    soundBarContainer: {
        width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 27
    },
    soundBarSlider: {
        flex: 1,
    },
    mediaContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    textContainer: {
        width,
        paddingHorizontal: 27,
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    description: {
        fontSize: 16
    },
    buttonContainer: {
        width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 27,
        justifyContent: 'space-between'
    },
    touchable: {
        backgroundColor: 'rgba(63, 37, 229, 0.15)',
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playContainer: {
        backgroundColor: 'rgba(63, 37, 229, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.30,
        height: width * 0.30,
        borderRadius: width * 0.30,
    },
    playButton: {
        backgroundColor: '#3F25E5',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.28,
        height: width * 0.28,
        borderRadius: width * 0.28,
    }
});
