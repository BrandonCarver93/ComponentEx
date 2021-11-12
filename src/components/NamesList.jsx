import React from 'react';

const NamesList = (props) => {
    let renderedNames = props.names.map((aName) => {
    return <p>{aName}</p>;
    });
    return (
        <div>
            <ol>{renderedNames}</ol>
        </div>
    );
};
    
export default NamesList;