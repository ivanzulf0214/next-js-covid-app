import { React, useState, useEffect } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import Head from 'next/head'
import Loading from '../components/Loading'
import CountryTable from '../components/country/CountryTable'

export default function Home() {
    const [masterData, setMasterData] = useState([])
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchData, setSearchData] = useState('')
    const [searchActive, setSearchActive] = useState(false)

    useEffect(() => {
        fetch('https://corona-api.com/countries')
            .then((res) => res.json())
            .then((data) => {
                const countriesData = data.data
                countriesData.sort((x, y) => y.latest_data.confirmed - x.latest_data.confirmed)
                setCountries(countriesData)
                setMasterData(countriesData)
                setIsLoading(false)
            })
    }, [])

    const handleInput = (e) => {
        e.preventDefault()
        setSearchData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (searchData == '') {
            resetData()
            return
        }

        setSearchActive(true)

        const regex = new RegExp(capitalize(searchData))

        const filtered = masterData.filter(country => regex.test(country.name))

        if (filtered != null) {
            setCountries(filtered)
        }
    }

    const resetData = () => {
        setCountries(masterData)
        setSearchData('')
        setSearchActive(false)
    }

    const capitalize = (word) => {
        return word
            .toLowerCase()
            .replace(/\w/, firstLetter => firstLetter.toUpperCase());

    }

    if (isLoading) return <Loading />

    return (
        <div>
            <Head>
                <title>Covid-19 Info App using NextJS</title>
            </Head>
            <BrowserView>
                <div className="container mx-auto mt-10">
                    <h1 className='text-5xl'>Covid-19 Dashboard</h1>
                    <div className='mt-5'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex items-center gap-2'>
                                <input type="text" id="base-input" className="bg-gray-50 w-1/4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder='Search country' onChange={handleInput} value={searchData} />
                                {
                                    searchActive &&
                                    <div className='mt-2'>
                                        <button type='button' onClick={resetData}>Clear filter</button>
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                    <div className='mt-5'>
                        <CountryTable countries={countries} />
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className='container mx-5 mt-10'>
                    <h1 className='text-3xl'>Covid-19 Dashboard</h1>
                    <div className='mt-5 pr-4'>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="base-input" className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder='Search country' onChange={handleInput} value={searchData} />
                            {
                                searchActive &&
                                <div className='mt-2'>
                                    <button type='button' className='px-2 py-1 bg-slate-600 text-white border rounded-sm' onClick={resetData}>Clear filter</button>
                                </div>
                            }
                        </form>
                    </div>
                    <div className='mt-5'>
                        <CountryTable countries={countries} />
                    </div>
                </div>
            </MobileView>
        </div>
    )
}
