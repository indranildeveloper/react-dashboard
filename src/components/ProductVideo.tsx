import queryString from "query-string";
import { useAppSelector } from "../hooks/useAppDispatch";
import Loading from "./Loading";

const ProductVideo = () => {
  const { product, isLoading } = useAppSelector((state) => state.product);

  const { video, name } = product;

  let embedId;
  if (video) {
    embedId = queryString.parseUrl(video).query.v;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="card border mt-6 p-6 bg-white rounded-md">
      <h4 className="font-semibold">Video</h4>
      <div className="flex justify-center items-center">
        <iframe
          width="640"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={name}
          className="my-6"
        />
      </div>
    </div>
  );
};

export default ProductVideo;
