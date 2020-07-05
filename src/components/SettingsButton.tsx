import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import settingsButton from '../assets/settings-icon.svg';
import Modal from 'react-native-modal';

const SettingsButton = () => {
  return (
    <Container>
      <Button>
        <InnerContainer>
          <Icon fill="none" xml={settingsButton} />
        </InnerContainer>
      </Button>

      <Modal presentationStyle="pageSheet" isVisible={true}>
        <ModalContents>
          <ModalTitle>Settings</ModalTitle>
        </ModalContents>
      </Modal>
    </Container>
  );
};

export default SettingsButton;

const Button = styled.TouchableOpacity`
  border-radius: 9px;
  width: 65px;
  height: 65px;
  background-color: ${({ theme }) => theme.bgPrimary};
  box-shadow: 20px 20px 41px #c1c1c1;
`;

const InnerContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: -20px -20px 41px #ffffff;
`;

const Icon = styled(SvgXml).attrs(({ theme }) => ({
  height: 30,
  fill: theme.accentColor,
}))``;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const ModalTitle = styled.Text`
  font-family: Montserrat-SemiBold;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
`;

const ModalContents = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgPrimary};
`;
