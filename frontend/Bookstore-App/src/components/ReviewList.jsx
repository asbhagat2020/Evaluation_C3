
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByBook } from '../services/api';

const ReviewList = () => {
  const { bookId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await fetchReviewsByBook(bookId);
      setReviews(data);
    };
    getReviews();
  }, [bookId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
