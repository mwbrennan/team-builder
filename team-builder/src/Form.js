import React from 'react';

export default function Form(props) {

    const { values, update, submit } = props;

    const onChange = e => {
        const { name, value } = e.target
        update(name, value);
    }

    const onSubmit = e => {
        e.preventDefault();
        submit()
    }

    return(
        <form className='form' onSubmit={onSubmit}>
            <div>
                <label>
                    Name   
                    <input
                        type='text'
                        name='name'
                        placeholder='enter name'
                        onChange={onChange}
                        value={values.name}
                    />
                </label>
                <label className='email'>
                    Email 
                    <input 
                        type='email'
                        name='email'
                        placeholder='enter email'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                <label>
                    Role 
                    <select name='role' value={values.role} onChange={onChange} >
                        <option value=''>--Select Position--</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Boss'>Boss</option>
                    </select>
                </label>
                <div>
                    <button disabled={!values.name || !values.email || !values.role}>Submit</button>
                </div>
            </div>
        </form>
    )



}
