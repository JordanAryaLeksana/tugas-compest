import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';


interface ButtonPropType {
    type: 'primary' | 'transparant' | 'gold';
    className?: string;
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonPropType> = (props) => {
    const { type, className, text, onClick } = props;
    return (
        <button className={clsx([
            'py-5 px-3 text-center font-semibold ',
            type === 'primary' && 'border bg-accent text-primary',
            type === 'transparant' && 'border border-accent text-accent ',
            type === 'gold' && 'border border-gold text-accent shadow shadow-gold ',
            className
          
        ])}
        onClick = { onClick }
        >
            {text}
        </button>
    );
}
export default Button