const ChipGenres = ({ valor }) => {
	return (
		<div className="flex justify-center items-center bg-white shadow-lg rounded-r-full italic px-3 py-1 text-sm text-gray-700 font-semibold whitespace-nowrap w-24">
			{valor}
		</div>
	);
};

export default ChipGenres;
