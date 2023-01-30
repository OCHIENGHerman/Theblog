import { Link, Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-black sm:items-center sm:pt-0">
                <nav className="bg-black text-white dark:bg-white dark:text black border-b border-gray-100">
                    <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                        {props.auth.user ? (
                            <>
                                <Link href={route('dashboard')} className="text-sm text-black dark:text-white underline">
                                    Dashboard
                                </Link>
                                <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            </>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-sm text-black dark:text-white underline">
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 text-sm text-black dark:text-white underline"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
}
