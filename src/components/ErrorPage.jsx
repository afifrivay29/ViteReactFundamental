import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops! Terjadi kesalahan.</h1>
            <p>{error.status || 404} - {error.statusText || "Halaman Tidak Ditemukan"}</p>
            {error.data && <pre>{error.data}</pre>}
        </div>
    );
}

export default ErrorPage;
