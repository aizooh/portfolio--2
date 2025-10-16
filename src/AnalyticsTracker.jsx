import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // **Required for React Router**

const GA_TRACKING_ID = 'G-7CFLKJ42EG'; // Your Measurement ID

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the gtag function has loaded from the script in index.html
    if (window.gtag) {
      console.log('GA Tracking: Page view sent for', location.pathname);
      
      // Send the 'page_view' event
      window.gtag('config', GA_TRACKING_ID, {
        'page_path': location.pathname + location.search, // Path includes query params
        'page_title': document.title, // Use the current document title
      });
    }
  }, [location.pathname, location.search]); // Trigger every time the URL path or query parameters change

  return null; // This component is only for tracking, so it renders nothing
};

export default AnalyticsTracker;