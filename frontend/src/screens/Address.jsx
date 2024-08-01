import React, { useState } from "react";
import { addAddress } from "../services/AddressService";

export default function Address() {
    const [userId, setUserId] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const addressDTO = {
                userId,
                addressLine1,
                addressLine2,
                city,
                state,
                zipCode,
                country
            };
            await addAddress(addressDTO);
            alert('Address added successfully!');
        } catch (error) {
            setError('Failed to add address.');
        }
    };
    const statesOfIndia = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
        'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
        'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
        'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

const countries = ['India'];

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add Address</h2>
            <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userId">User ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userId"
                        placeholder="Enter User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="addressLine1">Address Line 1</label>
                    <input
                        type="text"
                        className="form-control"
                        id="addressLine1"
                        placeholder="Enter Address Line 1"
                        value={addressLine1}
                        onChange={(e) => setAddressLine1(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="addressLine2">Address Line 2</label>
                    <input
                        type="text"
                        className="form-control"
                        id="addressLine2"
                        placeholder="Enter Address Line 2 (optional)"
                        value={addressLine2}
                        onChange={(e) => setAddressLine2(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <select
                        id="state"
                        className="form-select"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    >
                        <option value="">Select State</option>
                        {statesOfIndia.map((state, index) => (
                            <option key={index} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="zipCode"
                        placeholder="Enter Zip Code"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select
                        id="country"
                        className="form-select"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    >
                         <option value="">Select Country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add Address</button>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
            </div>
            <div className="col-4"></div>
            </div>
        </div>
    );
};
