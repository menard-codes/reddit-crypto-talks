import React, { useState, useEffect, createRef } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import MenuDrawer from './components/Drawer';
import SectionContent from './components/SectionContent';
import ErrorBox from './components/ErrorBox';
import Footer from './components/Footer';


import fetchData from './api'


const top_cryptos = [
  {
    "Title": "Bitcoin (BTC)",
    "api_label": "btc"
  },
  {
    "Title": "Etherium (ETH)",
    "api_label": "eth"
  },
  {
    "Title": "Litecoin (LTC)",
    "api_label": "litecoin"
  },
  {
    "Title": "Cardano (ADA)",
    "api_label": "cardano"
  },
  {
    "Title": "Polka dot (DOT)",
    "api_label": "polkadotDOT"
  },
  {
    "Title": "Bitcoin Cash (BCH)",
    "api_label": "bitcoinCash"
  },
  {
    "Title": "Stellar (XLM)",
    "api_label": "stellar"
  },
  {
    "Title": "Chainlink (LINK)",
    "api_label": "Chainlink"
  },
]

/*
  Last: Footer
*/

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [cryptoUpdate, setCryptoUpdate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('Error')
  
  const getCryptoUpdate = async () => {
    try {
      setError(false)
      setLoading(true)
      const res = await fetchData();
      const data = res.data;
      setCryptoUpdate(data)
      setLoading(false)
    } catch (err) {
      setErrorMsg(err.message)
      setError(true)
      setLoading(false)
    }
  }
  
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const node = wrapper.current;
    getCryptoUpdate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const wrapper = createRef()

  return (
    <div ref={wrapper}>
      <MenuDrawer selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div style={{marginTop: '65px'}}></div>
      {loading && <LinearProgress color="secondary" />}
      {error && <ErrorBox errorMessage={errorMsg} />}
      {(!loading && cryptoUpdate) && top_cryptos.map((crypto, index) => (
          <SectionContent
          key={crypto['Title']}
          index={index}
          title={crypto['Title']}
          content={cryptoUpdate[crypto['api_label']]}
          currentTabValue={selectedTab} />
        )
      )}
      {(!loading && cryptoUpdate) && <Footer />}
    </div>
  )
}


export default App;

