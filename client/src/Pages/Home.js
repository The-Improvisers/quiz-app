import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

const Home = () => {

    const [createOpen, setCreateOpen] = useState(false);

    
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-6">
        <div className="flex flex-wrap gap-10 justify-center">
        {/* Classic Trivia Card */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 w-80 text-center shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-400">Classic</h2>
                <p className="text-gray-400 mb-6 text-sm">
                    "Classic Trivia" is a fast-paced game mode where players answer
                    questions across various categories.
                </p>
                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition" onClick={() => setCreateOpen(true)}>
                    Create a lobby
                </button>
            </div>


        {/* Join Lobby Card */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 w-80 text-center shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-400">KTrivia</h2>
                <p className="text-gray-400 mb-6 text-sm">Join a private lobby!</p>
                <input
                    type="text"
                    placeholder="Lobby code"
                    className="w-full p-3 mb-4 rounded-lg border border-zinc-600 bg-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-3 mb-4 rounded-lg border border-zinc-600 bg-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
                    Join
                </button>
            </div>
        </div>

        {/* Create Lobby Modal */}

        <Dialog open={createOpen} onClose={() => setCreateOpen(false)} className="">
  <DialogTitle className="bg-black text-gray-400">Create Lobby</DialogTitle>
  <DialogContent className="bg-black">
    <form className="flex flex-col gap-4 mt-4">
      {/* Lobby Name */}
      <input
        type="text"
        placeholder="Lobby Name"
        className="p-3 rounded-lg border border-zinc-600 bg-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Max Players */}
      <input
        type="number"
        placeholder="Max Players"
        min={2}
        max={10}
        className="p-3 rounded-lg border border-zinc-600 bg-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Number of Questions */}
      <input
        type="number"
        placeholder="Number of Questions"
        min={5}
        max={50}
        className="p-3 rounded-lg border border-zinc-600 bg-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Categories */}
      <div className="flex flex-col gap-2 mt-2">
        <p className="text-gray-400 text-sm">Select Categories:</p>
        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            className="accent-blue-600 w-4 h-4"
          />
          Science
        </label>
        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            className="accent-blue-600 w-4 h-4"
          />
          History
        </label>
        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            className="accent-blue-600 w-4 h-4"
          />
          Sports
        </label>
        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            className="accent-blue-600 w-4 h-4"
          />
          Technology
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-4">
        <button
          type="button"
          onClick={() => setCreateOpen(false)}
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {
            // TODO: Handle lobby creation logic here
          }}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Create
        </button>
      </div>
    </form>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default Home
