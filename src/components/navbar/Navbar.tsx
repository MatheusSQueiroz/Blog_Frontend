import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, FileText, Tag, PlusSquare, User, LogOut} from 'react-feather'

import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }
  return (
    <>
      <div
        className="w-full bg-indigo-900 text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
          <Home size={25} />
          </Link>

          <div className="flex gap-4">
            <FileText size={25} />
            <Link to='/temas' className='hover:underline'><Tag size={25} /></Link>
            <Link to='/' className='hover:underline'><PlusSquare size={25} /></Link>
            <Link to='/' className='hover:underline'><User size={25} /></Link>
            <Link to="" onClick={logout} className="hover:underline">
            <Link to='/' className='hover:underline'><LogOut size={25} /></Link>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
