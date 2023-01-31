import ApplicationLogo from "@/Components/ApplicationLogo";
import {Link} from '@inertiajs/react';

export default function PublicLayout({auth, header, children}) {
    return (
        <>
            <div className="min-h-screen bg-white dark:bg-black">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                                    {props.auth.user ? (
                                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                        <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                            Log in
                                        </Link>

                                        <Link
                                            href={route('register')}
                                            className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                        >
                                            Register
                                        </Link>
                                        </>
                                    )}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}