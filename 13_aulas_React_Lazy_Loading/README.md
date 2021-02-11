# Projeto Prático - Site Full Stack Eletro


 
**_Esse projeto buscou utilizar os conceitos de Code Splitting e Lazy Loading. Para isso foram feitas refatorações no código do site de vendas de eletrodomésticos_** :computer: :rocket:


Os requisitos dessa entrega eram:

- Realizar o refactory (reconstrução) do projeto substituindo o import comum de pelo menos 3 (três) componentes por implementação de Code Splitting e Lazy Loading. 
       <p>Utilizando a versão anterior do site FullStack Eletro foi realizado o import com Lazy Loading em três arquivos:<p>
        <ul>
            <li>O primeiro foi o de Rotas, onde é feita a importação de cada uma das páginas. Com isso, antes de cada página ser renderizada por completo, aparece apenas a palavra "Carregando...";</li>
            <li>O segundo foi na página Produtos. Antes de cada produto ser renderizado na página aparece o componente Spinners do React-Bootstrap;</li>
            <li>O terceiro foi na página do Carrinho de Compras. Antes de ser renderizado o produto enviado para o carrinho aparece mais uma vez o componente Spinners para indicar que está carregando.</li>
        </ul>



_No decorrer das semanas esse mesmo projeto será aprimorado com novos conhecimentos._
