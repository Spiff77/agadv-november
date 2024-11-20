import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlbumService} from '../../../services/album.service';
import {Router} from '@angular/router';
import {Album} from '../../../model/album.model';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss']
})
export class AlbumAddComponent {

  private fb = inject(FormBuilder)
  private albumService = inject(AlbumService)
  private router = inject(Router)


  albumForm = this.fb.group({
    id: [0],
    name: ['', Validators.required,],
    artist: [''],
    description: [''],
    price: [0],
    tags: this.fb.array([])
  })

  saveAlbum() {
    this.albumService.save(this.albumForm.value as Album).subscribe(() => {
      this.router.navigate(['/shop']);
    })
  }
}
