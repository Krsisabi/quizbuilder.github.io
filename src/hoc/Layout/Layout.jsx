import React from 'react'
import classes from './Layout.module.scss'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import { useState } from 'react'

const Layout = props => {

	const [menu, setMenu] = useState(false)

	const toggleMenuHandler = () => {
		setMenu(!menu)
	}
	
	return (
		<div className={classes.Layout}>

			<Drawer
				isOpen={menu}
			/>
			
			<MenuToggle
				onToggle={toggleMenuHandler}
				isOpen={menu}
			/>
			
			<main>
				{props.children}
			</main>
		</div>
	)
}

export default Layout