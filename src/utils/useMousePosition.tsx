import { useState, useEffect } from "react";

// Simple event listener to update mouse position for cursor follower
export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({x: -100, y: -100})

    const updateMousePosition = (event:any) => {
        setMousePosition({x: event.clientX - 150, y: event.clientY - 150})
    }

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [])

    return mousePosition;
}