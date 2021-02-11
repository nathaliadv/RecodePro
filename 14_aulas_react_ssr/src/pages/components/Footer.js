
export default function Footer() {
    return(
        <footer>
            <p><b>ACOMPANHE NAS REDES SOCIAIS</b></p>
            <a href="https://www.instagram.com/">Instagram</a> |
            <a href="https://www.facebook.com/">Facebook</a> |
            <a href="https://www.twitter.com/">Twitter</a>
            <p id="copyright">&copy;Nathalia Dantas - RecodePro</p>
            <style jsx>{`
                footer {
                    text-align: center;
                    position: relative;
                    bottom: 0px;
                    background-color:#004AAD;
                    padding: 10px;
                    color: white;
                    font-size: 13px;
                }
                a {
                    text-decoration: none;
                    color: #fff;
                }
                #copyright {
                    font-style: italic;
                }
                
            `}</style>
        </footer>
    );
}