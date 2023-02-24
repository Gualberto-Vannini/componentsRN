import React from 'react';
import styled from 'styled-components/native';
import Location from '../Card/icons/Location.svg';
import Clock from '../Card/icons/Clock.svg';
import Calendar from '../Card/icons/Calendar.svg';
import Language from '../Card/icons/Language.svg';
import Speciality from '../Card/icons/Speciality.svg';
import {THEME_TYPE} from '../../utils/helpers/cardModel';

interface TabLineProps {
  theme: THEME_TYPE;
  // data obj ?
}
const ListContainer = styled.View`
  flex-direction: row;
  margin-horizontal: ${({theme}) => theme.space.xs};
`;

const ImageDetailWrapper = styled.View`
  width: ${({theme}) => theme.space.xl};
  height: ${({theme}) => theme.space.xl};
  align-items: center;
  justify-content: center;
`;

const DescriptionText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${props => props.theme.colors.black[100]};
  font-size: ${({theme}) => theme.fontSizes.s};
  flex: 1;
`;

////======> THERAPHIST CASE
// LOCATION
// LANGUAGE
// SPECIALITY

////======> REPORTED CASE
// LOCATION
// CALENDAR

// =======> APPOINTMENT CASE
// LOCATION
// CALENDAR
// DATE TIME

const TagLine: React.FC<TabLineProps> = ({theme}) => (
  <>
    <ListContainer>
      <ImageDetailWrapper>
        <Location />
      </ImageDetailWrapper>
      <DescriptionText>Cagliari town</DescriptionText>
    </ListContainer>

    {theme === THEME_TYPE.THERAPHIST ? (
      <>
        <ListContainer>
          <ImageDetailWrapper>
            <Language />
          </ImageDetailWrapper>
          <DescriptionText>language</DescriptionText>
        </ListContainer>
        <ListContainer>
          <ImageDetailWrapper>
            <Speciality />
          </ImageDetailWrapper>
          <DescriptionText>Speciality</DescriptionText>
        </ListContainer>
      </>
    ) : (
      <>
        <ListContainer>
          <ImageDetailWrapper>
            <Calendar />
          </ImageDetailWrapper>
          <DescriptionText>CALENDAR</DescriptionText>
        </ListContainer>
      </>
    )}

    {theme === THEME_TYPE.APPOINTMENT && (
      <>
        <ListContainer>
          <ImageDetailWrapper>
            <Clock />
          </ImageDetailWrapper>
          <DescriptionText>CLOCK</DescriptionText>
        </ListContainer>
      </>
    )}
  </>
);

export default TagLine;
