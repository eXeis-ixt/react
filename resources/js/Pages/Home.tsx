import Navbar from "@/Components/ui/Navbar";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home() {
    return (
        <DefaultLayout>
            <Head title="Get Started" />

            <div className=" text-center space-y-4">
                <h1 className=" text-5xl text-center">Write your code here</h1>
                <div>Edit</div>
                <div>resources/js/Pages/Home.tsx</div>
            </div>
        </DefaultLayout>
    );
}
