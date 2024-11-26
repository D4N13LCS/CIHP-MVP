import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

export default {
  title: 'pages/Signup',
  component: Signup,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Story />} />
          <Route path="/Login" element={Login} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

// História do componente
export const Default = () => <Signup />;
