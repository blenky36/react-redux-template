import * as React from 'react';
import NavMenu from './NavMenu';


const Layout = ({ children }) => {

    return (
        <div >
            <div id="wrapper">
                <NavMenu />
                <div id="content-wrapper">
                    <div id="content">
                        <div className="container-fluid" style={{ textAlign: 'center' }}>
                            {children}
                        </div>
                    </div>
                    {/* <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; FDM {new Date().getFullYear()}</span>
                            </div>
                        </div>
                    </footer> */}
                </div>
            </div>
            {/* <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a> */}
        </div>)

}

export default Layout;

