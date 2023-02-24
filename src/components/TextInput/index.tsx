import * as React from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  color,
  layout,
  space,
  typography,
} from 'styled-system';

import colors from '../../theme/Colors';

export interface StyledTextProps
  extends ColorProps,
    TextProps,
    SpaceProps,
    TypographyProps,
    LayoutProps {
  children: React.ReactNode;
  testID?: string;
}

// ERROR TEXT INPUT
export const StyledErrorText = styled.Text<StyledTextProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

export const ErrorText: React.FC<StyledTextProps> = ({children}) => (
  <StyledErrorText
    fontFamily={'regular'}
    fontSize="s"
    mt="s"
    color={colors.green[200]}>
    {children}
  </StyledErrorText>
);

// TEXT INPUT
export const StyledTitleInputText = styled.Text<StyledTextProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
  color: ${props => props.theme.colors.black[100]};
`;

export const TitleInputText: React.FC<StyledTextProps> = ({children}) => (
  <StyledTitleInputText
    textAlign="left"
    fontFamily={'regular'}
    fontSize="m"
    mt="l"
    mb="m">
    {children}
  </StyledTitleInputText>
);
