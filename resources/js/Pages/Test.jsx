import PublicLayout from "@/Layouts/PublicLayout";
import {Head} from '@inertiajs/react';

export default function TestPage(props) {
    return (
        <PublicLayout
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Test</h2>}
        >
            <Head title="Test" />
            <div>
                <h1> Otis Perry</h1>
            </div>
        </PublicLayout>
    );
}