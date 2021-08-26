import React from 'react';

const Paginator = (props: {
    page: number,
    nextPage: number,
    lastPage: boolean,
    pageChanged: (page: number) => void
}) => {
    const next = () => {
        if (props.page < props.nextPage && props.lastPage == false) {
            props.pageChanged(props.page + 1);
            console.log("current es menor que next"+ props.page + " " + props.nextPage);
        }
    }

    const prev = () => {
        if (props.page >= 1) {
            props.pageChanged(props.page - 1);
            console.log("prev menos"+ props.page );
        }
    }

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={prev}>Previous</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link" onClick={next}>Next</a>
                </li>
            </ul>
        </nav>
    );
};

export default Paginator;