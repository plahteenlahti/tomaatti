import styled from 'styled-components/native';

export const LargeTitle = styled.Text`
  font-size: 34px;
  line-height: 41px;
  color: ${({ theme }) => theme.accentColor};
  font-family: ${({ theme }) => theme.fontBold};
  font-weight: bold;
`;

export const SafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.bgPrimary};
  flex: 1;
`;
