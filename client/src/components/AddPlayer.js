import React, { useState } from 'react';
import { createPlayer } from '../api';

const AddPlayer = () => {
    const [formData, setFormData] = useState({ name: '', position: '', team: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPlayer(formData);
        setFormData({ name: '', position: '', team: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            />
            <input
                type="text"
                placeholder="Team"
                value={formData.team}
                onChange={(e) => setFormData({ ...formData, team: e.target.value })}
            />
            <button type="submit">Add Player</button>
        </form>
    );
};

export default AddPlayer;
