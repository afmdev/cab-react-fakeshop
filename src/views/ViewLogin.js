import React from 'react'
import Menu from '../components/Menu'
import ImageCarousel from '../components/ImageCarousel'
import LoginForm from '../components/LoginForm'


function ViewLogin() {
    return (
        <div className="ViewLogin">
            <Menu/>
            <LoginForm />
        </div>
    )
}

export default ViewLogin