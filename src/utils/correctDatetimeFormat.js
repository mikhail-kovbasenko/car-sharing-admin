export const getCorrectDatetimeFormat = time => {
	return new Intl.DateTimeFormat('ru', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	}).format(new Date(time));
}