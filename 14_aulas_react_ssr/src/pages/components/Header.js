export default function Header() {
    return (
        <>
        <nav>
            <ul className='menu'>
                <li><h1 className='nome'>FS Eletro</h1></li>
                <li><a href="#">Página Inicial</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Nossas Lojas</a></li>
                <li><a href="#">Fale Conosco</a></li>
            </ul>
        </nav>

        <style jsx>{`
        nav {
            display: flex;
            width: 100%;
            background-color:#004AAD;
        }
        .nome {
            color: #e55a2b;
        }
        
        .menu {    
            display: flex;
            width: 100%;
            align-items: center;
            list-style-type: none;
        }
        
        .menu li {
            text-align: center; 
            width: 25%;
        }
        
        .menu li a {
            text-decoration: none;
            font-size: 20px;
            color: white; 
        }
        `}</style>
        </>
    )
}