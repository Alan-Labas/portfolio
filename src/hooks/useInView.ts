import { useRef, useLayoutEffect } from "react";
import type { RefObject } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(threshold = 0.15): RefObject<T | null> {
    const ref = useRef<T | null>(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.classList.add("reveal");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}