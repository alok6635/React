import React from 'react';
// use state-
import InputWithClsBased from './components/1-UseState/InputWithClsBased';
import InputWithFtnBased from './components/1-UseState/InputWithFtnBased';
import AdvanceInputFtn from './components/1-UseState/advance/AdvanceInputFtn';
import AdvanceInputCls from './components/1-UseState/advance/AdvanceInputCls';
// use effect-
import InputWithClass from './components/2-useEffect/InputWithClass';
import InputWithFunction from './components/2-useEffect/InputWithFunction';
function App() {
  return (
    <>
{/*############################ use state- */}
    {/* <InputWithClsBased/> */}
    {/* <InputWithFtnBased/> */}
    {/* <AdvanceInputFtn/> */}
    {/* <AdvanceInputCls/> */}

{/*######################## //use effect- */}
    {/* <InputWithClass/> */}
    <InputWithFunction/>
</>
  );
}

export default App;
