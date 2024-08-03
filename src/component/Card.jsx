import React from 'react'

const Card = (props) => {
    const { children, display, widht } = props;
    return (
        <div className={`card card-compact ${widht} h-[400px]`} style={display}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card