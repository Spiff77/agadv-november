import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {AlbumService} from '../../../services/album.service';
import {Album} from '../../../model/album.model';
import {CartService} from '../../../services/cart.service';
import {AddComponent} from '../../dialog/album/add/add.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DetailComponent} from '../../dialog/album/detail/detail.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  private albumService = inject(AlbumService);
  private cartService = inject(CartService);
  private dialogService = inject(MatDialog);
  albums$!: Observable<Album[]>
  dialogRef!:MatDialogRef<AddComponent>


  ngOnInit() {
    this.albums$ = this.albumService.findAll()
  }

  addToCart(album: Album) {
    this.cartService.add(album);
  }

  trackById(index:number, album: Album){
    return album.id
  }


  getQuantityInCart(album: Album): number {
    return this.cartService.getQuantityInCart(album);
  }

  addAlbum() {
    this.dialogRef = this.dialogService.open(AddComponent);
    this.dialogRef.afterClosed().subscribe(() => {
      this.albums$ = this.albumService.findAll()
    });
  }

  openDetailModal(album: Album): void {
    this.dialogService.open(DetailComponent, {
      data: {
        album: album
      }
    });
  }
}
