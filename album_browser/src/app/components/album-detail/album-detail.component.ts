import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  isLoading = true;
  isSaving = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('id'));
      if (Number.isNaN(albumId) || albumId <= 0) {
        this.isLoading = false;
        this.errorMessage = 'Invalid album id.';
        return;
      }

      this.loadAlbum(albumId);
    });
  }

  loadAlbum(albumId: number): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.albumService.getAlbum(albumId).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load album details.';
        this.isLoading = false;
      }
    });
  }

  saveTitle(): void {
    if (!this.album) {
      return;
    }

    const cleanTitle = this.editedTitle.trim();
    if (!cleanTitle) {
      this.errorMessage = 'Title cannot be empty.';
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const updatedAlbum: Album = {
      ...this.album,
      title: cleanTitle
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (savedAlbum) => {
        this.album = {
          ...savedAlbum,
          title: cleanTitle
        };
        this.editedTitle = cleanTitle;
        this.successMessage = 'Album title updated successfully.';
        this.isSaving = false;
      },
      error: () => {
        this.errorMessage = 'Could not save album title.';
        this.isSaving = false;
      }
    });
  }
}
