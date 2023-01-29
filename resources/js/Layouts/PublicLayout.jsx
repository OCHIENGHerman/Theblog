import { useState } from 'react';
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from '@/Components/Dropdown';
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link} from '@inertiajs/react';

export default function PublicLayout({header, children}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('test')} active={route().current('test')}>
                                    Home
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <>
                                    <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">
                                        Register
                                    </Link>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}