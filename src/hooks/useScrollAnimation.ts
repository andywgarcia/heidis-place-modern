import { useEffect, useRef, useState } from 'react';

/**
 * Hook that triggers a fade-in animation when an element enters the viewport.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 */
export function useScrollAnimation(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element); // Only animate once
                }
            },
            { threshold, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}
