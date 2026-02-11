import Main from './mini-project/Main'
import MyProject from './bproject/MyProject'

export default function Check() {
 const chkList = {
         
         1: <Main />,
         2: <MyProject />,
 
     }
   return chkList[1];
}
