export interface IMainBanner {
    id: number;
    img: string;
    head: string;
    button: string;
    href: string;
    href_type: string;
}

export interface IAlbum {
    id: number;
    name: string;
    year: string;
    href: string;
    image: string;
    desc: string;
}

export interface IConcerts {
    date: Date;
    country: string;
    city: string;
    tickets_price: string;
    tickets: string;
    group: string;
    place: string;
}