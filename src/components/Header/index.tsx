import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { ContainerHeader, Wrapper, Title } from './styles';

interface IProps {
  handleToggle: () => void
};

const Header: React.FC<IProps> = ({ handleToggle }) => {
  const { title } = useContext(ThemeContext);

  return (
    <ContainerHeader>
      <Wrapper>
        <Title>React Dark/Theme</Title>
        <Switch
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onChange={handleToggle} />
      </Wrapper>
    </ContainerHeader>
  );
};


export default Header;