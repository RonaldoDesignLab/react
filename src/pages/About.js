import { Header } from "../assets/Header";

export const About = () => {
    return(
        <>
        <Header />
        <div className="app bg-slate-600 h-[100vh]">
                <div className='main mx-auto'>
                    <div className="hero bg-slate-500 py-32">
                        <h1 className="text-center text-white text-[24px]">About us</h1>
                    </div>
                </div>
            </div>
        </>
    );
};