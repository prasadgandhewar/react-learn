import { Link, Outlet, redirect, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";

export default function Contact() {
    const data: any = useLoaderData();
    const id = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(id);
    console.log(location?.state);
    console.log(location?.search);
    const query =  new URLSearchParams(location.search);
    console.log(query.get('name'));
    function handleClick() {
        //throw new Error("oh dang!");
        //navigate('/contact/2');
        navigate('/contact/2', { state: 'testdata'});
    }
    return (
        <div>
            <h1>Contact</h1>
            <Outlet></Outlet>
            <Link  to='/contact/2'>Go to 2</Link>
            <button onClick={handleClick}>Open</button>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate(+1)}>Next</button>
        </div>
    )
}