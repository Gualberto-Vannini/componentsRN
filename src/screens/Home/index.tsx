import React, {useState} from 'react';
import {View} from 'react-native';
import Card from '../../components/Card/index';
import {THEME_TYPE} from '../../utils/helpers/cardModel';
import TextInput from '../../components/InputText';
import {INPUT_FIELDS_TYPE} from '../../components/InputText/inputModel';

const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  const textSample =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  return (
    <>
      <View>
        <Card themeCard={THEME_TYPE.THERAPHIST} content={textSample} />
      </View>
      <View style={{marginLeft: 50}}>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          inputType={INPUT_FIELDS_TYPE.FIRST_NAME}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          inputType={INPUT_FIELDS_TYPE.PASSWORD}
        />
        <TextInput
          multiline
          value={aboutMe}
          onChangeText={setAboutMe}
          inputType={INPUT_FIELDS_TYPE.ABOUT_ME}
        />
      </View>
    </>
  );
};

export default Home;
