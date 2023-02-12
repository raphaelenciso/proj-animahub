import axios from "axios";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const url = "https://api.consumet.org/meta/anilist/trending";

  try {
    const { data } = await axios.get(url, {
      params: {
        page: 1,
        perPage: 10,
      },
    });

    return {
      props: { data: data.results },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};

export default function Home({ data }) {
  const router = useRouter();
  console.log(data);

  return (
    <div className="mx-auto flex flex-wrap gap-2 max-w-7xl w-[90%] justify-center">
      {data.map((item) => {
        return (
          <div className="w-[200px] flex flex-col items-center">
            <img
              src={item.image}
              alt=""
              key={item.id}
              className="w-[full] h-[300px] object-cover rounded-lg"
              onClick={() => router.push(`/details/${item.id}`)}
            />
            <h1 className="mx-auto text-center">{item.title.english}</h1>
          </div>
        );
      })}
    </div>
  );
}
