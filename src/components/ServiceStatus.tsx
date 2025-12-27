import { useState, useEffect } from 'react';
import axios from 'axios';

interface StatusData {
  status: string;
  timestamp?: string;
}

const ServiceStatus = () => {
  const [status, setStatus] = useState<'online' | 'offline' | 'loading'>('loading');
  const [lastChecked, setLastChecked] = useState<string>('');

  const getStatusData = async () => {
    try {
// ✅ CORRECT - Use same env var as Contact
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
fetch(`${apiBaseUrl}/status`)

      const response = await axios.get<StatusData>(apiUrl, {
        timeout: 5000, // 5 second timeout
      });

      // Check if response has data
      if (response.data) {
        setStatus('online');
        setLastChecked(new Date().toLocaleTimeString());
      } else {
        setStatus('offline');
      }
    } catch (error) {
      console.error('Failed to get status from backend:', error);
      setStatus('offline');
    }
  };

  useEffect(() => {
    // Initial check
    getStatusData();

    // Check every 30 seconds
    const interval = setInterval(getStatusData, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'offline':
        return 'bg-red-500';
      case 'loading':
        return 'bg-yellow-500 animate-pulse';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'online':
        return 'Service Online';
      case 'offline':
        return 'Service Offline';
      case 'loading':
        return 'Checking...';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
        <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
        <span className="text-sm font-medium">
          {getStatusText()}
        </span>
        {lastChecked && status === 'online' && (
          <span className="text-xs text-gray-500">
            {lastChecked}
          </span>
        )}
      </div>
    </div>
  );
};

export default ServiceStatus;