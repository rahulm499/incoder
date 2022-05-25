import React, {useState} from 'react'
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
        value,
    } = props;
    const [open, setOpen] = useState(1);
  return (
    <div className={`editor-container ${open? '': 'collapsed'}`}>
        <div className="editor-title">
             <button className="expand-collapse-btn"
            type="button"
            onClick={() => onchange("")}
            title={"refresh"}>
                {'\u00ab'}
            </button>
            {display}
            
            <button className="expand-collapse-btn"
            type="button"
            onClick={() => setOpen(!open)}
            title={open}>
                /
            </button>

        </div>
        <CodeMirror
            value={value}
            className="code-mirror-wrapper CodeMirror"
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
