import * as React from 'react';
import NavMenu from './NavMenu';
// import TopBar from './TopBar';


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
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
        </div>)
    {/* <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a className="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div> */}

}

export default Layout;

