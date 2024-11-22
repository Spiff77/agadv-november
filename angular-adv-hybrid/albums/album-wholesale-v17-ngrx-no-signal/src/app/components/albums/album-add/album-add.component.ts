import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {

  FormArray,
  FormBuilder,
  FormGroup, ReactiveFormsModule,
} from '@angular/forms';
import {AlbumService} from '../../../services/album.service';
import {Router} from '@angular/router';
import {MatFormField, MatLabel,MatInput, MatInputModule} from '@angular/material/input';

import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-album-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './album-add.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    NgForOf
  ],
  styleUrls: ['./album-add.component.scss']
})
export class AlbumAddComponent {

  private fb = inject(FormBuilder);
  private albumService = inject(AlbumService);
  private router = inject(Router);

  albumForm: FormGroup = this.fb.group({
    id: [0],
    name: [''],
    artist: [''],
    description: [''],
    price: [0],
    tags: this.fb.array([])
  })


  get tags(): FormArray {
    return this.albumForm.get('tags') as FormArray;
  }

  onSubmit() {
    this.albumService.save(this.albumForm.value).subscribe(() => {
      this.router.navigate(['/shop']);
    })
  }

  addTag() {
    this.tags.push(this.fb.control(''));
  }


}

