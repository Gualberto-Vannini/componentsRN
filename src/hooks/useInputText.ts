import {useEffect, useState} from 'react';
import {INPUT_FIELDS} from '../translations/textInput';
import {
  INPUT_FIELDS_TYPE,
  MIN_CHAR,
  MAX_CHAR,
} from '../components/InputText/inputModel';

function useInputText(inputType: string, textInput?: number) {
  const [label, setLabel] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [minChar, setMinChar] = useState(0);
  const [maxChar, setMaxChar] = useState(0);
  const [minAccepted, setMinAccepted] = useState(false);
  const [maxAccepted, setMaxAccepted] = useState(false);

  //input rules
  // 'first_name' => 'string|min:3|max:150',
  // 'last_name' => '|string|min:3|max:125',
  // 'bio' => 'string|min:3',
  // 'email' => 'email|max:255',
  // 'gender' => 'string|in:M,F,O',
  // 'password' => 'string|min:6',
  // 'birthdate' => 'string',
  // 'user_image' => 'nullable|mimes:jpeg,jpg,png|max:2048',

  useEffect(() => {
    switch (inputType) {
      case INPUT_FIELDS_TYPE.FIRST_NAME:
        setLabel(INPUT_FIELDS.first_name);
        setPlaceholder(INPUT_FIELDS.ph_first_name);
        setMinChar(MIN_CHAR.S);
        setMaxChar(MAX_CHAR.S);
        setMinAccepted(textInput ? textInput >= minChar : false);
        setMaxAccepted(textInput ? textInput >= maxChar : false);
        break;
      case INPUT_FIELDS_TYPE.LAST_NAME:
        setLabel(INPUT_FIELDS.last_name);
        setPlaceholder(INPUT_FIELDS.ph_last_name);
        setMinChar(MIN_CHAR.S);
        setMaxChar(MAX_CHAR.S);
        setMinAccepted(textInput ? textInput >= minChar : false);
        setMaxAccepted(textInput ? textInput >= maxChar : false);
        break;
      case INPUT_FIELDS_TYPE.ABOUT_ME:
        setLabel(INPUT_FIELDS.about_me);
        setPlaceholder(INPUT_FIELDS.ph_about_me);
        setMinChar(MIN_CHAR.S);
        setMaxChar(MAX_CHAR.L);
        setMinAccepted(textInput ? textInput >= minChar : false);
        setMaxAccepted(textInput ? textInput >= maxChar : false);
        break;
      case INPUT_FIELDS_TYPE.PASSWORD:
        setLabel(INPUT_FIELDS.password);
        setPlaceholder(INPUT_FIELDS.ph_password);
        setMinChar(MIN_CHAR.M);
        setMaxChar(MAX_CHAR.S);
        setMinAccepted(textInput ? textInput >= minChar : false);
        setMaxAccepted(textInput ? textInput >= maxChar : false);
        break;
      default:
        break;
    }
  }, [inputType, maxChar, minChar, textInput]);

  return {label, placeholder, minAccepted, maxAccepted};
}

export default useInputText;
