import { React, useState, useEffect } from 'react'
import Loading from '../components/Loading'
import CountryTabel from '../components/country/CountryTabel'

export default function Home() {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://corona-api.com/countries')
            .then((res) => res.json())
            .then((data) => {
                const countriesData = data.data
                countriesData.sort((x, y) => y.latest_data.confirmed - x.latest_data.confirmed)
                setCountries(countriesData)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <Loading />

    return (
        <div className="container mx-auto mt-10">
            <h1 className='text-5xl'>Covid-19 Dashboard</h1>
            <div className='mt-10'>
                <CountryTabel countries={countries} />
            </div>
        </div>
    )
}
