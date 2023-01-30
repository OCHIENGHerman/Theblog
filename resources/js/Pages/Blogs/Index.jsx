import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Blog from '@/Components/Blog';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
 
export default function Index({ auth, blogs }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '', description: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('blogs.store'), { onSuccess: () => reset() });
    };
 
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Blogs" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div>
                        <textarea
                            value={data.title}
                            placeholder="Input title."
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={e => setData('title', e.target.value)}
                        ></textarea>

                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <textarea
                            value={data.description}
                            placeholder="Input your description."
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={e => setData('description', e.target.value)}
                        ></textarea>

                        <InputError message={errors.description} className="mt-2" />
                    </div>
                    <div>
                        <PrimaryButton className="mt-4 bg-black text-white dark:bg-white dark:text-black " processing={processing}>Blog</PrimaryButton>
                    </div>
                </form>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {blogs.map(blog =>
                        <Blog key={blog.id} blog={blog} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}