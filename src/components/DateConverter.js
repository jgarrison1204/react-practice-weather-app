// Holds days and months to convert from UTC for dates in Weather Image and Weather Detail components.
function convertToReadableDate(day, month, date) {	
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	// returns formatted date.
	return `${days[day]}, ${months[month]}, ${date}`;
}

export default convertToReadableDate;