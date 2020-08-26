import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {Post, Header, Avatar, Name, PostImage, Description} from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3000/feed?_expand=author&_limit=5&_page=1';
    // Carregando os itens do feed do backend
    async function loadFeed() {
      const resp = await fetch(url);
      // convertendo os dados em json
      const data = await resp.json();
      // armazenando os dados
      setFeed(data);
    }

    loadFeed();
  }, []);

  return (
    <View>
      {/* Estrutura do componente a ser listado */}
      <FlatList
        data={feed}
        keyExtractor={(post) => String(post.id)}
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
