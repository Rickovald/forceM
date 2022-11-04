import s from './albums.module.sass'
import AlbumsStore from '../../../stores/AlbumsStore'
import { useEffect, useState } from 'react'
import Album from './Album'
import { observer } from 'mobx-react-lite'
import { IAlbum } from '../../../presets/interfaces'
import React from 'react'

const Albums = observer(() => {
  const [albums, setAlbums] = useState<IAlbum[]>([])
  const data = AlbumsStore.getAlbums()
  useEffect(() => {
    if (data) setAlbums(data)
  }, [data])
  return (
        <div className={`${s.albums}`}>
            {albums.map(({ name, year, desc, image }, index) => {
              return <Album
                    key={`banner_card_${index}`}
                    propDesc={desc} propName={name}
                    propYear={year} propimg={image}
                />
            })}
        </div>
  )
})

export default Albums