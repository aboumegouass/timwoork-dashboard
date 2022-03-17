import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.css'
function MyApp({ Component, pageProps }) {
    return (
        <>
            {<Component {...pageProps} />}
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.object,
};

export default MyApp;
