import { Route, Routes } from 'react-router-dom';
import HelloComponent from './components/FirstScreen/FirstScreen';
import MainScreen from './components/MainScreen/MainScreen';
import UserCard from './components/User/userCard';
import NoMatch from './components/404/NoMatch';

function App() {
    //{
//    "env": {
//        "browser": true,
//        "es2021": true
//    },
//    "extends": [
////        "plugin:react/recommended",
////        "standard-with-typescript",
////        "airbnb-base",
////        "airbnb-typescript/base"
//    ],
//    "overrides": [
//    ],
//    "parserOptions": {
//        "ecmaVersion": "latest",
//        "sourceType": "module",
//        "project": "./tsconfig.json"
//    },
//    "plugins": [
//        "react"
//    ],
//    "rules": {
//        "import/prefer-default-export": "off",
//        "no-param-reassign": "off",
//        "import/extensions":"off",
//        "no-useless-catch": "off",
//        "@typescript-eslint/explicit-function-return-type": "off",
//        "@typescript-eslint/strict-boolean-expressions": "off",
//        "@typescript-eslint/no-misused-promises": "off",
//        "@typescript-eslint/no-floating-promises": "off",
//        "react/react-in-jsx-scope": "off",
//        "@typescript-eslint/no-non-null-assertion": "off",
//        "linebreak-style": 0
//    }
//}

    return (
        <Routes>
            <Route path='/' element={<HelloComponent/>}></Route>
            <Route path='/main' element={<MainScreen/>}></Route>
            <Route path='/user/:id' element={<UserCard/>}></Route>
            <Route path='*' element={<NoMatch/>}></Route>
        </Routes>
  );
}

export default App;
