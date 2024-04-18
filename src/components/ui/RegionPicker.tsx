'use client'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useState } from 'react';

export default function Region(){
    const [region, setRegion] = useState<{country: string, region: string}>({country: '', region: ''})

    function selectCountry (val: string){
        setRegion(prev => ({...prev, country: val}))
    }
    function selectRegion (val: string){
        setRegion(prev => ({...prev, region: val}))
    }

    return (
        <div className='col-start-1 col-end-5 '>
            <CountryDropdown classes='bg-secondary text-neutral w-full p-4 mb-4 rounded-xl' id='pais' name='pais' value={region.country} onChange={(val) => selectCountry(val)} />
            <RegionDropdown id='region/estado' name='region/estado' classes='bg-secondary text-neutral p-2 w-full rounded-xl' country={region.country} value={region.region} onChange={(val) => selectRegion(val)} />
        </div>
    )
}