import { useState, useEffect, useRef } from 'react'
import './LeaderboardPosition.css'

interface LeaderboardPosition {
    routeNumber: string;
    routeName: string;
    speed: number;
}

function LeaderboardPosition({ routeNumber, routeName, speed }: LeaderboardPosition) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Then use it:
    // Mobile: 36 dashes + 2 = 38 chars, Desktop: 50 dashes + 2 = 52 chars
    const borderWidth = isMobile ? 38 : 52;
    const border = isMobile
        ? '+------------------------------------+'
        : '+--------------------------------------------------+';

    // 50, 36

    return (
        <div className="leaderboard-position" ref={containerRef}>
            <div className="border">
                {border}
            </div>
            <div className="content" style={{ width: `${borderWidth}ch` }}>
                <div className="left-side">
                    |&nbsp;
                    <div className={`position-route-number ${routeNumber.startsWith('3') ? 'blue' : ''}`}>{routeNumber}</div>
                    &nbsp;-&nbsp;
                    <div className="position-route-name">{routeName}</div>
                </div>
                <div className="right-side">
                    <div className="position-speed">{speed.toFixed(1)} km/h</div>
                    &nbsp;|
                </div>
            </div>
            <div className="border">
                {border}
            </div>
        </div>
    );
}

export default LeaderboardPosition;
