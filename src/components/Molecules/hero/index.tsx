"use client"
import { FC, MouseEventHandler } from 'react'
import Image from 'next/image'
import Button from '@/components/Atoms/Buttons'


interface HeroPropType {
    text: string;
    text2: string;
    className?: string;
}

const Hero: FC<HeroPropType> = (props) => {
    const { text, text2, className } = props
   

    const handleClick2 = () => {
        window.location.href = 'https://wa.me/08111865557'
    }

    const handleClick = () => {
        window.location.href= ('/reservation')
    }

    return (
        <div className='h-[735px] w-screen flex flex-col justify-center gap-10 items-center bg-primary bg-opacity-85 relative'>
            <Image src='/Hero2.jpeg' alt='hero-jpeg' fill className='z-[-1] ' />
            <div className='flex flex-col text-center px-4'>
                <p className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[128px] font-black text-accent h-auto">{text}</p>
                <div className='flex flex-col sm:flex-row gap-2 items-center justify-center'>
                    <div className='border-[0.5px] border-accent mx-auto my-5 sm:my-20 w-full sm:w-2/5 mt-5'></div>
                    <p className="text-[18px] sm:text-[20px] md:text-[24px] font-thin text-accent">{text2}</p>
                    <div className='border-[0.5px] border-accent mx-auto my-5 sm:my-20 w-full sm:w-2/5 mt-5'></div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
                <Button type='primary' className="w-[200px]" onClick={handleClick} text='Reservation Now!' />
                <Button type='transparant' className='w-[200px]' onClick={handleClick2} text='Customer Services!' />
            </div>
            <div className='h-[100px] w-screen absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
        </div>
    )
}

export default Hero
