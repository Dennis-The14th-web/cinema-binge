import React from 'react'

function Modal({ selected, closeModal }) {
	return (
		<section className="modal">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closeModal}>Close</button>
			</div>
		</section>
	)
}

export default Modal