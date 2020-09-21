import React from 'react'
import '../components/css/Header.css'
import { IconButton } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import MessageIcon from '@material-ui/icons/Forum'


function Header() {
	return (
		<header className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header-icon" />
			</IconButton>

			<img className="header-logo"
					//  src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
					 src="/img/tinder-logo.png"
					 alt=""
			/>

			<IconButton>
				<MessageIcon fontSize="large" className="header-icon" />
			</IconButton>
		</header>
	)
}

export default Header
