import React, { useEffect } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import Logo from './logo.png'
import styles from './NavBar.module.css'
import cx from 'classnames'
import { AiFillHome, AiOutlineUser, AiFillSetting } from 'react-icons/ai'
import { FaFirstOrderAlt } from 'react-icons/fa'
import { BiFoodMenu, BiAnalyse, BiLogOutCircle } from 'react-icons/bi'
import { SiStaffbase, SiManageiq } from 'react-icons/si'
import { useState } from 'react'
const NavBar = (props) => {
  const history = useLocation()
  const navig = useHistory()
  const [settingsIndex, setSettingsIndex] = useState(true)
  useEffect(() => {
    // if(history.pathname.substring(0,9)!="/settings" && history.pathname.substring(0,11)!="/management"&& history.pathname.substring(0,9)!="/employee"&& history.pathname.substring(0,9)!="/restro")
    // {
    //     props.enterHandle()
    //     var a=document.getElementById('menu')
    //     var b =document.getElementById('menu1')
    //     var c =document.getElementById('promotion')

    //     a.style.display='none';
    //     b.style.display='flex';
    //     c.style.fontSize='20px'
    //     setSettingsIndex(false)
    // }

    // else{
    props.leaveHandle()
    var a = document.getElementById('menu')
    a.style.display = 'flex'
    var b = document.getElementById('menu1')
    b.style.display = 'none'
    setSettingsIndex(true)
    var c = document.getElementById('promotion')
    c.style.fontSize = '12px'
    // }


  }, [history])
  return (
    <div className={cx(styles.container, props.theme ? styles.white : null, settingsIndex ? styles.smallContainer : null)}>
      <div onClick={()=>navig.push('/') } className={cx(styles.logo2, settingsIndex ? styles.logoIndex : null)}>
        <img className={cx(styles.logo, settingsIndex ? styles.logoIndex : null)} src={Logo} />
      </div>
      <div className={styles.menuItems} id='menu1'>
        <NavLink to='/overview' className={props.theme ? styles.whiteLink : styles.links}>
          <div className={styles.image}>
            <img src='/Icons/Nav/Graph.png' />
          </div>
          <div>
            Overview
          </div>
        </NavLink>
        <NavLink to='/' className={props.theme ? styles.whiteLink : styles.links}>
          <div className={styles.image}>
            <img src='/Icons/Nav/Paper.png' />
          </div>
          <div>
            Order
          </div>
        </NavLink>
        <NavLink to='/restro' className={props.theme ? styles.whiteLink : styles.links}>
          <div className={styles.image}>
            <img src='/Icons/Nav/Chat.png' />
          </div>
          <div>
            Task
          </div>
        </NavLink>

        <NavLink to='/account' className={props.theme ? styles.whiteLink : styles.links}>
          <div className={styles.image}>
            <img src='/Icons/Nav/Chat.png' />
          </div>
          <div>
           Accounts
          </div>
        </NavLink>


        <NavLink to='/employee' className={props.theme ? styles.whiteLink : styles.links}>
          <div className={styles.image}>
            <img src='/Icons/Nav/User.png' />
          </div>
          <div>
            Staff
          </div>
        </NavLink>
        <NavLink to='/management/Menu Management/0/0' className={props.theme ? styles.whiteLink : styles.links}>
          <div className={styles.image}>
            <img src='/Icons/Nav/Info Circle.png' />
          </div>
          <div>
            Management
          </div>
        </NavLink>
        <NavLink to='/settings/General Setting/0/0' className={props.theme ? styles.whiteLink : styles.links}>
          <div className={styles.image}>
            <img src='/Icons/Nav/Setting.png' />
          </div>
          <div>
            Settings
          </div>
        </NavLink>
      </div>
      <div id='menu' className={styles.menuItems2}>
        <NavLink to='/overview' activeStyle={{ color:'#1890ff' }} className={props.theme ? styles.whiteLink2 : styles.links2}>
          <div>
            <img src='/Icons/Nav/Graph.png' />
          </div>
          <div>
            Overview
          </div>
        </NavLink>
        <NavLink to='/' exact activeStyle={{ color:'#1890ff' }} className={props.theme ? styles.whiteLink2 : styles.links2}>
          <div>
            <img src='/Icons/Nav/Paper.png' />
          </div>
          <div>
            Order
          </div>
        </NavLink>
        <NavLink to='/restro' activeStyle={{ color:'#1890ff' }} className={props.theme ? styles.whiteLink2 : styles.links2}>
          <div>
            <img src='/Icons/Nav/Chat.png' />
          </div>
          <div>
            Tasks
          </div>

        </NavLink>

        <NavLink to='/account' activeStyle={{ color:'#1890ff' }} className={props.theme ? styles.whiteLink2 : styles.links2}>
          <div>
            <img src='/Icons/Nav/Chat.png' />
          </div>
          <div>
            Accounts
          </div>
        </NavLink>
        {/* <NavLink to='/employee' className={props.theme ? styles.whiteLink2 : styles.links2}>
          <div>
            <img src='/Icons/Nav/User.png' />
          </div>
          <div>
            Staff
          </div>
        </NavLink> */}
        <NavLink to='/user' activeStyle={{ color:'#1890ff' }} className={props.theme ? styles.whiteLink2 : styles.links2}>
          <div>
            <img src='/Icons/Nav/User.png' />
          </div>
          <div>
            user
          </div>
        </NavLink>
        <NavLink to='/management/Menu Management/0/0' activeStyle={{ color:'#1890ff' }} className={props.theme ? styles.whiteLink2 : styles.links2}>
          <div>
            <img src='/Icons/Nav/Info Circle.png' />
          </div>
          <div>
            Management
          </div>
        </NavLink>
        <NavLink to='/settings/General Setting/0/0' activeStyle={{ color:'#1890ff' }} className={props.theme ? styles.whiteLink2 : styles.links2}>
          <div>
            <img src='/Icons/Nav/Setting.png' />
          </div>
          <div>
            Settings
          </div>
        </NavLink>

      </div>
      <div className={styles.promote} onClick={()=>props.modalHandle('Restro Menu')}>
        <div className={styles.upper}>
          Powered by
        </div>
        <div className={styles.sponsor} id='promotion'>
          Restro X
        </div>
      </div>
    </div>
  )
}
export default NavBar