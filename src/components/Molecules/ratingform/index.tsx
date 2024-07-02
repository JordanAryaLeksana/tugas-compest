import Button from "@/components/Atoms/Buttons";
import { ChangeEventHandler, FC,MouseEventHandler } from "react";
import clsx from 'clsx'

interface RatingFormPropType {
    className?: string;
    nameValue: string;
    ratingValue: number;
    bodyValue: string;
    onNameChange: ChangeEventHandler<HTMLInputElement>;
    onRatingChange: ChangeEventHandler<HTMLSelectElement>;
    onBodyChange: ChangeEventHandler<HTMLTextAreaElement>;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const RatingForm: FC<RatingFormPropType> = (props) => {
    const { nameValue, ratingValue, bodyValue, onClick,onNameChange, onRatingChange, onBodyChange, className } = props;


    return (
       <div className={clsx("flex flex-col justify-center items-center max-w-xl mx-auto p-4 sm:p-6 md:p-8 mt-10 border border-accent shadow shadow-gold text-primary", className)}>
      <form className="grid grid-cols-1 gap-4 w-full">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-black text-accent">SEA Salon Review</h1>
        <label className="font-normal text-gold mt-4">
          Your Name
        </label>
        <input
          type="text"
          value={nameValue}
          required
          onChange={onNameChange}
          className="mt-1 p-2 w-full text-accent bg-transparent border shadow shadow-gold border-gold rounded-md"
        />
        <label className="font-normal text-gold mt-4">
          Star Rating
        </label>
        <select
          value={ratingValue}
          onChange={onRatingChange}
          className="mt-1 p-2 w-full bg-transparent text-gold border border-gold shadow shadow-gold rounded-md"
          required
        >
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating} className="bg-primary text-gold font-light border-accent">
              {rating}
            </option>
          ))}
        </select>
        <label className="mt-4 text-gold font-normal">
          Add Comment
        </label>
        <textarea
          value={bodyValue}
          onChange={onBodyChange}
          required
          className="mt-1 p-2 sm:p-4 md:p-5 rounded-md bg-transparent shadow-md shadow-gold text-white border border-accent"
        />
      </form>
            <Button type="primary" onClick={onClick} text="Submit your review" className="px-2 font-semibold w-[200px] mt-10 "/>
        </div>
    );
};

export default RatingForm;


