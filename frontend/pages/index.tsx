// frontend/pages/index.tsx
// The main page of the Next.js app. Renders a simple hello world with an icon.
// This file does not contain complex business logic.

import { FC } from 'react';
import { Sparkles } from 'lucide-react';

const Home: FC = () => {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>
        <Sparkles style={{ marginRight: '0.5rem' }} />
        AI Android Mobile Class
      </h1>
      <p>Welcome to your Next.js frontend.</p>
    </main>
  );
};

export default Home;
