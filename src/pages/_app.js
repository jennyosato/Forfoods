import '@/styles/globals.css'
import "animate.css/animate.min.css";
import Layout from '@/component/Layout'
import CartContext from '@/contextAPI';








export default function App({ Component, pageProps }) {
  
    return (
      <CartContext>
             <Layout>
              <Component  {...pageProps} />
            </Layout>
     </CartContext>)
            
  
}
