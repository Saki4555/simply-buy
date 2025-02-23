import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const UserDropDown = () => {
    const { user, logOut } = useAuth();
    // console.log(user);

    const handleLogOUt = () => {
            logOut().then().catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-16 rounded-full">
               {
                user?.photoURL ?
                 <img src={user?.photoURL} className="object-cover object-center" /> : <div className="bg-red-400 h-full"> </div>
               }
              

            </div>

        </label>
        <ul tabIndex={0} className="mt-3 p-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li className="hidden">
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
            </li>
            <li className="hidden"><a>Settings</a></li>
            <li>{user?.displayName} <br /> {user.email}</li>
            <div className="divider pt-0"></div>
            <Link to='/dashboard'><button className="btn btn-sm w-full mb-2">Dashboard</button></Link>
            <button onClick={handleLogOUt} className="btn btn-sm">Logout</button>
        </ul>
    </div>
    );
};

export default UserDropDown;