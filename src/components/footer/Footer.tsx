import { GitHub, Linkedin } from 'react-feather'
import { Link } from 'react-router-dom'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-primary text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Matheus Queiroz | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                    <Link to="https://www.linkedin.com/in/matheusqrz/" title="Linkedin"><Linkedin size={48} /></Link>
                      <Link to="https://github.com/MatheusSQueiroz" title="GitHub"><GitHub size={48} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer