import Header from './components/Header';
import Footer from './components/Footer';


function Home() {
    return (
        <>
            <Header />
            <main>
                <h3>FS Eletro - <i>A loja de Eletrodomésticos para programadores</i></h3>
                <h2></h2>
                <p>Em nossas lojas <b>programadores têm desconto</b> nos produtos para sua casa!</p>
                <p>Clique na aba <b>Produtos</b> para conferir nossas ofertas!</p>
            </main>
            <Footer />

            <style>{`
            body{
                margin: 0px;
                padding: 0px;
                font-size: 18px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            main{
                height: 400px;
            }
            `}                
            </style>
        </>
    )
}    
  
export default Home;