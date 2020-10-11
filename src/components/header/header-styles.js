import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'


const OptionContainerStyles = css `
  padding: 10px 15px;
  cursor: pointer;
`;

const OptionContainerStylesHover = css `
  background: yellow;
  border-radius: 4px;
  transform: scale(1.1);
  font-weight: bold;
  padding-bottom: 15px;
`


export const HeaderContainer = styled.div `
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const LogoContainer = styled(Link) `
  height: 100%;
  width: 70px;
`;

export const OptionsContainer = styled.div `
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


export const OptionLink = styled(Link) `
  ${OptionContainerStyles}

  &:hover {
    ${OptionContainerStylesHover}
  }
`;


export const OptionDiv = styled.div `
  ${OptionContainerStyles}

  &:hover {
    ${OptionContainerStylesHover}
  }
`;