import React from 'react'
import { NavbarMenu } from '../../components'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <NavbarMenu/>
   <Outlet/>
   </>
  )
}

export default Header