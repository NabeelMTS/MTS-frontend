import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        success: {
          style: {
            background: '#4CAF50',
          },
        },
        error: {
          style: {
            background: '#F44336',
          },
        },
      }}
    />
  );
};

export default ToastProvider;
