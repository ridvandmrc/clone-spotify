export interface NewReleases {
  images: string[];
  name: string;
}

export interface NewReleasesAlbums {
  items: NewReleases[];
}

export interface NewReleasesResponse {
  albums: NewReleasesAlbums;
}
