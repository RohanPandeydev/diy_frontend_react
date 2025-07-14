import React, { useState } from "react";
import "./FormModal.css";

const LeadFormModal = ({ open, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    //   if (!open) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
        onClose();
    };

    return (
        <div className="play-video-container" >

            <div className="">
                <button aria-label="Close Video" className="close-video-btn" onClick={onClose}>✖</button>

                <h3>Get a Callback</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number*</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email (Optional)</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default React.memo(LeadFormModal);
