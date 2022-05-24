import React from 'react'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";


import {Controlled as CodeMirror} from 'react-codemirror2';
export default function Editor(props) {
    const {
        language,
        display,
        onchange,
        value
    } = props;
  return (
    <div className="editor-container">
        <div className="editor-title">
            {display}
            <button className="">O/C</button>
        </div>
        <CodeMirror
            value={value}
            className="code-mirror-wrapper"
            options={{
                mode: language,
                lineNumbers: true,
                lineWrapping: true,
                lint: true,
                theme: 'material'
            }}
            onBeforeChange={(editor, data, value) => {
                onchange(value)
            }}
            
        />
    </div>
  )
}
