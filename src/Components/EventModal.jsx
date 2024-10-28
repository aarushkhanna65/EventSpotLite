import React from 'react';
import "../styles/EventModal.css";
import { motion } from 'framer-motion';

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <img src={event.imageUrl} alt={event.name} />
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
}
