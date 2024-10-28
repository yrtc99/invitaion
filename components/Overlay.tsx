import React from 'react';

interface OverlayProps {
    onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
    return (
        <div className="overlay" onClick={onClick}>
            <h2>touch</h2>
        </div>
    );
};

export default Overlay;