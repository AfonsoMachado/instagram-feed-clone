import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {Post, Header, Avatar, Name, PostImage, Description} from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);

  async function loadPage(pageNumber = page, shootRefresh) {
    const url = `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`;
    // Carregando os itens do feed do backend
    const resp = await fetch(url);
    // convertendo os dados em json
    const data = await resp.json();
    // armazenando os dados
    // incrementando dados no feet ao inves de substituir os dados
    setFeed([...feed, ...data]);
    setPage(pageNumber + 1);
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
