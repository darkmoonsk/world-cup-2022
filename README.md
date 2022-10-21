# Qatar World Cup 2022
Desafio de projeto para Estágio Geopost, simulando os confrontos e os resultados da copa do mundo de forma aleatoria.

### Acesse usando o link: <a href="https://world-cup-2022-one.vercel.app/" target="_blank">https://world-cup-2022-one.vercel.app/<a>

![world-cup-2022](https://user-images.githubusercontent.com/101902194/197263804-6e15b88c-10ff-498a-bccc-19e96f1f0bca.png)

## Tecnologias usadas
React e Styled Components

## Principais caracteristicas
Todas as partidas são simuladas usando um modulo que eu fiz para este projeto chamado simulator, nele os grupos são gerados, as partidas são simuladas e o posicionamento no grupo é definindo usando o critério de pontuação e saldo de gols.

Todas as fases seguintes até a final são geradas também com os metodos do simulator. Caso houver algum empate nas fases decisivas o classificado é definido nos penaltis. O layout inicial da pagina é quase todo fixo pois eu queria posicionar os elementos na tela como se fossem uma imagem de uma tabela, mas em resoluções menores o layout é flexivel, tornando 100% compativel com mobile.

Os dados de todas as seleções que estarão na copa são consumidos via fetch da API do Geopost que é para quem este projeto foi feito. Ao final o campeão é definido e os dados da final são enviados de volta via Fetch para API do Geopost.

## Design
Eu escolhi usar as cores do pais sede da copa de 2022, Catar, para definir o design central do app. Ao clicar em simule já, um modal é exibido mostrando todos os resultados da fase de grupos, ordenados por grupo.