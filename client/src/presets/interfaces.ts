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

export interface ISongs {
  name: string
  id_in_album: number
}