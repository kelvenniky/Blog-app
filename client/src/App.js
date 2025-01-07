/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Post from "./Post";
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
   <Routes>
    <Route index element={
      <main>

      <Header/>
      <Post />
      <Post />
      <Post />
    </main>
    }/>
    <Route path={'/login'} element={
      <main>
        <Header>
          <div>Login here</div>
        </Header>
      </main>
    }/>
   </Routes>
    
  );
}

export default App;
