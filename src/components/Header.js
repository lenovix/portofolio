import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  .active {
    border-bottom: 2px solid white;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Portofolio Saya</h1>
      <Nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Tentang Saya
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Proyek
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Kontak
            </NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
