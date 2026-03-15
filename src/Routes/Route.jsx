import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Routes;