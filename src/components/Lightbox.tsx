import { useState, useEffect, useCallback, useRef } from 'react';
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
    const dialogRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);
    const animationTimerRef = useRef<number | null>(null);

    const currentImage = images[currentIndex];
    const hasMultiple = images.length > 1;

    const animateTo = useCallback((resolveIndex: (current: number) => number) => {
        setIsAnimating(true);

        if (animationTimerRef.current !== null) {
            window.clearTimeout(animationTimerRef.current);
        }

        animationTimerRef.current = window.setTimeout(() => {
            setCurrentIndex(resolveIndex);
            setIsAnimating(false);
            animationTimerRef.current = null;
        }, 150);
    }, []);

    const goPrev = useCallback(() => {
        animateTo((index) => index === 0 ? images.length - 1 : index - 1);
    }, [animateTo, images.length]);

    const goNext = useCallback(() => {
        animateTo((index) => index === images.length - 1 ? 0 : index + 1);
    }, [animateTo, images.length]);

    useEffect(() => {
        previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();

            if (e.key === 'Tab') {
                const dialog = dialogRef.current;
                if (!dialog) return;

                const focusable = dialog.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (!first || !last) return;

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        dialogRef.current?.focus();

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);

            if (animationTimerRef.current !== null) {
                window.clearTimeout(animationTimerRef.current);
            }

            previousFocusRef.current?.focus();
        };
    }, [onClose, goPrev, goNext]);

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div
                ref={dialogRef}
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-describedby="lightbox-caption"
                tabIndex={-1}
            >
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
                    <p id="lightbox-caption" className="lightbox-caption">{currentImage.alt}</p>
                    {hasMultiple && (
                        <span className="lightbox-counter">{currentIndex + 1} / {images.length}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
