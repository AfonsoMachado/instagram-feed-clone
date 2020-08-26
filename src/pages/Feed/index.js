import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import LazyImage from '../../components/LazyImage';

import {Post, Header, Avatar, Name, Description, Loading} from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
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
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

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
        // refresh arrastando o conteudos para baixo
        onRefresh={refreshList}
        refreshing={refreshing}
        renderItem={({item}) => (
          <Post>
            <Header>
              <Avatar source={{uri: item.author.avatar}} />
              <Name>{item.author.name}</Name>
            </Header>

            <LazyImage
              aspectRatio={item.aspectRatio}
              source={{uri: item.image}}
              smallSource={{uri: item.small}}
            />

            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}
