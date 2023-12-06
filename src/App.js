import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from 'react-router-dom';
import Search from "./components/Search";
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Food Recipe</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>

  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding-left: 2rem;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 3rem;
  }
`

export default App;
