"use client";

import React, { useState } from 'react';

interface OverlayProps {
    onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(true);

    // 點擊觸發淡出效果
    const handleClick = () => {
        setIsVisible(false); // 觸發淡出效果
        setTimeout(onClick, 500); // 在500ms後觸發外部的 onClick 行為（例如關閉 Overlay）
    };

    return (
        <div
            className={`overlay transition-opacity duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClick}
        >
            {/* 忽明忽暗的箭頭 */}
            <div className="absolute bottom-40 right-10 noto-serif-tc-regular tracking-wide text-black animate-pulse z-50 border border-black rounded-full px-4 py-2">
                點擊進入
            </div>
        </div>
    );
};

export default Overlay;
