import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AccountList from './pages/account_list/AccountList';
import Login from './pages/login/Login';
import User from './pages/user/User';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<div>홈</div>} />
            <Route path="/users" element={<div>유저 목록 페이지</div>} />
            <Route path="/users/:user_id" element={<User />} />
            <Route path="/accounts" element={<AccountList />} />
            <Route path="/accounts/:account_id" element={<div>계좌 상세 페이지</div>} />
            <Route path="*" element={<div>404페이지</div>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
