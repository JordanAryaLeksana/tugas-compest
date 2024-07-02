import Card from "@/components/Atoms/cards";
import { FC } from "react";
interface ServicepagePropsType {
    className?: string
}

const Servicepage: FC<ServicepagePropsType> = (props) => {
    const {className}= props
    return (
        <div className="w-screen h-screen bg-primary ">
            <div className="flex flex-col justify-center items-center  ">
                <div className="flex flex-col mt-10 p-4 gap-3">
                    <h1 className=" text-5xl font-black text-accent text-center">Our Services</h1>
                    <p className="text-sm font-thin text-accent text-center mx-auto w-full h-16 ">Elevate your beauty routine with our comprehensive selection of salon services, crafted to provide you with a transformative and indulgent experience.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-8 w-full mt-6 place-items-center">
                    <Card type="primary" imageAlt="card-1" imageSrc="/chika.jpeg" text="Haircuts and Styling" className="" />
                    <Card type="primary" imageAlt="card-2" imageSrc="/manicure.jpeg" text="Manicure and Pedicure" className="" />
                    <Card type="primary" imageAlt="card-3" imageSrc="/facial.jpeg" text="Facial Treatments" className="" />
                </div>
            </div>

        </div>
    )
}

export default Servicepage;