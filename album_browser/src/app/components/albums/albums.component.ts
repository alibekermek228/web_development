import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private readonly albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load albums. Please try again.';
        this.isLoading = false;
      }
    });
  }

  deleteAlbum(albumId: number, event: Event): void {
    event.stopPropagation();

    this.albumService.deleteAlbum(albumId).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== albumId);
      },
      error: () => {
        this.errorMessage = 'Could not delete this album.';
      }
    });
  }

  trackByAlbumId(index: number, album: Album): number {
    return album.id;
  }
}
