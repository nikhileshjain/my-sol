/* eslint-disable react/prop-types */
import './todoElement.css'
const TodoElement = (props) => {
    const {deleteit} = props
    return (
        <div className='todo-element'>
            <div className='todo-text'>
                <span>Title: {props.title}</span>
                <br />
                <span>Description: {props.description}</span>
            </div>

            <div className='todo-button'>
                <button onClick={()=>deleteit(props.id)}>Remove</button>
            </div>
           
        </div>

    );
};

export default TodoElement