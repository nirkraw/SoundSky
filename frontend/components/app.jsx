import React from 'react';
import HeaderContainer from "./header/header_container";
import { AuthRoute } from '../utils/route_util';
import Modal from './modal/modal';

const App = () => {
  
    return(
    <div>
     <Modal />
     <HeaderContainer />
    </div>
    )
};

export default App; 