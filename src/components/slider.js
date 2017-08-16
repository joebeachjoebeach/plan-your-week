import React from 'react';
import { idiomaticTime } from '../helpers/functions';

const Slider = ({ time, min, max, step, onTimeChange }) => {
	return (
		<div className="slider">
			<input
				type="range"
				className="slider-input"
				value={time}
				min={min}
				max={max}
				step={step}
				onChange={onTimeChange}
			/>
			<div className="slider-value">
				{idiomaticTime(time)}
			</div>
		</div>
	);
};

export default Slider;
