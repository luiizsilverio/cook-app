import React from 'react';
import { MotiImage } from 'moti';

import { styles } from './styles';
import plateImg from '../../assets/plate.png';

export function Plate() {
  return (
    <MotiImage
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
      from={{
        rotate: '90deg',
        opacity: 0
      }}
      animate={{
        rotate: '0deg',
        opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 2000,
        /*
        repeat: 3, // repete a animação 3 vezes
        repeatReverse: true // true = reinicia do 0
        loop: true // loop infinito
        */
      }}
    />
  );
}