# UI Clone: Instagram

<p align="center">:rocket: Clone da interface gráfica do feed de notícias do Instagram, implementado em React Native.
 Aplicação feita seguindo passos apresentados no vídeo tutorial da <a href="https://www.youtube.com/watch?v=2nXsLpUCO20">RocketSeat</a>. Com algumas correções realizadas por conta da atualização de algumas bibliotecas usadas.
</p>

## :computer: Tecnologias
<ul>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://reactnavigation.org/">React Navigation</a></li>
  <li><a href="https://styled-components.com/">Styled Components</a></li>
  <li><a href="https://github.com/typicode/json-server">JSON Server</a></li>  
</ul>

## :fire: Instalação

É necessário ter um ambiente NodeJS ou Yarn instalado em sua máquina

### Clonando o repositório:

```
$ git clone https://github.com/AfonsoMachado/instagram-feed-clone.git
```

### Executando

```bash
# Go to folder
$ cd instagram-feed-clone

# Install Dependencies
$ yarn install

# Run Aplication on Android
$ yarn android

# Run Aplication on iOS
$ yarn ios

# Run Backend
$ yarn serve
```
- Backend executando em http://localhost:3000

### Permitindo comunicação com o backend (somente dispositivos Android)

Para dispositivos Android é necessário um comando para habilitar a comunicação com o backend:
```
$ adb reverse tcp:3000 tcp:3000
```

## :white_check_mark: Resultado

![](https://github.com/AfonsoMachado/instagram-feed-clone/blob/master/result.gif)

<p align="center">Feito com 💜 por <strong><a href="https://www.linkedin.com/in/AfonsoMachado/">Afonso Machado</a> 🥰 </strong> </p>


