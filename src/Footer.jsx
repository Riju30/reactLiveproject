import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="bg-light text-center mt-5 mt-sm-5 mt-md-5 mt-xl-5 mt-lg-5">
                <p>©{year} Global Web. All Rights Reserved | Terms and Condition</p>
            </footer>
        </>
    )
}

export default Footer;
