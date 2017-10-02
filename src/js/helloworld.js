import React from "react";
import ReactDOM from "react-dom";

class FirstClass extends React.Component{

    render()
    {
        var Title = 'This is my first Application';
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>{Title}</h2>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<FirstClass/>,app);
