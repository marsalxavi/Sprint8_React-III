import React from 'react'

export const Login = () => {
    return (
        <div>
            <login>
                {/* ========= El Modal del Login. Inici ========= */}
                <div className="modal" id="myLogin">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Inici Sessio</h4>
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
                                            <label htmlFor="pwd">Password:</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="pwd"
                                                placeholder="Enter password"
                                                name="pswd"
                                            />
                                        </div>
                                        <div className="form-group form-check">
                                            <label className="form-check-label">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="remember"
                                                />{" "}
                                                Remember me
                                            </label>
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
            </login>{" "}
        </div>
    )
}
{/* ========= El Modal del Login. Fi */}