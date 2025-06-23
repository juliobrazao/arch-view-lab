import { useHome } from '@/hooks/use-home.hook';

export default function Home() {
  const { data: homeData, isLoading: homeDataIsLoading } = useHome();

  return (
    <>
      <h1>Home</h1>
      <small>
        {!homeDataIsLoading &&
          homeData?.map((data) => {
            return (
              <div key={data.name}>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
              </div>
            );
          })}
      </small>
    </>
  );
}
