"use client"
import Button from "@/components/Atoms/Buttons"
import Nav from "@/components/Molecules/nav"
import ReservationForm from "@/components/Molecules/reservationform"
import { FC } from "react"

interface ReservationProps {
    className?: string
}

const Reservation: FC<ReservationProps> = (props) => {
    const { className } = props

    return (
        <div className="h-full flex flex-col justify-center items-center text-accent w-screen bg-primary ">
            <div className='border border-transparent'>
                <Nav className='w-screen h-[50px] text-accent z-50' />
            </div>
            <div className=" h-full border border-accent shadow-lg shadow-accent flex flex-col justify-center items-center p-4">
                <h1 className="font-black text-4xl mb-5 ">Reservation Form</h1>
                <ReservationForm  className=" mt-2 p-4 text-accent font-semibold bg-transparent border border-gold shadow shadow-gold " />
                <Button type="gold" onClick={() => console.log("test click button")} className="px-2 w-[200px]" text="Submit this form" />
            </div>
        </div>
    )
}

export default Reservation;