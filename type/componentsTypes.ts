
// Nav bar Links
export interface NavLinkProps{
    href: string;
    title: string;
    isFooter?: boolean;
}

interface Link{
    path: string;
    title: string;
}

//  Nav bar Links For Mobile
export interface MenuOverlayProps{
    links: Link[];
}

// For Skills Bar
export interface SkillBarProps{
    name: string;
    level: string;
}

// For Project Card 
export interface ProjectCardProps{
    title: string;
    description: string;
    image: string;
    url: string;
};