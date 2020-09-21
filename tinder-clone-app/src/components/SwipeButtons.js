import React from 'react'
import '../components/css/SwipeButtons.css'
import { IconButton } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'

function SwipeButtons() {
	return (
		<footer className="swipe-btns">
			<IconButton className="swipe-btn-pad swipe-btn-repeat">
				<ReplayIcon fontSize="large" />
			</IconButton>

			<IconButton className="swipe-btn-pad swipe-btn-left">
				<CloseIcon fontSize="large" />
			</IconButton>

			<IconButton className="swipe-btn-pad swipe-btn-star">
				<StarRateIcon fontSize="large" />
			</IconButton>

			<IconButton className="swipe-btn-pad swipe-btn-right">
				<FavoriteIcon fontSize="large" />
			</IconButton>

			<IconButton className="swipe-btn-pad swipe-btn-lightning">
				<FlashOnIcon fontSize="large" />
			</IconButton>
		</footer>
	)
}

export default SwipeButtons
