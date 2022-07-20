import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies,News} from '../component';
import Loader from './Loader';
const {Title} = Typography
const Homepage = () => {

const {data,isFetching} = useGetCryptosQuery(10);

const globalStates = data?.data?.stats;


  if(isFetching)
  {
    return <Loader />;
  }
  return (
  <>
    <Title lavel={2} className="heading">
        Global Crypto Stats
    </Title>
    <Row>
      <Col span={12}><Statistic title="Totla Cryptocurrencies" value={globalStates.total} /></Col>
      <Col span={12}><Statistic title="Totla Exchanges" value={millify(globalStates.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Totla Market cap" value={millify(globalStates.totalMarketCap)} /></Col>
      <Col span={12}><Statistic title="Totla 24th Volume" value={millify(globalStates.total24hVolume)} /></Col>
      <Col span={12}><Statistic title="Totla Markets" value={millify(globalStates.totalMarkets)} /></Col>
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified={true}/>
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Latest Crypto News</Title>
      <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified={true} />
  </>
  )
}

export default Homepage;