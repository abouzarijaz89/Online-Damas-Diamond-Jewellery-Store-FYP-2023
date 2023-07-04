import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Damas Diamond Jewelry Store',
  description: 'We sell the best products of Best Quality',
  keywords: 'Daimond, buy jewelry, rich electroincs',
}

export default Meta
