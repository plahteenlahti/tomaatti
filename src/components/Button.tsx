import React from 'react';
import styled from 'styled-components/native';

type Props = {
  disabled: boolean;
};

const StartButton = ({ disabled }: Props) => {
  return (
    <ButtonContainer>
      <Button primary={true}>
        <ButtonText>Start</ButtonText>
      </Button>

      <InstructionsText>Long press to reset</InstructionsText>
    </ButtonContainer>
  );
};

type ButtonProps = {
  primary: boolean;
};

const Button = styled.TouchableOpacity<ButtonProps>`
  padding: 16px;
  flex: 1;
  max-height: 56px;
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 7px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: white;
  font-family: ${({ theme }) => theme.fontBold};
  text-transform: uppercase;
`;

export default StartButton;

const ButtonContainer = styled.View`
  justify-content: flex-end;
  padding: 18px;
  flex: 1;
`;

const InstructionsText = styled.Text`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 13px;
  text-align: center;
  margin-top: 25px;
  font-family: ${({ theme }) => theme.fontMedium};
`;
