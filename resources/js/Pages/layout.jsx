import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import React from "react";
import { Toaster } from "react-hot-toast";

const RootLayout = ({ children }) => {
    return (
        <div>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    removeDelay: 1000,
                }}
            />
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayout;
