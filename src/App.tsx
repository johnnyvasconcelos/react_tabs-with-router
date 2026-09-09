import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Tabs from './Tabs';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item is-active">
            Home
          </Link>
          <Link to="/tabs" className="navbar-item">
            Tabs
          </Link>
        </div>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabs" element={<Tabs />}>
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="section">
              <div className="container">
                <h1 className="title">Page not found</h1>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  </>
);
