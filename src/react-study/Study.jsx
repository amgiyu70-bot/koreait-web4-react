import React from 'react'
import UseState01 from './02-useState/UseState01';
import UseState02 from './02-useState/UseState02';
import UseState03 from './02-useState/UseState03';
import UseState04 from './02-useState/UseState04';
import UseState05 from './02-useState/UseState05';
import UseState06 from './02-useState/UseState06';
import Usestate07 from './02-useState/Usestate07';
import UseState08 from './02-useState/UseState08';
import UseState09 from './02-useState/UseState09';
import NavBar from './02-useState/NavBar/NavBar';
import ModalContainer from './02-useState/Modal/ModalContainer';
import Test01 from './test/Test01';
import Login from './test/Test02';
import Test03 from './test/Test03';
import UseEffect01 from './03-useEffect/UseEffect01';
import Unmount from './03-useEffect/Unmount/Unmount';
import UseEffect02 from './03-useEffect/UseEffect02';
import UseEffect03 from './03-useEffect/UseEffect03';
import UseEffect04 from './03-useEffect/UseEffect04';
import Memerform from './test/Memerform';
import JoinForm from './test/JoinForm';
import UseRef01 from './04-useRef/UseRef01';
import UseRef02 from './04-useRef/UseRef02';
import Emotion01 from './Emotion/Emotion01';
import Emotion02 from './Emotion/Emotion02';
import Router01 from './ReactRouter/Router01/Router01';
import Router02 from './ReactRouter/Router02/Router02';
import Router03 from './ReactRouter/Router03/Router03';
import Router04 from './ReactRouter/Router04/Router04';
import Router05 from './ReactRouter/Router05/Router05';
import Zustand01 from './Zustand/Zustand01';
import Zustand02 from './Zustand/Zustand02';

export default function Study() {

    const stateStudy = {
        1: <UseState01 />,
        2: <UseState02 />,
        3: <UseState03 />,
        4: <UseState04 />,
        5: <UseState05 />,
        6: <UseState06 />,
        7: <Usestate07 />,
        8: <UseState08 />,
        9: <UseState09 />,
        10: <NavBar />,
        11: <ModalContainer />,
        12: <Test01 />,
        13: <Login />,
        14: <Test03 />,
        15: <UseEffect01 />,
        16: <Unmount />,
        17: <UseEffect02 />,
        18: <UseEffect03 />,
        19: <UseEffect04 />,
        20: <Memerform />,
        21: <JoinForm />,
        22: <UseRef01 />,
        23: <UseRef02 />,
        24: <Emotion01 />,
        25: <Emotion02 />,
        26: <Router01 />,
        27: <Router02 />,
        28: <Router03 />,
        29: <Router04 />,
        30: <Router05 />,
        31: <Zustand01 />,
        32: <Zustand02 />,

    }
  return stateStudy[32];
}
