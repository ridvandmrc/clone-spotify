import { httpService } from "../http-service";

class MusicService {
  private getUri() {
    return "https://api.spotify.com/v1/browse";
  }

  getNewReleased() {
    return httpService.get(this.getUri(), "new-releases", undefined);
  }

  getFeaturedList() {
    return httpService.get(this.getUri(), "featured-playlists", undefined);
  }

  getCenres() {
    return httpService.get(this.getUri(), "categories");
  }
}

export const musicService = new MusicService();
