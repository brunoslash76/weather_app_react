import { StyleSheet } from 'aphrodite';

const Styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
    },
    headerInnerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        maxWidth: '1024px',
        border: '1px solid white',
    }
});

export default Styles;