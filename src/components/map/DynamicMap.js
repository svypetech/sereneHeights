// components/DynamicMap.js
import dynamic from 'next/dynamic';

const MapLibreComponent = dynamic(
  () => import('./MapLibreComponent'),
  { 
    ssr: false, // Disable server-side rendering for this component
    loading: () => (
      <div 
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f3f4f6',
          color: '#6b7280',
          fontSize: '16px'
        }}
      >
        Loading map...
      </div>
    )
  }
);

export default MapLibreComponent;