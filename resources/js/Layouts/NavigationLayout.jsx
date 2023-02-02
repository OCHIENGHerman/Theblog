import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function NavigationLayout() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="container flex flex-wrap items-center justify-between mx-auto"></div>
            </nav>
        </div>
    );
}