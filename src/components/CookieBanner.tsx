'use client';

import CookieConsent from 'react-cookie-consent';

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="glai-baan-consent"
      style={{
        background: '#1a1a1a',
        borderTop: '1px solid rgba(201,132,58,0.3)',
        color: '#f5efe6',
      }}
      buttonStyle={{
        background: '#c9843a',
        color: '#1a1a1a',
        fontWeight: '600',
        borderRadius: '2px',
        padding: '8px 20px',
      }}
      declineButtonStyle={{
        background: 'transparent',
        border: '1px solid rgba(201,132,58,0.4)',
        color: '#f5efe6',
        borderRadius: '2px',
        padding: '8px 20px',
      }}
    >
      We use cookies to enhance your experience. By continuing to browse, you
      consent to our use of cookies.
    </CookieConsent>
  );
}
