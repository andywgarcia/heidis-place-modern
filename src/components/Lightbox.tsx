import { useState, useEffect, useCallback } from 'react';
import './Lightbox.css';

interface LightboxImage {
    src: string;
    alt: string;
}

interface LightboxProps {
    images: LightboxImage[];
    initialIndex: number;
    onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isAnimating, setIsAnimating] = useState(false);

    const currentImage = images[currentIndex];
    const hasMultiple = images.length > 1;

    const goTo = useCallback((index: number) => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
        }, 150);
    }, []);

    const goPrev = useCallback(() => {
        goTo(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }, [currentIndex, images.length, goTo]);

    const goNext = useCallback(() => {
        goTo(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, [currentIndex, images.length, goTo]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, goPrev, goNext]);

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {hasMultiple && (
                    <button className="lightbox-nav lightbox-prev" onClick={goPrev} aria-label="Previous image">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                )}

                <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className={`lightbox-image ${isAnimating ? 'fading' : ''}`}
                />

                {hasMultiple && (
                    <button className="lightbox-nav lightbox-next" onClick={goNext} aria-label="Next image">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                )}

                <div className="lightbox-footer">
                    <p className="lightbox-caption">{currentImage.alt}</p>
                    {hasMultiple && (
                        <span className="lightbox-counter">{currentIndex + 1} / {images.length}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
