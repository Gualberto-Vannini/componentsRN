# COMPONENTS - RN - 2023

Using my previous repository [template RN](https://github.com/Gualberto-Vannini/template_RN_2023) I am creating 2 components following a personal volunteer project about a Domestic Violence Reporting App:
* [INPUT TEXT](#input-text)
* [REUSABLE CARD](#reusable-card)


Video Sample             |  Error Message Sample
:-------------------------:|:-------------------------:
![](https://user-images.githubusercontent.com/22340454/221224033-d4904d0a-80e6-4913-980c-938345fddac3.mp4)  |  ![](https://user-images.githubusercontent.com/22340454/221230144-e54ecf5d-41a5-409b-b6cc-34d76525f5e9.png)



# INPUT TEXT

[The component](https://github.com/Gualberto-Vannini/componentsRN/blob/main/src/components/InputText/index.tsx) is a reusable component in order to cover:
- First Name
- Last Name
- Report
- Password
- About me
- Therapist description

Features:
1. [Min and Max character](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/components/InputText/inputModel.ts#L8-L16)
2. [Minimize props](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/screens/Home/index.tsx#L23-L25)  through dedicated [enum](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/components/InputText/inputModel.ts#L1-L6) 
3. [Custom hook to fill datas](https://github.com/Gualberto-Vannini/componentsRN/blob/main/src/hooks/useInputText.ts)
4. [Define text styles with styled-system and styled-components](https://github.com/Gualberto-Vannini/componentsRN/blob/main/src/components/TextInput/index.tsx)
5. [Extend TextInputProps](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/components/InputText/index.tsx#L17)
6. [Extend props](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/components/InputText/index.tsx#L25) to handle with hook the character lenght analysis
7. [Having fun with typescript props](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/components/InputText/index.tsx#L46) using [pick propriety](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
8. [Strings for errors](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/translations/textInput/index.ts#L31-L33) handles already in the [component](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/components/InputText/index.tsx#L20)
9. [Accepting new styles from parent](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/components/InputText/index.tsx#L18)
10. [Error Accept](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/components/InputText/index.tsx#L20)
11. [Theme](https://github.com/Gualberto-Vannini/componentsRN/tree/main/src/theme)

**WIP:**
- Api connection

# REUSABLE CARD
[The component](https://github.com/Gualberto-Vannini/componentsRN/blob/main/src/components/Card/index.tsx)
1. 3 possibile card types [Therapist | Report | Appointment](https://github.com/Gualberto-Vannini/componentsRN/blob/8eeb7b14ebd16925fe33ecdd309c2901b4a87765/src/utils/helpers/cardModel.ts#L1-L4)
2. Different [Tag Lines](https://github.com/Gualberto-Vannini/componentsRN/blob/main/src/components/TagLine/index.tsx), 
3. [Icons](https://github.com/Gualberto-Vannini/componentsRN/tree/main/src/components/Card/icons) and text.
4. [Collapsable text](https://github.com/Gualberto-Vannini/componentsRN/blob/main/src/components/CollapsableText/index.tsx)
5. [Theme](https://github.com/Gualberto-Vannini/componentsRN/tree/main/src/theme)

**WIP:**
- Api connection
- Abstract more the obj data to pass
- Abstract more the possible card types



## Packages installed:

For the [Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/):
- @react-navigation/bottom-tabs

For the [Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)
- @react-navigation/stack
- react-native-gesture-handler

For the [Navigation](https://reactnavigation.org/docs/getting-started/)
- @react-navigation/native

To handle better the Safe Area (in particular better Android experience)
- react-native-safe-area-context

For enabling the SVG
- react-native-svg
- react-native-svg-transformer

[REDUX TOOLKIT](https://github.com/reduxjs/redux-toolkit)
- yarn add @types/react-redux

[REACT REDUX](https://react-redux.js.org/introduction/getting-started)
- yarn add react-redux

[REDUX PERSIST](https://github.com/rt2zz/redux-persist)
- yarn add redux-persist

[ASYNC-STORAGE](https://react-native-async-storage.github.io/async-storage/docs/install/)
- yarn add @react-native-async-storage/async-storage

[AXIOS](https://github.com/axios/axios)
- yarn add axios

[CIRCULAR DEPENDENCIES](https://github.com/acrazing/dpdm)
Check if Redux is creating Circular Dependencies
- dpdm
- `yarn dpdm ./src/* --circular --exit-code circular:1 --warning=false`

[STYLED COMPONENTS](https://github.com/styled-components/styled-components)
- Style your component with a custom theme app wrapper

[STYLED SYSTEM](https://styled-system.com)
- Style props for rapid UI development

[REACT-NATIVE-RENAME](https://github.com/junedomingo/react-native-rename)
- Rename the whole codebase just executing `npx react-native-rename "YOUR_PROJECT_NAME"`

## Tools

2. [Xcode](#xcode-setup)
3. [Android Studio](#android-studio-setup)

## Before you begin

1. Ensure your local machine is set up for React Native development. For up to date instructions on how to do this, visit the setup instructions on the official [React Native documentation](https://reactnative.dev/docs/environment-setup).

## Xcode Setup

You need at least Xcode 13, this is to ensure you have access to iOS 15. You can download from [here](https://developer.apple.com/xcode/resources/)

## Android Studio Setup

You need to install at least android studio canary 5. You can download from [here](https://developer.android.com/studio/archive)

## Installation

1. Clone this repo to your local machine

2. Install `node_modules` by running `yarn` (you may need to [install yarn](https://yarnpkg.com/getting-started/install) globally first).

3. Install pods by running `cd ./ios && pod install && cd ..`

4. clean Android by running `cd android && ./gradlew clean && cd ..`

### Running the app with react-native CLI

- Run the android app with `yarn android` or the iOS app with `yarn ios`. This will start the metro development server and run the app on a simulator.

### Running the app from XCode or Android Studio

For debugging iOS or Android specific bugs, it can be useful to run the app from XCode or Android Studio.

1. For XCode in the tab navigator (Product→ Build) or using the shortcut `⌘ + B`.

2. For Android Studio - navigate to the React Native App from Android Studio and open the `./android` folder. Wait for the Gradle Sync to finish and then navigate to Run -> Run App.

## Debugging

For debugging, we use [React Native Debugger](https://github.com/jhen0409/react-native-debugger). After this has been installed, open the debugger and run the app. You should see the JavaScript logs appear in the debugger console. You can execute and runs using the shortcut `⌘ + D`.
