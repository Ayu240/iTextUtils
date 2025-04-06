import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleUppercaseSelected = () => {
        const textarea = document.getElementById('myBox');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        if (start !== end) {
            const selectedText = text.substring(start, end);
            const uppercaseText = selectedText.toUpperCase();
            let newText = text.substring(0, start) + uppercaseText + text.substring(end);
            setText(newText);
            props.showAlert("Selected text converted to uppercase!", "success");
        } else {
            props.showAlert("No text selected!", "danger");
        }
    }
    const handleLowercaseSelected = () => {
        const textarea = document.getElementById('myBox');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        if (start !== end) {
            const selectedText = text.substring(start, end);
            const lowercaseText = selectedText.toLowerCase();
            let newText = text.substring(0, start) + lowercaseText + text.substring(end);
            setText(newText);
            props.showAlert("Selected text converted to uppercase!", "success");
        } else {
            props.showAlert("No text selected!", "danger");
        }
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleDeleteSelected = () => {
        const textarea = document.getElementById('myBox');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        if (start !== end) {
            let newText = text.substring(0, start) + text.substring(end);
            setText(newText);
            props.showAlert("Selected text deleted!", "success");
        } else {
            props.showAlert("No text selected!", "danger");
        }
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#23114e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert selected area to Uppercase </button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleUppercaseSelected}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleLowercaseSelected}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleDeleteSelected}>Remove Selected Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}