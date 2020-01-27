import React from 'react';

import logo from '~/assets/assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Top, Logo, Title} from './styles';

//<Icon name="flare" size={20} color="#fff" />

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Juliano</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
