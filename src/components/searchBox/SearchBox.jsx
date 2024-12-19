const SearchBox = ({ serachValue, onSearch }) => {
	return (
		<div>
			<label>
				Find contacts by name
				<input
					type="text"
					value={serachValue}
					onChange={(evt) => onSearch(evt.target.value)}
				/>
			</label>
		</div>
	);
};

export default SearchBox;
