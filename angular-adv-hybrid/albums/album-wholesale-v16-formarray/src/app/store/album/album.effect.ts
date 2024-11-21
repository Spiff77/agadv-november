import {Album} from '../../model/album.model';
import {createReducer, on} from '@ngrx/store';
import {addAlbum, removeAlbum} from './cart.actions';

export type AlbumState =  Album[]

export const initialState: AlbumState = []

export const albumReducer = createReducer(
  initialState,
)
