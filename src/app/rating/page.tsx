"use client";
import { FC, useState, ChangeEvent, SyntheticEvent } from 'react';
import Nav from "@/components/Molecules/nav";
import RatingForm from '@/components/Molecules/ratingform';
import axios from 'axios';

const ReviewSystem: FC = () => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleRatingChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setRating(Number(e.target.value));
    };

    const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            await axios.post("/api/review", {
                customerName: name,
                starRating: rating,
                comment: comment
            });
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    return (
        <div className='bg-primary '>
            <div className='border border-transparent '>
                <Nav className='w-screen h-[50px]  text-accent absolute z-[-1]' />
            </div>
            <RatingForm
                nameValue={name}
                ratingValue={rating}
                onNameChange={handleNameChange}
                onRatingChange={handleRatingChange}
                bodyValue={comment}
                onBodyChange={handleCommentChange}
                onClick={handleSubmit}
                className='flex flex-col w-screen h-screen p-4 relative mt-20 bottom-0 '
            />
        </div>
    );
};

export default ReviewSystem;