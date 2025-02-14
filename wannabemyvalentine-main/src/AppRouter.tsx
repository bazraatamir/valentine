import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // Adjust the import path as necessary
import Yes from './Yes'; // Adjust the import path as necessary
// Import other components you might need

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
