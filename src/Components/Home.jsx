import React, { useState } from 'react';

const Home = () => {
    const [additionalHeader, setAdditionalHeader] = useState('');
    const [fromAddress, setFromAddress] = useState('news@alifestyleshoppingguide.com');
    const [subject, setSubject] = useState('CONGRATS! You Can Get $100 Ace-Hardware-Rewards...!');
    const [body, setBody] = useState('Thank you, Ace-Hardware');
    const [preview, setPreview] = useState('demo@demo.com');
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
        <div>
           hello
        </div>
    );
};

export default Home;
