import React from 'react';
import ReactDOM from 'react-dom';

// const Hello = props => {
//     return (
//         <div>
//             <h1>Hello, {props.name}!</h1>
//         </div>
//     )
// }

// ReactDOM.render(<Hello name="Jeffrey"/>, document.querySelector('#root'));

const App = props => {
   return( <div>
        <Hello name="Jeffe"/>
    </div>
   )
}

class Hello extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));