import {Component, inject, Inject} from '@angular/core';
import {Album} from '../../../../model/album.model';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import {AlbumCommentsService} from '../../../../services/album-comments.service';
import { MatButton } from '@angular/material/button';
import { CommentsComponent } from '../../../albums/comments/comments.component';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    standalone: true,
    imports: [MatDialogContent, MatDialogTitle, CommentsComponent, MatDialogActions, MatButton, MatDialogClose]
})
export class DetailComponent {

  showComments = false;

  albumCommentsService: AlbumCommentsService= inject(AlbumCommentsService)

  constructor(@Inject(MAT_DIALOG_DATA) public data: {album:Album}) {
  }


}
