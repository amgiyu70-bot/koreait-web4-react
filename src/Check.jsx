import Main from './mini-project/Main'
import MyProject from './bproject/MyProject'
import Study from './react-study/Study';

export default function Check() {
 const chkList = {
         
         1: <Main />,
         2: <Study />,
         3: <MyProject />,
 
     }
   return chkList[3];
}
