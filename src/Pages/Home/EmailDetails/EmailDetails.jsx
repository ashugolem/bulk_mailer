// EmailForm.js
import React, { useState } from 'react';
import './style.css'; // Import the CSS file

const EmailDetails = () => {
    // state management and event handlers
    const [additionalHeader, setAdditionalHeader] = useState('');
    const [fromAddress, setFromAddress] = useState('Enter From address');
    const [to, setTo] = useState('Enter To address');
    const [body, setBody] = useState('Write your body');
    const [preview, setPreview] = useState();
    const [encoding, setEncoding] = useState('UTF-8');
    const [transferEncoding, setTransferEncoding] = useState('quoted-printable');
    const [message, setMessage] = useState('');

    const handleEncodingChange = (event) => {
        setEncoding(event.target.value);
    };

    const handleTransferEncodingChange = (event) => {
        setTransferEncoding(event.target.value);
    };
    return (
        <div className="email-form">
            <div>
                <label>From</label>
                <input
                    type="text"
                    value={additionalHeader}
                    onChange={(e) => setAdditionalHeader(e.target.value)}
                />
            </div>
            <div>
                <label>Subject</label>
                <input
                    type="text"
                    value={fromAddress}
                    onChange={(e) => setFromAddress(e.target.value)}
                />
                <div className="radio-group w-50 d-flex justify-content-between align-items-center">
                    <div className="input1">
                        <input type="radio" value="UTF8-Q" name="subjectEncoding" /> UTF8-Q
                    </div>
                    <div className="input2">
                        <input type="radio" value="UTF8-B" name="subjectEncoding" /> UTF8-B
                    </div>
                    <div className="input3">
                        <input type="radio" value="UTF8-B" name="subjectEncoding" defaultChecked /> RESET
                    </div>
                </div>
            </div>
            <div>
                <div className="to">
                    <label>To</label>
                    <input
                        type="text"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                </div>
                <div className="radio-group w-50 d-flex justify-content-between align-items-center">
                    <div className="input1">
                        <input type="radio" value="UTF8-Q" name="toEncoding" /> UTF8-Q
                    </div>
                    <div className="input2">
                        <input type="radio" value="UTF8-B" name="toEncoding" /> UTF8-B
                    </div>
                    <div className="input3">
                        <input type="radio" value="UTF8-B" name="toEncoding" defaultChecked /> RESET
                    </div>
                </div>
            </div>
            <div>
                <label>Body</label>
                <textarea
                    rows={4}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <div className="format-group d-flex justify-content-between align-items-center">
                <label>
                    <input type="radio" name="format" value="Plain" /> Plain
                </label>
                <label>
                    <input type="radio" name="format" value="Html" /> HTML
                </label>
                <label>
                    <input type="radio" name="format" value="MIME" /> MIME
                </label>
                <div className="btn btn-primary">Preview</div>
                <div className="btn btn-success">EDITOR</div>
            </div>
            <div className="encoding-group">
                <p className='fw-bold'>Encoding</p>
                <div className="container w-100 d-flex justify-content-between align-items-center">
                    <div className="w-50">
                        <select value={encoding} onChange={handleEncodingChange}>
                            <option value="UTF-8">UTF-8</option>
                            <option value="ISO-8859-1">ISO-8859-1</option>
                        </select>
                    </div>
                    <div className="w-50">
                        <select value={transferEncoding} onChange={handleTransferEncodingChange}>
                            <option value="quoted-printable">quoted-printable</option>
                            <option value="base64">base64</option>
                        </select>

                    </div>
                </div>
            </div>
            <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`Write your message`}
                />
            </div>
        </div>
    );
};

export default EmailDetails;
