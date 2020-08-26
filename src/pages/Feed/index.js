import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {
  Post,
  Header,
  Avatar,
  Name,
  PostImage,
  Description,
  Loading,
} from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadPage(pageNumber = page, shouldRefresh) {
    if (total && pageNumber > total) {
      return;
    }
    setLoading(true);

    const url = `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`;
    // Carregando os itens do feed do backend
    const resp = await fetch(url);
    // convertendo os dados em json
    const data = await resp.json();
    // Capturando total de elementos
    const totalItems = resp.headers.get('X-Total-Count');
    // armazenando os dados
    // Numero de paginas, arredondandos para cima
    setTotal(Math.floor(totalItems / 5));
    // incrementando dados no feet ao inves de substituir os dados
    setFeed([...feed, ...data]);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <View>
      {/* Estrutura do componente a ser listado */}
      <FlatList
        data={feed}
        keyExtractor={(post) => String(post.id)}
        onEndReached={() => loadPage()}
        // quando o usuario tiver 10% do final da lista, carrega os proximos itens
        onEndReachedThreshold={0.1}
        // ultimo item da lista
        ListFooterComponent={loading && <Loading />}
        renderItem={({item}) => (
          <Post>
            <Header>
              <Avatar source={{uri: item.author.avatar}} />
              <Name>{item.author.name}</Name>
            </Header>

            <PostImage ratio={item.aspectRatio} source={{uri: item.image}} />

            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}
