import { useEffect, useState } from "react";
import css from "./PhotoList.module.scss";
export interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
  favourite: boolean;
}

export function MswPhotoList() {
  const [loading, setLoading] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    async function load() {
      setLoading((l) => l + 1);

      try {
        const response = await fetch(`/api/photos?name=${name}`);
        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.message);
        }

        setPhotos(json);
        setError("");
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading((l) => l - 1);
      }
    }

    void load();
  }, [name, refresh]);

  return (
    <div>
      <button onClick={() => setRefresh((cr) => ++cr)}>Refresh</button>
      <label>
        Your Name:
        <input
          name="Your name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </label>
      <div className={css.absolute}>
        {error ? <div className={css.error}>{error}</div> : null}
        {loading ? <div className={css.loading}>Loading...</div> : null}
      </div>

      {photos &&
        photos.map((photo) => <PhotoDetail photo={photo} key={photo.id} />)}
    </div>
  );
}

function PhotoDetail({ photo }: { photo: Photo }) {
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    setFavourite(false);
  }, [photo]);

  return (
    <div className={css.listItem}>
      <img
        className={css.photo}
        src={photo.thumbnailUrl}
        aria-label={photo.title}
      />
      <div>
        <h2>{photo.title}</h2>
        <h3>PhotoId: {photo.id}</h3>

        <button
          onClick={async () => {
            const data = await fetch("/api/favourite", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...photo,
                favourite,
              }),
            });
            const response = await data.json();
            setFavourite(response.favourite);
          }}
        >
          {favourite ? "Remove from Favourites" : "Add To Favourites"}
        </button>
      </div>
    </div>
  );
}
