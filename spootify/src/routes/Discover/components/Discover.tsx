import { FC, useEffect, useState } from "react";
import { DiscoverBlock } from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { musicService } from "../../../service/music";
import { RequestUtils } from "../../../utils";
import {
  NewReleasesResponse,
  FeaturedPlaylistsResponse,
  CategoriesResponseModel,
  NewReleases,
  FeaturedPlaylists,
  Category,
} from "../../../models";

export const Discover: FC = () => {
  const [newReleases, setNewReleases] = useState<NewReleases[]>([]);
  const [playlists, setPlaylists] = useState<FeaturedPlaylists[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    RequestUtils.request<FeaturedPlaylistsResponse>(
      musicService.getFeaturedList(),
      (data) => setPlaylists(data.playlists.items)
    );

    RequestUtils.request<NewReleasesResponse>(
      musicService.getNewReleased(),
      (data) => setNewReleases(data.albums.items)
    );

    RequestUtils.request<CategoriesResponseModel>(
      musicService.getCenres(),
      (data) => setCategories(data.categories.items)
    );
  }, []);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};
