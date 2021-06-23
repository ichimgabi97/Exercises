import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = { language: 'english', color: 'blue' }

    onLanguageChange = (language, color) => {
        this.setState({ language, color });
    }

    render(){
        return(
            <div className="ui container">
                <div>
                    Select a language: 
                    <i className="flag us" onClick={() => this.onLanguageChange('english', 'blue') }/>
                    <i className="flag ro" onClick={() => this.onLanguageChange('rumanian', 'green') }/>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;