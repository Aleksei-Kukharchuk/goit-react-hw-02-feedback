import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
            {options.map(option => (
                <button type="button" key={option} name={option} onClick={onLeaveFeedback}>{option}</button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}
