import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import React, { useState } from 'react';

const CreateLobby = ({ isOpen, handleClose }) => {
  const [lobbyName, setLobbyName] = useState('');
  const [maxPlayers, setMaxPlayers] = useState(2);

  const handleCreate = () => {
    // Logic to create the lobby
    console.log(`Creating lobby: ${lobbyName} with max players: ${maxPlayers}`);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Create Lobby</DialogTitle>
      <DialogContent>
        <form>
          <input 
            type="text" 
            placeholder="Lobby Name" 
            value={lobbyName} 
            onChange={(e) => setLobbyName(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Max Players" 
            value={maxPlayers} 
            onChange={(e) => setMaxPlayers(e.target.value)} 
            min={2} 
            max={10} 
          />
          <button type="button" onClick={handleCreate}>Create</button>
          <button type="button" onClick={handleClose}>Cancel</button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export default CreateLobby;