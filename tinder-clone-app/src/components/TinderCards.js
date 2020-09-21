import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import '../components/css/TinderCards.css'
import axios from '../axios'

function TinderCards() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get('/tinder/cards')

			setPeople(req.data.data)
		}

		fetchData()
	}, [])

	console.log(people);

	const swiped = (direction, nameToDelete) => {
		console.log(`removing: ${nameToDelete}`)
		// setLastDirection(direction)
	}

	const outOfFrame = (name) => {
		console.log(`${name} left the screen`)
	}

	return (
		<section className="tinder-cards">
			<aside className="tinder-cards-container">
				{people.map((person) => (
					// <h3>{person.name}</h3>
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.imgUrl})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</aside>
		</section>
	)
}

export default TinderCards
