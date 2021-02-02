export interface VirtualizedProps {
    items: ListItem[];
}

export interface ListItem {
    id: string;
    image: string;
    name: string;
    text: string;
}