import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "antd";
import Home from "./components/Home";
import styles from './styles';
import 'antd/dist/antd.min.css'
import AppBar from './components/AppBar/AppBar';
import AuthForm from './components/AuthForm';
 
const { Footer } = Layout;
console.log(process.env)
const App = () => {
    return (
        <BrowserRouter>
            <Layout style={styles.layout}>
                <AppBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/authform" element={<AuthForm />}/>
                </Routes>
                <Footer style={styles.footer}>2022 instavers</Footer>
            </Layout>
        </BrowserRouter>
    )
}

export default App;