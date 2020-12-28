# Fluke App

Aplicativo desenvolvido como exercício para a Fluke.

## O Primeiro Desafio

Crie um app usando React Native Init versão 0.61 ou mais recente (Não utilize o Expo) onde o usuário consiga acompanhar seu consumo de dados e minutos na fluke de maneira instantânea, verificar o histórico de consumo dos dias passados e tirar dúvidas numa tela de ajuda com dúvidas frequentes.

## Autor
[![Vinicius](https://www.github.com/antoniovini.png?size=120)](https://github.com/antoniovini/)

Antonio Vinicius
<br>*Entusiasmado com o resultado.*

## Powered Using

  ![JavaScript](https://img.shields.io/badge/-JavaScript-F7B93E?style=flat-square&logo=javascript&logoColor=000)
  ![React Native](https://img.shields.io/badge/-React%20Native-45b8d8?style=flat-square&logo=react&logoColor=white)
  ![Jest](https://img.shields.io/badge/-Jest-2ecc71?style=flat-square&logo=jest&logoColor=white)

## Instalação

Clone o projeto, instale todas as dependências e inicie o app.<br>
*Não esqueça de iniciar o emulador ou conectar algum dispositivo.*

```sh
git clone https://github.com/antoniovini/flukeapp.git
cd flukeapp
npm install
npm run android
```

Para executar os testes utilizando o Jest.

```sh
npm run test
```

## Desenvolvimento

### O Planejamento e Criação do Projeto

Quando recebi o desafio estava a 3 dias do natal. A correria para as presparações da festa de final de ano foi um 
fator que me preocupou bastante sabendo que tinha 7 dias para entregar o projeto, mas não me deixei abater. <br>

Então comecei a planejar o que eu iria fazer. Comecei buscando na internet referências sobre o próprio aplicativo da Fluke,
foi então que juntei algumas imagens na minha pasta de assets que continham tudo que eu precisava para este desafio.

Criei então o projeto no dia 26/12/2020 utilizando o React Native CLI e configurei o projeto base instalando as seguintes libs:

  - [Styled Components](https://styled-components.com/)
  - [React Router](https://reactrouter.com/)
  
Como havia recebido dia 22/12/2020 sabia que tinha que entregar até dia 29/12/2020.

### A Página Inicial

Quando me deparei com a página principal percebi que precisaria de uma *Appbar* (A barra superior) para o aplicativo,
então optei por instalar a biblioteca [React Native Paper](https://callstack.github.io/react-native-paper/) visando alguns components que ela possui que facilitam o desenvolvimento.

Com a biblioteca instalada foi fácil a criação da *Appbar* bastando apenas algumas customizações, aproveitei para adicionar o botão que leva para as dúvidas frequentes
no site da Fluke como foi requisitado.

Então passei para a criação do menu de opções do aplicativo que eu apelidei de *ScrollableMenu*. Foi fácil estilizar o componente e eu pensei comigo mesmo,
porque eu não faço uma animação nas bolinhas de paginação para que ela cresça quando a opção esteja selecionada. Então instalei a biblioteca [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) que possui diversas ferramentas que ajudam na animação de componentes e como esperado tudo funcionou perfeitamente.

Após isso decidi criar o componente *Card* que iria conter todas informações sobre consumo do usuário, utilizando uma base de card que o [React Native Paper](https://callstack.github.io/react-native-paper/) contém, eu apenas estilizei ele para se adequar a aplicação.

Colocando os *Cards* no lugar eu precisava criar todo o conteúdo para eles, então baixei a lib [React Native Circular Progress](https://github.com/bartgryszko/react-native-circular-progress) que eu utilizaria para medir o consumo do usuário em uma barra circular. Criei os componentes de textos e coloquei tudo no seu devido lugar.

Agora eu precisava criar as conexões com o back-end da Fluke, então instalei a lib [Axios](https://github.com/axios/axios) que eu utilizaria para fazer as requisições HTTP.

Criei então a pasta *services* que teriam as funções de conexão com o servidor, e implementei em dois arquivos separados *(package.js e consumption.js)* cada uma das requisições que eu precisava fazer.

Chamando os serviços na minha página *Home* pude ver tudo funcionar como esperado.

### Páginas e Rotas

Ao finalizar a página inicial eu precisava de alguma forma para trocar entre páginas, como havia planejado utilizar o [React Router](https://reactrouter.com/) para esta
tarefa, implementei todo o sitema para isto.

Nesse tempo eu fui buscar um componente para que essa troca de tela pudesse ser feita, então me deparei com o *Bottom Navigation* da própria [React Native Paper](https://callstack.github.io/react-native-paper/) que me serviu como uma luva. Como este componente já tinha seu próprio sitema de gerênciamento de rotas eu pude excluir
qualquer chamada ao [React Router](https://reactrouter.com/) o que fácilitou ainda mais minha vida.

### A Página de Histórico

Confesso que subestimei esta página e me surpreendi com alguns gargalos que eu tive nela.

Iniciei implementando a própria *Appbar* que eu já havia criado.

Então peguei e inseri os serviços de consumo nesta página também, armazenando a data que eu gostaria de verificar em um estado e o código calcula automaticamente a data de uma semana antes desta para poder ser feita a requisição para o servidor (startDate & endDate). Agora eu tinha em mãos as informações para mostrar para o usuário, mas como mostrar?

Decidi utilizar alguma lib que forneciam gráficos, foi então que encontrei a [react-native-svg-charts](https://github.com/JesperLekland/react-native-svg-charts) que fornece gráficos de diversos tipos para o React Native. Depois de algum tempo configurando ela, consegui formatar os dados que recebo do servidor para servir a lib de gráficos.

Após um longo tempo resolvendo estilos do gráfico eu finalmente havia finalizado, mas eu precisava mostrar o histórico tanto de minutos quanto os dados consumidos, então criei o componente *TabMenu* que facilita a seleção entre tabs. Configurei os dois Gráficos e agora podia trocar entre as duas informações.

Por último decidi adicionar um paginador para o usuário poder fazer a viagem pelo histórico, essa foi a parte mais fácil, uma vez que só precisei estilizar o componente e quando o usuário avança ele apenas incrementa um dia a *startDate* e calcula a *endDate* baseada nesta nova data e atualiza o gráfico novamente.

### Finalização

Com isso eu tinha todo aplicativo finalizado, tinha então tempo para refatorar algumas partes e comentar todo o código.

Adicionei também os testes do jest para as requisições da aplicação, deixando explicito a utilização para quem for pegar o código para manutenção.

## Resultado

![pic2](https://user-images.githubusercontent.com/43019054/103180822-407ad800-4878-11eb-8ce9-ce040272e528.png)<br>
![pic1](https://user-images.githubusercontent.com/43019054/103180824-41136e80-4878-11eb-8962-a9a0917effd4.png)<br>
![pic3](https://user-images.githubusercontent.com/43019054/103180823-41136e80-4878-11eb-9d6d-e1f903efc052.png)

## O Segundo Desafio

O exercício 2 foi implementado dentro dos próprios testes do Jest.

Pode ser encontrado na pasta *__tests__/Challenge-test.js*.
