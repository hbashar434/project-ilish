import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: 1, subtitle: "Subtitle 1", title: "Title 1" },
  { id: 2, subtitle: "Subtitle 2", title: "Title 2" },
  { id: 3, subtitle: "Subtitle 3", title: "Title 3" },
  { id: 4, subtitle: "Subtitle 4", title: "Title 4" },
];

function Profile() {
  const [selectedId, setSelectedId] = useState(null);

  const itemStyles = {
    width: '200px',
    height: '150px',
    border: '1px solid #ccc',
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
  };

  return (
    <div>
      {items.map(item => 
        <motion.div
          key={item.id}
          layoutId={item.id}
          style={itemStyles}
          onClick={() => setSelectedId(item.id)}
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            key={selectedId}
            layoutId={selectedId}
            exit={{ opacity: 0 }}
            style={itemStyles}
          >
            <motion.h5>{items[selectedId - 1].subtitle}</motion.h5>
            <motion.h2>{items[selectedId - 1].title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>Back</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Profile;
