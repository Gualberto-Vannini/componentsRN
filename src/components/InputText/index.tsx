import React, {useCallback, useMemo, useState} from 'react';
import {
  StyleProp,
  TextInputProps as TextInputPropsRN,
  TextInput as TextInputRN,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {ErrorText, TitleInputText} from '../TextInput';
import IconEyeActive from './icons/eye-on.svg';
import IconEyeInactive from './icons/eye-off.svg';
import IconCheck from './icons/check.svg';
import {INPUT_FIELDS_TYPE} from './inputModel';
import useInputText from '../../hooks/useInputText';

interface TextInputProps extends TextInputPropsRN {
  style?: StyleProp<ViewStyle>;
  error?: boolean;
  errorMessage?: string;
  onIconClick?: () => void;
  inputType: INPUT_FIELDS_TYPE;
}

interface WrapperTextProps extends Pick<TextInputProps, 'error'> {
  minChar?: boolean;
  maxChar?: boolean;
}

const Container = styled(View)``;

const WrapperText = styled(View)<WrapperTextProps>`
  border: 2px solid
    ${({minChar, error, theme}) =>
      error || minChar ? theme.colors.green[200] : theme.colors.black[50]};
  display: flex;
  border-radius: ${({theme}) => theme.space.m};
  padding: ${({theme}) => theme.space.m};
  width: 300px;
`;

const Row = styled(View)`
  flex-direction: row;
`;

const StyledInput = styled(TextInputRN)<Pick<TextInputProps, 'inputType'>>`
  color: ${({theme}) => theme.colors.black[100]};
  font-size: ${({theme}) => theme.fontSizes.s};
  font-family: ${({theme}) => theme.fonts.regular};
  text-align: left;
  width: 93%;
  padding-vertical: ${({theme}) => theme.space.xs};
`;

const Icon = styled.TouchableOpacity``;

const ButtonContainer = styled(View)`
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled(ErrorText)``;

const TextInput = React.forwardRef<TextInputRN, TextInputProps>(
  (
    {error, errorMessage, onIconClick, inputType, style = {}, ...props},
    ref,
  ) => {
    const {label, placeholder, minAccepted} = useInputText(
      inputType,
      props.value?.length,
    );
    const [passwordVisible, setPasswordVisible] = useState(false);
    const isPassword = inputType === INPUT_FIELDS_TYPE.PASSWORD;

    const onIconPress = useCallback(() => {
      if (onIconClick) {
        onIconClick();
      }
      if (isPassword) {
        setPasswordVisible(previousValue => !previousValue);
      }
    }, [setPasswordVisible, onIconClick, isPassword]);

    const finalIcon = useMemo(() => {
      if (isPassword) {
        return passwordVisible ? <IconEyeActive /> : <IconEyeInactive />;
      }
      if (minAccepted) {
        return minAccepted && <IconCheck />;
      }
      return null;
    }, [isPassword, minAccepted, passwordVisible]);

    return (
      <Container style={style}>
        <TitleInputText>{label}</TitleInputText>
        <WrapperText error={error} minChar={minAccepted}>
          <Row>
            <StyledInput
              ref={ref}
              secureTextEntry={isPassword && !passwordVisible}
              placeholder={placeholder}
              inputType={inputType}
              {...props}
            />
            {finalIcon && (
              <ButtonContainer>
                <Icon
                  hitSlop={{top: 16, right: 16, bottom: 16, left: 16}}
                  onPress={onIconPress}>
                  {finalIcon}
                </Icon>
              </ButtonContainer>
            )}
          </Row>
        </WrapperText>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      </Container>
    );
  },
);

export default TextInput;
