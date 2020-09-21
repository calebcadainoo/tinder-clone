import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import '../components/css/TinderCards.css'

function TinderCards() {
	const [people, setPeople] = useState([
		{
			name: 'Elon Musk',
			url: 'https://images.hdqwalls.com/wallpapers/elon-musk-4k-rq.jpg'
		},
		{
			name: 'Jeff Bezos',
			url: 'https://www.kindpng.com/picc/m/166-1665518_jeff-bezos-investor-jeff-bezos-warren-buffett-quote.png'
		},
	]);

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
						preventSwipe={["left", "right"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
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
