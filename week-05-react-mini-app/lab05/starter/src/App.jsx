import { Routes, Route } from 'react-router-dom';
import AppLayout from './pages/AppLayout.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
function App() {
  // จุดตั้งต้นจาก Week 04 — ทำงานได้ครบ แต่ยังเป็นหน้าเดียวและข้อมูลอยู่ในหน่วยความจำ

  return (
    <>
      <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
      {/* TODO 5A-CP01: ย้ายงานของ Dashboard ออกไปที่ DashboardPage.jsx */}
      {/* TODO 5A-CP02: เปลี่ยนทั้งไฟล์เป็น <Routes> ที่มี AppLayout เป็นกรอบ */}
    </>
  );
}

export default App;
