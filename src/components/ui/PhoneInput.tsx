'use client'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

export default function Phone(){

    return (
        
        <PhoneInput
            inputProps={{
                id: 'telefono',
                name: 'telefono',
                required: true
            }}
            country={'mx'}
            regions={['america']}
            enableSearch={true}
            containerClass="col-start-1 col-end-4"
            inputClass="bg-secondary text-neutral font-semibold p-6"
            inputStyle={{backgroundColor: '#1D4355'}}
            buttonStyle={{backgroundColor: '#F2F1EC'}}
        />
        
        
    )
}