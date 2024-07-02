import { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface CardPropType {
  type: 'primary' | 'secondary';
  className?: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

const Card: FC<CardPropType> = (props) => {
  const { type, className, text, imageSrc, imageAlt } = props;
  return (
    <div className={clsx([
      'h-100 w-64 text-center font-semibold flex flex-col items-center justify-between p-4',
      type === 'primary' && 'border border-accent text-gold shadow-lg shadow-gold',
      type === 'secondary' && 'border border-accent text-accent shadow-lg shadow-accent',
      className
    ])}>
      <div className="w-full h-64 relative">
        <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" className="rounded-md"/>
      </div>
      <p className="mt-4 font-lg  ">{text}</p>
    </div>
  );
}

export default Card;
