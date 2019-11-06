## Considerações sobre o desafio

O Projeto foi um grande desafio, um desafio daqueles que a gente se empolga e perde a noção de tempo.

Utilizei alguns conceitos que vinha observando na comunidade e muita coisa que aprendi ao longo do tempo que estou estudando front-end.

## Projeto realizado em React.

Utilizei o Redux e Redux Saga para o gerenciamento dos estados de cartões, valores e usuário selecionado, para também persistir os mesmo ao recarregar a aplicação na próxima visita (Refresh / F5) ou mudança de rota. 

Também utilizei styled components para o CSS, uma lib excelente para estilizar a aplicação, conta com vários benefícios para facilitar a construção da aplicação.

Apliquei loadings como feedback para os usuários, uma forma de dizer para eles aguardarem um momento de forma amigável (Eu adoro esse tipo de coisa / animação / feedback pro usuário).

Para os layouts entre desktop / mobile utilizei uma lib que identifica o dispositivo do usuário e para cada um deles eu chamei rotas específicas (alterando o endereço da URL sempre), no caso do desktop estou chamando as rotas de modal/popup e para o mobile eu chamo as rotas normalmente sem a modal, criando um layout "fullscreen". (quando testar o site em dispositivos diferentes, lembre-se de dar um refresh para que o site faça a validação/identificação do dispositivo, como se estivesse acessando o site pela primeira vez).

Tentei componentizar ao máximo, mas ao longo do desenvolvimento vi que poderia componentizar muito mais.

No geral gostei muito da experiência, e do resultado final. Notei vários pontos que posso melhorar ainda mais, como melhoria para o projeto caso tivesse mais tempo, olharia com mais carinho para a parte responsiva do site, a componentização de mais elementos que encontrei pelo caminho, também gostaria de ter implementado mais validações com o YUP Schema e a implementação dos testes com Jest.

## Demo na HerokuApp - (Em alguns momentos o site pode estar fora no Heroku)
### https://picpay-frontend.herokuapp.com/  


Abaixo alguns scripts para executar o projeto

- Utilizei o Reactotron para monitorar as chamadas e troca de estados, pode ser que apareça algum 'error' no console que não conseguiu se conectar a ele em ambiente de dev, mas isso não impede que o site funcione.

## Available Scripts

In the project directory, you can run:

### `npm install` or `yarn`

Install the dependencies of the project.

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
