/*eslint-disable*/

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../../../redux/ChatRedux/actions';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // const logout = () => {
  //   dispatch(logout())
  // }

  return(
    <header className="header">
        <div style={{display: 'flex'}}>
          <div className="logo">Web Messenger</div>
            
            {
              !auth?.authenticated ? 
              <ul className="leftMenu">
                <li><Link to={'/logins'}>Login</Link></li>
                <li><Link to={'/signups'}>Sign up</Link></li>
              </ul> : null
            }
              

            
        </div>
          <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
            {auth?.authenticated ? `Hi ${auth?.firstName} ${auth?.lastName}` : ''}
          </div>
        <ul className="menu">

            {
              auth?.authenticated ?
              <li>
                <Link to={'#'} onClick={() => {
                  dispatch(logout(auth.uid))
                }}>Logout</Link>
            </li> : null
            }
          
            
             
        </ul>
    </header>
   )

 }

export default Header