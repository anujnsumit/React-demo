import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css"

const Layout=(Component)=>(props)=>{
    return(
        <div className="main_container">
            <Header/>
            <Component {...props}/>
            <Footer/>
        </div>
    )
}

export default Layout;
