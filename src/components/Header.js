import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className='logo-img'>
                <Link to="/">
                    <img src="./img/sava_logo_green.png" alt="" style={{ width: '27em' }} />
                </Link>
            </div>
        </div>
    )
}

export default Header
