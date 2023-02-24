import React from 'react';
import styled from 'styled-components/native';
import Company from './icons/Company.svg';
import TagLine from '../TagLine';
import ShowMoreText from '../CollapsableText';
import {THEME_TYPE} from '../../utils/helpers/cardModel';

interface CardContent {
  themeCard: THEME_TYPE;
  content: string;
  // data obj ?
}
const Container = styled.View`
  border-radius: ${({theme}) => theme.space.xl};
  border: 2px solid ${({theme}) => theme.colors.green[100]};
  display: flex;
  margin: ${({theme}) => theme.space.xxxxl};
  width: 330px;
`;

const ImageWrapper = styled.View`
  width: ${({theme}) => theme.space.xxxxxl};
  height: ${({theme}) => theme.space.xxxxxl};
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const UserText = styled.Text`
  font-family: ${({theme}) => theme.fonts['semi-bold']};
  color: ${props => props.theme.colors.black[100]};
  font-size: ${({theme}) => theme.fontSizes.l};
  flex: 1;
`;

const Card: React.FC<CardContent> = ({themeCard, content}) => {
  return (
    <Container>
      <HeaderContainer>
        <ImageWrapper>
          <Company />
        </ImageWrapper>
        <UserText>Anonymous</UserText>
      </HeaderContainer>
      <TagLine theme={themeCard} />
      <ShowMoreText inputText={content} />
    </Container>
  );
};

export default Card;
