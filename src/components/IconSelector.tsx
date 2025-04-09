import React from 'react';
import { Angry, CircleSlash2, Frown, Layers, PartyPopper, ShieldUser, Smile, Users } from 'lucide-react';

type IconSelectorProps = {
    iconName: string;
    size?: number;
    className?: string;
};

const IconSelector: React.FC<IconSelectorProps> = ({ iconName, size = 106, className = 'opacity-20' }) => {
    const icons: { [key: string]: React.ReactNode } = {
        smile: <Smile size={size} className={className} />,
        users: <Users size={size} className={className} />,
        "shield-user": <ShieldUser size={size} className={className} />,
        layers: <Layers size={size} className={className} />,
        "circle-slash": <CircleSlash2 size={size} className={className} />,
        angry: <Angry size={size} className={className} />,
        frown: <Frown size={size} className={className} />,
        "party-popper": <PartyPopper size={size} className={className} />,
    };

    return <>{icons[iconName] || null}</>;
};

export default IconSelector;
