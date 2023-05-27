import React, { useEffect, useState } from 'react';
import './Home.css';
import {
	GridListTile,
	GridListTileBar,
	TextField,
	Select,
	MenuItem,
	InputLabel,
} from '@material-ui/core';
// import TextField from '@material-ui/core';
function Home() {
	const [movies, setMovies] = useState([]);
	const [genre, setGenre] = useState('');

	const handleChange = (event) => {
		setGenre(event.target.value);
	};
	return (
		<>
			<div>
				<h3 className="sub-heading">Upcoming Movies</h3>
				<div className="upcoming-movies-field">
					{movies.map((movie) => (
						<GridListTile key={movie.title} cols={6}>
							<img src={movie.poster} alt={movie.title} />
							<GridListTileBar title={movie.title} />
						</GridListTile>
					))}
				</div>
			</div>
			<div className="search-movie-form">
				<form action="">
					<TextField
						id="standard-basic"
						label="Movie Name"
						variant="standard"
					/>
					{/* <InputLabel id="demo-simple-select-standard-label">
						Genre
					</InputLabel> */}
					<div className="genre-select">
						<span>Genre</span>

						<Select
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							value={genre}
							onChange={handleChange}
							className="select-genre"
						>
							<MenuItem value="action" disabled>
								Genres
							</MenuItem>

							<MenuItem value="action">Thriller</MenuItem>

							<MenuItem value="action">Action</MenuItem>
							<MenuItem value="comedy">Comedy</MenuItem>
							<MenuItem value="drama">Drama</MenuItem>
						</Select>
					</div>
					<Select
						labelId="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						value={genre}
						onChange={handleChange}
						placeholder="Age"
					>
						<MenuItem value="action">Thriller</MenuItem>

						<MenuItem value="action">Action</MenuItem>
						<MenuItem value="comedy">Comedy</MenuItem>
						<MenuItem value="drama">Drama</MenuItem>
					</Select>
				</form>
			</div>
		</>
	);
}

export default Home;
