import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../../../redux/actions';
import styles from './review.module.css';

const Review = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') {
      return; // Evitar agregar un comentario vacío
    }

    onAddComment(comment);
    setComment('');
  };

  return (
    <div className={styles.reviewContainer}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          rows="4"
          cols="50"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu comentario aquí"
        ></textarea>
        <button className={styles.button} type="submit">
          Enviar comentario
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addComment })(Review);
