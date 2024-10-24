import React from 'react';

export default async function EnvTest() {
  // Server-side environment variables
  const mailgunApiKey = process.env.MAILGUN_API_KEY;
  const mailgunDomain = process.env.MAILGUN_DOMAIN;
  
  // Client-side environment variable (NEXT_PUBLIC_)
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Environment Variables Test</h2>
      
      <div className="space-y-2">
        <h3 className="font-semibold">Server-side Variables:</h3>
        <p>MAILGUN_API_KEY: {mailgunApiKey ? '✅ Set' : '❌ Not set'}</p>
        <p>MAILGUN_DOMAIN: {mailgunDomain ? '✅ Set' : '❌ Not set'}</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Client-side Variables:</h3>
        <p>NEXT_PUBLIC_PLAUSIBLE_DOMAIN: {plausibleDomain || 'Not set'}</p>
      </div>

      <div className="bg-yellow-50 p-4 rounded-md">
        <p className="text-yellow-800 text-sm">
          Note: For security, we only show if server-side variables are set, not their actual values.
          The client-side variable (NEXT_PUBLIC) value is shown since it's meant to be public.
        </p>
      </div>
    </div>
  );
}