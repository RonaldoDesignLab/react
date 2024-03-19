
export const Header = () => {
    return(
        <>
            <div className="app bg-slate-600">
                <div className='main max-w-7xl mx-auto py-6 '>
                    <header className="flex justify-between items-center">
                        <div className="logo text-white font-semibold text-[24px]">
                            Logo
                        </div>
                        <div className="navbar">
                            <ul className='flex items-center gap-5 text-white'>
                                <a href="/home">HOME</a>
                                <a href="/about">ABOUT</a>
                                <a href="/contact">CONTACT</a>
                            </ul>
                        </div>

                    </header>
                </div>
            </div>
        </>
    )
};

