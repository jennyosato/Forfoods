import '@/styles/globals.css'
import Layout from '@/component/Layout'
// import Router from 'next/router';
import CartContext from '@/contextAPI';

// Router.events.on('routeChangeStart', (url, { shallow }) => {
//     console.log(`Navigating to ${url}`);
// });


export default function App({ Component, pageProps }) {
  
    return (
      <CartContext>
             <Layout>
        <Component  {...pageProps} />
            </Layout>
     </CartContext>)
            
  
}
