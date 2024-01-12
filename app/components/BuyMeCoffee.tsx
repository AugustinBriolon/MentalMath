'use client';

import { useEffect } from 'react';

const BuyMeCoffee = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-name', 'BMC-Widget');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    script.setAttribute('data-id', 'augustinbriolon');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', 'This website is free to use. Do you want to help support it?');
    script.setAttribute('data-color', '#415ac1');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');
    script.async = true;

    script.onload = () => {
      const evt = document.createEvent('Event');
      evt.initEvent('DOMContentLoaded', false, false);
      window.dispatchEvent(evt);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      const widgetBtn = document.getElementById('BMC-WBtn');
      if (widgetBtn) {
        document.body.removeChild(widgetBtn);
      }
    };
  }, []);

  return null;
};

export default BuyMeCoffee;
