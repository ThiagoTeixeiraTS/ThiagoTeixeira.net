Bloco de anotações sobre este projeto

Para enviar o Codigo para o Git tenho que usar o seguinte comando

git push -u origin main

para start do projeto fica
Gatsby Develop

childImageSharp {
fixed = quando eu sei o tamanho da image
Fluid = Tamanho baseado no container que ela esta! // Usarei na imagem dos posts

Para instalar o styled component
npm install --save styled-components

para o gatsby conseguir utilizar o styled components precisamos instalar um plugin
npm install gatsby-plugin-styled-components

yarn add styled-components

para usar o markdown precisamos instalar o yarn add gatsby-transformer-remark para poder fazer a leitura.
e adicionar no gatsby-config a seguinte plugin
{
resolve: `gatsby-source-filesystem`,
options: {
name: `posts`,
path: `${__dirname}/posts`,
},
},
{
resolve: `gatsby-transformer-remark`,
options: {
plugins: [],
},
},

allMarkdownRemark me retorna e todos os posts
MarkdownRemark apenas 1 poste

query MyQuery {
allMarkdownRemark {
edges { -> Lista / Array
node -> Nó /item
}
}
}
