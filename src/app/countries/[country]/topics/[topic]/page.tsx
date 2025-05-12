import React from 'react'
import { countries } from '../../../../../lib/countries'
import CountryAndHelplines from '../../../../../components/templates/country-and-helplines/country-and-helplines'
import NotFound from '../../../../../app/not-found'

export default async function Topic({ params }) {

  const { country,topic } = await  params || {};
  const selectedCountry = countries.find((c)=>c.code.toLowerCase()===country.toLowerCase())

  if (country && selectedCountry) {
    return <CountryAndHelplines selectedCountry={selectedCountry} topic={topic} country={country} />;
  }else{
    return <NotFound />
  }
}
