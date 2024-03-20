import { useEffect, useState } from 'react';

export default function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/hello/')
            .then((res) => res.json())
            .then((data) => {
                setMessage(data.message);
            });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}