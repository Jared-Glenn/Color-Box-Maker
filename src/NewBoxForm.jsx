import React, { useState } from "react";

function NewBoxForm(props) {
    const INITIAL_STATE = {
        color: '',
        width: '',
        height: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox({ ...formData });
        setFormData(INITIAL_STATE)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color: </label>
            <input
                id="color"
                type="text"
                name="color"
                placeholder="Color Name"
                value={formData.color}
                onChange={handleChange}
            />
            <label htmlFor="width">Width: </label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="Width in Pixels"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Width: </label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder="Height in Pixels"
                value={formData.height}
                onChange={handleChange}
            />
            <button>Create Box</button>
        </form>
    )
}

export default NewBoxForm;