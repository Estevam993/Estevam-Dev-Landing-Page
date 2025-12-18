'use client';

import {FormEvent, useState} from 'react';
import {IconSend} from "@tabler/icons-react";

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, name, message}),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        throw new Error();
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center lg:items-end gap-2 h-full w-full max-w-[28rem] lg:max-w-[38rem]"
    >
      <input
        type="email"
        placeholder="Your E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 w-full cursor-pointer bg-white text-black placeholder:text-gray-500 placeholder:italic"
      />
      <input
        type="text"
        placeholder="How you prefer to be called"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 w-full cursor-pointer bg-white text-black placeholder:text-gray-500 placeholder:italic"
      />
      <textarea
        placeholder="Your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border p-2 min-h-10 w-full cursor-pointer bg-white text-black placeholder:text-gray-500 placeholder:italic"
      />
      <button
        type="submit"
        className={`
           w-[15rem] px-4 py-2
        text-white
           border-2 border-transparent 
           cursor-pointer hover:scale-105 ease-in-out transition duration-150
       `}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' :
          (
            <div className="flex items-center justify-center gap-4 w-full">
              <IconSend/>
              <div>Send Message</div>
            </div>
          )}
      </button>
      {status === 'error' && <p className="text-red-600">Error sending. Please try again.</p>}
      {status === 'success' && <p className="text-green-600">Message sent successfully</p>}
    </form>
  );
}
