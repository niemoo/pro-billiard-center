import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import React from "react";

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Header />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
