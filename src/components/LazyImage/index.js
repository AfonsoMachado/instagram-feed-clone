import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

import {Small, Original} from './styles';

const OriginalAmimated = Animated.createAnimatedComponent(Original);

export default function LazyImage({
  smallSource,
  source,
  aspectRatio,
  shouldLoad,
}) {
  const opacity = new Animated.Value(0);
  // se a imagem original foi carregada ou nao
  const [loaded, setLoaded] = useState(false);

  // Dando um intervalode 1 segundo para visualizar o carregamento da imagem
  useEffect(() => {
    if (shouldLoad) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      duration: 500,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={2}>
      {loaded && (
        <OriginalAmimated
          style={{opacity}}
          source={source}
          ratio={aspectRatio}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  );
}
