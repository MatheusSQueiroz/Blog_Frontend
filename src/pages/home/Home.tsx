function Home() {
    return (
        <>
            <div className="w-screen flex justify-center">
                <div>
                    <div className="max-w-7xl flex flex-col items-center">
                        <h2>Seja Bem Vinde!</h2>
                        <p>Expresse aqui seus pensamentos e opniões</p>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img 
                            className='img'
                            src="\rocket-animate.svg"
                            alt="Imagem de um foguete" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home