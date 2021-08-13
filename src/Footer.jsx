import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="bg-light text-center">
                <p>©{year} Global Web. All Rights Reserved | Terms and Condition</p>
            </footer>
        </>
    )
}

export default Footer;
