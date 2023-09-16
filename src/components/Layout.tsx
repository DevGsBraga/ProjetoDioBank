import { Header } from "./Header";
import { Footer } from "./Footer";
import { Botao } from "./Botao";



export const Layout = ({children}:any) => {
    <>
    <Header />
    {children}
    <Footer />
    <Botao />
    </>
}
