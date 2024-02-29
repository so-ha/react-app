import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return(<div className="error-page">
        <h1>Oops!!!  You've reached Error Page</h1>
        {err.status} : {err.statusText}
    </div>)
}

export default Error
