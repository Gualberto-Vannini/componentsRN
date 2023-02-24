import React, {useCallback, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import useActions from '../../hooks/useActions';
import {agendaActions} from '../../redux/agenda/agenda';
import agendaSelectors from '../../redux/agenda/agendaSelector';
import styled from 'styled-components/native';
const TitleSampleTheme = styled.Text`
  font-family: ${({theme}) => theme.fonts['semi-bold']};
  color: ${props => props.theme.colors.black[100]};
  font-size: ${({theme}) => theme.space.xl};
  margin-bottom: ${({theme}) => theme.space.xl};
`;
const SubTitleSampleTheme = styled.Text`
  font-family: ${({theme}) => theme.fonts['semi-bold']};
  color: ${props => props.theme.colors.black[100]};
  font-size: ${({theme}) => theme.space.l};
  margin-bottom: ${({theme}) => theme.space.l};
  justify-content: center;
`;

// const StyledCard = styled(Card)`
//   border: none;
//   background-color: ${(props) => props.theme.colors.green};
//   height: 220px;
//   margin-bottom: ${(props) => props.theme.space.xxxl};
// `;

const Report = () => {
  //Dispatch a new Action
  const [loadAgenda] = useActions([agendaActions.loadAgenda]);

  //With The Selectors, calling the piece of Store that is need it.
  const titleAgenda = useSelector(agendaSelectors.title);
  const typeAgenda = useSelector(agendaSelectors.type);
  const price = useSelector(agendaSelectors.price);
  const key = useSelector(agendaSelectors.key);

  //Every New Page re-Load we are dispatching the loadAgenda Action and getting new values
  const loadAllAgendaData = useCallback(() => {
    loadAgenda();
  }, [loadAgenda]);

  useEffect(() => {
    loadAllAgendaData();
  }, [loadAllAgendaData]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleSampleTheme>GET A NEW REPORT</TitleSampleTheme>
      <SubTitleSampleTheme>
        Simple api with the whole reduxToolKit flow
      </SubTitleSampleTheme>
      <Text>title is {titleAgenda}</Text>
      <Text>type is {typeAgenda}</Text>
      <Text>price is {price}</Text>
      <Text>key is {key}</Text>
      <Button
        title="click here to get new Items from APIS"
        onPress={() => loadAllAgendaData()}
      />
    </View>
  );
};

export default Report;
