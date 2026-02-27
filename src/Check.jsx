import Main from './mini-project/Main'
import MyProject from './bproject/MyProject'
import ReactStudy from './react-study/ReactStudy';
import New from './new-project/New';

export default function Check() {
 const chkList = {
         
         1: <Main />,
         2: <ReactStudy />,
         3: <MyProject />,
         4: <New />,
 
     }
   return chkList[3];
}
