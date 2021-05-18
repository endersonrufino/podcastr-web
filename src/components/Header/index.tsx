import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { HeaderContainer } from './styles';
//import styles from './styles.module.scss';

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="Podcastr" />

      <p>o melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </HeaderContainer>
  );
};

export default Header;