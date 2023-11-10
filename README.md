# Node.js

#### Visão Geral

Node.js é um poderoso ambiente de execução JavaScript de código aberto e multiplataforma que executa código JavaScript fora de um navegador web. Ele permite que os desenvolvedores construam aplicações de rede escaláveis e é particularmente adequado para a construção de aplicações do lado do servidor.

#### Instalação

Para começar com o Node.js, siga estas etapas simples:

1. **Baixe o Node.js**: Visite o site oficial do Node.js e baixe a versão que corresponde ao seu sistema operacional.
2. **Instale o Node.js**: Execute o instalador e siga as instruções na tela.
3. **Verifique a Instalação**: Abra um terminal ou prompt de comando e execute os seguintes comandos para verificar se o Node.js e o npm (Node Package Manager) estão instalados:

```bash
node -v
npm -v
``` 
####  Criando uma Aplicação Node.js Simples
Uma vez que o Node.js está instalado, você pode criar uma simples aplicação 

 ```bash
“Hello, World!”. Siga estas etapas:
 ``` 


#### Crie um novo diretório para o seu projeto:
 ```bash
mkdir my-node-app
cd my-node-app
``` 
 ##### Inicialize um novo projeto Node.js:
 ```bash
npm init -y
 ```
Isso criará um arquivo package.json com valores padrão.

#### Crie um arquivo JavaScript (por exemplo, app.js):
JavaScript
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
 ```bash
// app.js
console.log("Hello, World!");
Execute a aplicação:
node app.js
```
Você deve ver a mensagem  **“Hello, World!”** no terminal.



#### Gerenciando Dependências com npm
Node.js usa npm para gerenciar pacotes e dependências. Para instalar um pacote, use o seguinte comando:
 ```bash
npm install nome-do-pacote
```
Por exemplo, para instalar o framework Express:
 ```bash
npm install express
```
Adicione a flag **--save** para adicionar automaticamente o pacote às suas dependências do package.json.

Exemplo: Criando um Servidor Express Básico
Aqui está um exemplo rápido de como criar um servidor básico usando o framework Express:
 ```bash
Instale o Express:
npm install express
```
Crie um aplicativo Express (por exemplo, server.js):
JavaScript
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
 ```bash
// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
Execute o servidor:
node server.js
 ```
Abra seu navegador e navegue até **http://localhost:3000** Você deve ver a mensagem **“Hello, Express!”**.

## Conclusão
Node.js fornece um ambiente robusto e eficiente para a construção de aplicações do lado do servidor usando JavaScript. Explore o vasto ecossistema de pacotes npm para melhorar seus projetos. Feliz codificação