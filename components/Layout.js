import Head from 'next/head';
import Header from '../components/Header';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Woocommerce</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.css" />    
            </Head>
            <Header/>
            {props.children}
        </div>
    );
};

export default Layout;