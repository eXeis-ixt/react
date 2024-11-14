import Footer from "@/Components/ui/Footer";
import Navbar from "@/Components/ui/Navbar";
import React from "react";
import { PropsWithChildren } from "react";

const DefaultLayout = ({ children }: PropsWithChildren) => {
    return (
        <main>
            <div>
                <Navbar />
            </div>
            <div className=" mt-[120px] container">{children}</div>
            <div className=" mt-[120px]">
                <Footer />
            </div>
        </main>
    );
};

export default DefaultLayout;
