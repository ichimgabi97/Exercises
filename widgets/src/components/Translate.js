import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options =[
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Romanian',
        value: 'ro'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Chinese (Traditional)',
        value: 'zh-TW'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)} 
                    />
                </div>
            </div>
            <Dropdown 
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a language"
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert
                text={text}
                language={language}
            />
        </div>
    );
};

export default Translate;