export function idiomaticTime(hours) {
	const hours_n = Number(hours);
	const hours_s = hours.toString();
	// Case 1: if hours is an integer, no need for 'minutes'
	if (parseInt(hours, 10) === hours_n) {
		if (hours_n === 1) {
			return '1 hour';
		}
		else {
			return `${hours_n} hours`;
		}
	}
	// Case 2: if hours isn't an integer:
	// Case A: only minutes
	if (hours_n < 1) {
		let minutes = hours_n * 60;
		return `${minutes} mins`;
	}
	// Case B: hours + minutes
	const timeArray = hours_s.split('.');
	const mins = (Number('.'.concat(timeArray[1])) * 60).toString();
	const hrs = timeArray[0];
	if (hrs === '1') {
		return `1 hour ${mins} mins`;
	}
	return `${hrs} hours ${mins} mins`;
}
