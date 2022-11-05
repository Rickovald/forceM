export interface IMainBanner {
  id: number
  img: string
  head: string
  button: string
  href: string
  href_type: string
}

export interface IAlbum {
  id: number
  name: string
  year: string
  href: string
  image: string
  desc: string
}

export interface IConcerts {
  date: Date
  concert_name?: string
  country: string
  city: string
  tickets_price: string
  tickets: string
  group: string
  place: string
  main_album?: string
}

export interface IUser {
    id: number;
    email: string;
    password: string;
}

export interface ISongPrograms {
    id: number;
    name: string;
    difficulty: string;
    comments: string;
    place: string;
    concert_name: string;
}

export interface ISongs {
    id: number;
    name: string;
    db_name: string;
    id_in_album: string;
    album_id: string;
}