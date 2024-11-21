import {Album} from '../../model/album.model';
import {createReducer, on} from '@ngrx/store';
import {addAlbum, removeAlbum} from './cart.actions';
import {state} from '@angular/animations';

export type AlbumCart = Album & {quantity: number};
export type CartState = {
  albums: AlbumCart[]
};

export const initialState: CartState = {
  albums: [{
    id: 5,
    name: "Led Zeppelin IV",
    artist: "Led Zeppelin",
    description: "Led Zeppelin IV is the fourth studio album by the English rock band Led Zeppelin, released on 8 November 1971",
    price: 23.9,
    tags: [
      "rock",
      "hard rock",
      "classic"
    ],
    quantity:4
  },]
}

export const cartReducer = createReducer(
  initialState,
  on(addAlbum, (state, {album}) => {
    let albums = [...state.albums]
    let existingAlbumIndex = albums.findIndex(a => a.id === album.id)
    if (existingAlbumIndex !== -1) {
      let existingAlbum = {...albums[existingAlbumIndex]}
      existingAlbum.quantity++
      albums[existingAlbumIndex] = existingAlbum
    } else {
      albums.push({...album, quantity: 1});
    }
    return {...state, albums}
  }),

  on(removeAlbum, (state, {album}) => {
    let albums = [...state.albums]
    let existingAlbumIndex = albums.findIndex(a => a.id === album.id)
    if (existingAlbumIndex !== -1) {
      let existingAlbum = {...albums[existingAlbumIndex]}
      existingAlbum.quantity--
      albums[existingAlbumIndex] = existingAlbum
      if (existingAlbum.quantity === 0){
        albums.splice(albums.indexOf(existingAlbum), 1)
      }
    }
    return {...state, albums}
  })
)
