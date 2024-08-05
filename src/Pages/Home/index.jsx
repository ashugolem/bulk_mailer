import React, { useState } from 'react';
import './style.css';
const Home = () => {
    const [email, setEmail] = useState({
        from: '',
        subject: '',
        subjectEncoding: 'UTF8-B',
        to: '',
        toEncoding: 'UTF8-B',
        body: '',
        format: '',
        transferEncoding: 'quoted-printable',
        encoding: 'UTF-8',
        message: ''
    });

    const [smtp, setSmtp] = useState('');
    const [formState, setFormState] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '0',
        input9: '',
        input10: 'No',
        input11: 'NO',
        intervalTime: ''
    });

    const handleEmailChange = (e) => {
        const { name, value, type } = e.target;
        setEmail((prevEmail) => ({
            ...prevEmail,
            [name]: value
        }));
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const test = () => {
        console.log(email);
    };

    return (
        <div className='d-flex justify-content-between m-auto gap-5'>
            <div className="containers px-5 d-flex align-items-center justify-content-start" style={{ maxWidth: "20%" }}>
                <textarea name="smtp" id="smtp" value={smtp} onChange={(e) => setSmtp(e.target.value)} rows={10} style={{ minWidth: "50%" }}></textarea>
            </div>
            <div className="email-form " style={{ minWidth: "30%" }}>
                <div>
                    <label>From</label>
                    <input
                        type="text"
                        name="from"
                        value={email.from}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label>Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={email.subject}
                        onChange={handleEmailChange}
                    />
                    <div className="radio-group w-50 d-flex justify-content-between align-items-center">
                        <div className="input1">
                            <input type="radio" value="UTF8-Q" name="subjectEncoding" onChange={handleEmailChange} checked={email.subjectEncoding === 'UTF8-Q'} /> UTF8-Q
                        </div>
                        <div className="input2">
                            <input type="radio" value="UTF8-B" name="subjectEncoding" onChange={handleEmailChange} checked={email.subjectEncoding === 'UTF8-B'} /> UTF8-B
                        </div>
                        <div className="input3">
                            <input type="radio" value="UTF8-B" name="subjectEncoding" onChange={handleEmailChange} checked={email.subjectEncoding === 'UTF8-B'} /> RESET
                        </div>
                    </div>
                </div>
                <div>
                    <div className="to">
                        <label>To</label>
                        <input
                            type="text"
                            name="to"
                            value={email.to}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="radio-group w-50 d-flex justify-content-between align-items-center">
                        <div className="input1">
                            <input type="radio" value="UTF8-Q" name="toEncoding" onChange={handleEmailChange} checked={email.toEncoding === 'UTF8-Q'} /> UTF8-Q
                        </div>
                        <div className="input2">
                            <input type="radio" value="UTF8-B" name="toEncoding" onChange={handleEmailChange} checked={email.toEncoding === 'UTF8-B'} /> UTF8-B
                        </div>
                        <div className="input3">
                            <input type="radio" value="UTF8-B" name="toEncoding" onChange={handleEmailChange} checked={email.toEncoding === 'UTF8-B'} /> RESET
                        </div>
                    </div>
                </div>
                <div>
                    <label>Body</label>
                    <textarea
                        rows={4}
                        name="body"
                        value={email.body}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="format-group d-flex justify-content-between align-items-center">
                    <label>
                        <input type="radio" name="format" value="Plain" onChange={handleEmailChange} checked={email.format === 'Plain'} /> Plain
                    </label>
                    <label>
                        <input type="radio" name="format" value="Html" onChange={handleEmailChange} checked={email.format === 'Html'} /> HTML
                    </label>
                    <label>
                        <input type="radio" name="format" value="MIME" onChange={handleEmailChange} checked={email.format === 'MIME'} /> MIME
                    </label>
                    <div className="btn btn-primary mx-2">Preview</div>
                    <div className="btn btn-success mx-2">EDITOR</div>
                </div>
                <div className="encoding-group">
                    <p className='fw-bold'>Encoding</p>
                    <div className="container w-100 d-flex justify-content-between align-items-center">
                        <div className="w-50">
                            <select name="encoding" value={email.encoding} onChange={handleEmailChange}>
                                <option value="UTF-8">UTF-8</option>
                                <option value="ISO-8859-1">ISO-8859-1</option>
                            </select>
                        </div>
                        <div className="w-50">
                            <select name="transferEncoding" value={email.transferEncoding} onChange={handleEmailChange}>
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
                        name="message"
                        value={email.message}
                        onChange={handleEmailChange}
                        placeholder="Write your message"
                    />
                </div>
            </div>
            <div className="containers px-5" style={{ maxWidth: "40%" }}>
                <div className="card my-3">
                    <div className="card-header bg-primary text-white">
                        Mode
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <div className="d-flex justify-content-between w-50">
                            <button className="btn btn-primary mx-1" onClick={test}>Test</button>
                            <button className="btn btn-success mx-1">Bulk</button>
                            <button className="btn btn-info mx-1">Manual</button>
                        </div>
                    </div>
                </div>

                <div className="card my-3">
                    <div className="card-header bg-primary text-white">
                        Settings
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={formState.input1}
                                        name="input1"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={formState.input2}
                                        name="input2"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={formState.input3}
                                        name="input3"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={formState.input4}
                                        name="input4"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={formState.input5}
                                        name="input5"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={formState.input6}
                                        name="input6"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        value={formState.input7}
                                        name="input7"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <select
                                        className="form-control mb-2"
                                        value={formState.input8}
                                        name="input8"
                                        onChange={handleChange}
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                            </div>
                            <textarea
                                className="form-control mb-2"
                                rows="3"
                                value={formState.input9}
                                name="input9"
                                onChange={handleChange}
                            />
                            <div className="row">
                                <div className="col">
                                    <select
                                        className="form-control mb-2"
                                        value={formState.input10}
                                        name="input10"
                                        onChange={handleChange}
                                    >
                                        <option value="NO">NO</option>
                                        <option value="YES">YES</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select
                                        className="form-control mb-2"
                                        value={formState.input11}
                                        name="input11"
                                        onChange={handleChange}
                                    >
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card my-3">
                    <div className="card-header bg-primary text-white">
                        Space Sending
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Interval Time"
                                value={formState.intervalTime}
                                name="intervalTime"
                                onChange={handleChange}
                            />
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary mx-2">Start</button>
                                <button className="btn btn-danger mx-2">Stop</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
