import { FC } from 'react'
import clsx from 'clsx';
import DateTimePicker from 'react-datetime-picker'
type FormState = {
    className?: string
};

const ReservationForm: FC<FormState> = (props) => {
    const {  className } = props
    return (
        <div className={clsx({

        })}>
                <div className='flex flex-col justify-center items-center'>
                  
                    <form className='grid grid-cols-1 gap-2'>
                        <label>
                            Name
                        </label>
                        <input
                            placeholder='Place your name here...'
                            required
                           
                            className={className}
                        />
                        <label>
                            Active Phone Number
                        </label>
                        <input
                            placeholder='Place your phone number here!...'
                            required
                            
                            className={className}
                        />
                        <label>
                            Types Of Service
                        </label>
                        <select required
                         
                            className={className}>
                            <option>
                                Haircuts and styling
                            </option>
                            <option>
                                manicure and pedicure
                            </option>
                            <option>
                                facial treatments
                            </option>
                        </select>
                        <label>
                            Date and Time
                        </label>
                        <div>
                            <DateTimePicker  />
                        </div>
                    </form>
                </div>
            </div>
   
    );
};

export default ReservationForm;