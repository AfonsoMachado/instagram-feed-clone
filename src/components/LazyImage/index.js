import React from 'react';

import {Small, Original} from './styles';

export default function LazyImage({smallSource, source, aspectRatio}) {
  function handleAnimate() {}

  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={2}>
      <Original
        source={source}
        ratio={aspectRatio}
        resizeMode="contain"
        onLoadEnd={handleAnimate}
      />
    </Small>
  );
}
