import { useEffect, useState } from "react";
import css from "./PhotoList.module.css";
export interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
  favourite: boolean;
}

// export function MswPhotosList() {
//   const [refresh, setRefresh] = useState(0);
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <button onClick={() => setRefresh((cr) => ++cr)}>Refresh</button>
//       <div>
//         <label>
//           Your Name:
//           <input
//             name="Your name"
//             value={name}
//             onChange={(evt) => setName(evt.target.value)}
//           />
//         </label>
//         <List refresh={refresh} name={name} />
//       </div>
//     </div>
//   );
// }

export function MswPhotoList() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);

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
        setLoading(false);
      }
    }

    void load();
  }, [name]);

  return (
    <div>
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

        {/* <button
          onClick={() => {
            // we already have an example with .catch for this video :)
            void axios
              .post<Photo>("/api/favourite", { ...photo, favourite })
              .then((response) => {
                setFavourite(response.data.favourite);
              });
          }}
        >
          {favourite ? "Remove from Favourites" : "Add To Favourites"}
        </button> */}
      </div>
    </div>
  );
}
