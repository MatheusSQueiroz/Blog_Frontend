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
        className="w-full bg-primary text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold" title="Página Inicial">
          <Home size={25} />
          </Link>

          <div className="flex gap-4">
          <Link to='/temas' className='hover:underline' title="Postagens"><FileText size={25} /></Link>
            <Link to='/temas' className='hover:underline' title="Temas"><Tag size={25} /></Link>
            <Link to='/cadastroTema' className='hover:underline' title="Cadastrar Temas"><PlusSquare size={25} /></Link>
            <Link to='/' className='hover:underline' title="Perfil"><User size={25} /></Link>
            <Link to="" onClick={logout} className="hover:underline" title="Deslogar">
            <Link to='/' className='hover:underline'><LogOut size={25} /></Link>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
