
"use client"
import Button from "@/components/Atoms/Buttons"
import { FC, MouseEventHandler } from "react"

interface ContactPagePropType {
    thomas: string
    sekar: string
    
    className?: string
}

const handleClickwa = () => {
    window.location.href = 'https://wa.me/08111865557'
}

const ContactPage: FC<ContactPagePropType> = (props) => {
    const { thomas, sekar,className } = props
    return (
        <div className="h-auto sm:h-screen bg-primary w-screen">
        <div className="text-accent grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            <div className="text-left m-4 p-4 bg-secondary rounded-lg">
                <h1 className="mb-5 text-2xl sm:text-3xl font-semibold">Colaboration</h1>
                <div className="flex flex-col gap-2">
                    <p className="font-extralight">Address: <span></span></p>
                    <p className="font-extralight flex gap-1">Phone: <span className="text-gold">{sekar}</span></p>
                    <p className="font-extralight">Email: <span></span></p>
                </div>
                <Button type="gold" text="Colaborate now" onClick={handleClickwa} className="w-full sm:w-[200px] px-2 font-light mt-4" />
            </div>
            <div className="text-left m-4 p-4 bg-secondary rounded-lg">
                <h1 className="mb-5 text-2xl sm:text-3xl font-semibold">Contact Us</h1>
                <div className="flex flex-col gap-2">
                    <p className="font-extralight">Address: <span></span></p>
                    <p className="font-extralight flex gap-1">Phone: <span className="text-gold">{sekar} <span className="text-accent">|</span> {thomas}</span></p>
                </div>
                <Button type="gold" text="Contact now" onClick={handleClickwa} className="w-full sm:w-[200px] px-2 font-light mt-4" />
            </div>
            <div className="text-left m-4 p-4 bg-secondary rounded-lg">
                <h1 className="mb-5 text-2xl sm:text-3xl font-semibold">Partnership</h1>
                <div className="flex flex-col gap-2">
                    <p className="font-extralight">Address: <span></span></p>
                    <p className="font-extralight flex gap-1">Phone/whatsapp: <span className="text-gold">{thomas}</span></p>
                </div>
                <Button type="gold" text="Partner now" onClick={handleClickwa} className="w-full sm:w-[200px] px-2 font-light mt-4" />
            </div>
        </div>
    </div>
    )
}

export default ContactPage;