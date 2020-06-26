import React from 'react';
import styled from 'styled-components/native';
const TaskName = () => {
  return (
    <Container>
      <TaskTitle value="Write a new article" />
      <UpNext>next: short break</UpNext>
    </Container>
  );
};

export default TaskName;

const Container = styled.View`
  z-index: 10;
  margin-bottom: 30px;
`;

const TaskTitle = styled.TextInput`
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
  font-family: ${({ theme }) => theme.fontBold};
`;

const UpNext = styled.Text`
  margin-top: 10px;
  font-size: 13px;
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme.secondaryColor};
  font-family: ${({ theme }) => theme.fontMedium};
`;
