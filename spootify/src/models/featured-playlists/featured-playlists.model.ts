export interface FeaturedPlaylists {
  images: string[];
  name: string;
}

export interface FeaturedPlayLilstList {
  items: FeaturedPlaylists[];
}

export interface FeaturedPlaylistsResponse {
  playlists: FeaturedPlayLilstList;
}
