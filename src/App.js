import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Cryptocurrencies, CryptoDetails } from './components';
import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                            <Route exact path="/" element={<Homepage />} />
                        </Routes>
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title levle={5} style={{ color: 'white', textAlign: 'center' }}>
                        Coinverse<br />
                        All Rights Reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App