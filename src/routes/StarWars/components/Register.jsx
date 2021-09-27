import React from 'react'

export const Register = () => {
    return (
        <div>
            <register>
                {/* ========= El Modal del Registre. Inici ========= */}
                <div className="modal" id="myRegister">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Register</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    ×
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="container">
                                    {/* <h2>Stacked form</h2> */}
                                    <form action="/action_page.php">
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Enter email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pwd1">Password:</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="pwd1"
                                                placeholder="Enter password"
                                                name="pswd1"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pwd2">Confirm Password:</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="pwd2"
                                                placeholder="Enter password"
                                                name="pswd2"
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </register>{" "}
            {/* ========= El Modal del Registre. Fi */}
        </div>
    )
}
