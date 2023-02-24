import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const MAX_LENGTH = 100; // edit to create more cases

interface ShowMoreText {
  inputText: string;
}

const ContentText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${props => props.theme.colors.black[100]};
  font-size: ${({theme}) => theme.fontSizes.s};
`;

const ContainerText = styled.View`
  margin: ${({theme}) => theme.space.m};
`;

const ShowMoreLessButton = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  text-align: right;
  font-size: ${({theme}) => theme.fontSizes.xs};
  text-decoration-line: underline;
`;

const ShowMoreText: React.FC<ShowMoreText> = ({inputText}) => {
  const [showAll, setShowAll] = useState(false);

  const displayedText = showAll
    ? inputText
    : inputText.length > MAX_LENGTH
    ? `${inputText.slice(0, MAX_LENGTH)}...`
    : inputText;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <ContainerText>
      <ContentText>{displayedText}</ContentText>
      {inputText.length > MAX_LENGTH && (
        <TouchableOpacity onPress={toggleShowAll}>
          <ShowMoreLessButton>
            {showAll ? 'Show Less' : 'Show More'}
          </ShowMoreLessButton>
        </TouchableOpacity>
      )}
    </ContainerText>
  );
};

export default ShowMoreText;
