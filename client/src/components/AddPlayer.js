import React, { useState } from 'react';
import { createPlayer } from './api'; // Correct path for api.js in the same folder

const AddPlayer = () => {
    const [formData, setFormData] = useState({ name: '', position: '', team: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPlayer(formData);
            setFormData({ name: '', position: '', team: '' });
            alert('Player added successfully!');
        } catch (error) {
            console.error('Error adding player:', error);
            alert('Failed to add player. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Team"
                value={formData.team}
                onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                required
            />
            <button type="submit">Add Player</button>
        </form>
    );
};

export default AddPlayer;
