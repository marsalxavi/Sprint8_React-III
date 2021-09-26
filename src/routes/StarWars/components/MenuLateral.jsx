import React from 'react'

export const MenuLateral = () => {
    return (
        <div>
            {/* <div className="col-md-2"> */}
                <h2>SpaceCrafts</h2>
                <h5>Galaxies</h5>
                <img
                    src="https://www.denofgeek.com/wp-content/uploads/2016/01/star-destroyer_0-scaled.jpg?fit=2560%2C2066"
                    className="img-thumbnail mx-auto d-block img-fluid"
                />
                <p>Explore SpaceCrafts</p>
                <h3 id="Naus">SpaceCrafts</h3>
                <p>Some SpaceCrafts:</p>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#Ship01">
                            Ship01
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Ship02">
                            Ship02
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Ship03">
                            Ship03
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Ship04">
                            Ship04
                        </a>
                    </li>
                </ul>
                <hr className="d-sm-none" />
            {/* </div> */}
        </div>
    )
}
