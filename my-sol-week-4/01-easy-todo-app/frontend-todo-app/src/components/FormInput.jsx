/* eslint-disable react/prop-types */

import './formInput.css';

const FormInput = (props) => {
    const { onChange, ...inputForm } = props;

    return (
        <div className='todo-input'>
            <input 
                {...inputForm}
                onChange={onChange}
            />
        </div>
    );
};

export default FormInput;
