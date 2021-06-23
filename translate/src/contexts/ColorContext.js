import React from 'react';

const Context = React.createContext('blue');

export class ColorStore extends React.Component{
    state = { color: 'blue' }

    onColorChange = (color) => {
        this.setState({ color });
    }

    render(){
        return(
            <Context.Provider value={{ ...this.state, onColorChange: this.onColorChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;