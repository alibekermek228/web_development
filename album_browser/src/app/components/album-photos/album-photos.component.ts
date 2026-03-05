import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.scss'
})
export class AlbumPhotosComponent implements OnInit {
  albumId = 0;
  photos: Photo[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('id'));
      if (Number.isNaN(albumId) || albumId <= 0) {
        this.errorMessage = 'Invalid album id.';
        this.isLoading = false;
        return;
      }

      this.albumId = albumId;
      this.loadPhotos(albumId);
    });
  }

  loadPhotos(albumId: number): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.albumService.getAlbumPhotos(albumId).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load album photos.';
        this.isLoading = false;
      }
    });
  }

  trackByPhotoId(index: number, photo: Photo): number {
    return photo.id;
  }
}
