
import Nav from "@/components/Molecules/nav"
import Servicepage from "@/components/Molecules/servicep"
import { FC } from "react";


interface ServiceProps {
    className?: string;
}

const ServicePage: FC<ServiceProps> = ({ className }) => {
    return (
        <section className="bg-primary">
            <div className="border border-transparent w-full">

                <Nav className="text-accent relative" />
            </div>

            <div>
                <Servicepage className="w-full relative bot-0" />
            </div>
        </section>
    );
};

export default ServicePage;
