import React from "react";

const Wrapper = (props) => {
    return (
        <>
            <div className="container mt-5 text-center">
                { props.children }
            </div>
        </>
    )
}

export default Wrapper