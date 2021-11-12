import React, {Component} from 'react';
// import NamesList from './components/NamesList';
// import DisplayNames from './components/DisplayNames';
import AlertUser from './components/AlertUser';

 function App() {
    return(
        <div className='App'>
            <button>AlertUser</button>
        </div>
    )
}


// class App extends Component {
//     state = {
//         firstName: 'Reggie',
//         lastName: 'White'
//     }
//     render() {
//         return(
//             <div className='App'>
//                 <DisplayNames 
//                 firstName ={this.state.firstName}
//                 lastName ={this.state.lastName} 
//                 />
//             </div>
//         );
//     }
// }


// class App extends Component {
//     state = {
//         names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
//     }
//     render() {
//         return (
//             <div className='App'>
//                 <NamesList names={this.state.names} />
//             </div>
//         );
//     }
// }

export default App;

  