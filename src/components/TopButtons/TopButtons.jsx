import './TopButtons.sass'

const TopButtons = ({ icon, text, className }) => {
    return (
        <div className= {`top-buttons ${className}`}>
            <i className='material-symbols-outlined'>{icon}</i>
            <p>{text}</p>
        </div>
    )
}

export default TopButtons
