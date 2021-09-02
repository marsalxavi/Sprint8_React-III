
import React from 'react'

// Peu de la pagina web
const Peu = (PageNum, { setPageNum }) => {

    // Pagina amunt i avall
    const LastPage = () => setPageNum(PageNum - 1)
    const NextPage = () => setPageNum(PageNum + 1)

    return (
        <footer className="App-footer">
            <div>
                <tr>
                    <td><button onClick={LastPage}>{'<< Last Page'}</button></td>
                    <td>Page Num: {PageNum}</td>
                    <td><button onClick={NextPage}>{'Next Page >>'}</button></td>
                </tr>
            </div>
        </footer>
    )
}

export default Peu