"use client"
import React, { useState, useEffect } from 'react';
import Overlay from './Overlay';

const PlayButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [showOverlay, setShowOverlay] = useState(true);
    const audioRef = React.useRef<HTMLAudioElement>(null);
    

    const togglePlay = async () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                try {
                    await audioRef.current.play();
                } catch (error) {
                    console.error("播放失败:", error);
                }
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleOverlayClick = () => {
        setShowOverlay(false);
        togglePlay();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setRotation((prevRotation) => prevRotation + 10);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className='flex justify-end '>
            <div className="play-button" onClick={togglePlay}>
                {showOverlay && <Overlay onClick={handleOverlayClick} />}
                <div className="icon" style={{ transform: `rotate(${rotation}deg)` }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="3" stroke="#B89C9A" strokeWidth="1.5" />
                        <path d="M7.40381 16.5967C4.8654 14.0583 4.8654 9.94271 7.40381 7.4043M16.5962 7.4043C17.6103 8.41836 18.2192 9.68413 18.4231 11.0005M16.5962 16.5967C17.0785 16.1144 17.4692 15.5751 17.7682 15.0005" stroke="#B89C9A" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#B89C9A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
                <audio ref={audioRef} src="music.mp3" loop />
            </div>
        </div>
    );
};

export default PlayButton;