import dynamic from "next/dynamic";

const Header = dynamic(
  () => import("components/Header").then((m) => m.Header),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  return (
    <>
      <Header />

      <h1>App1 </h1>
    </ >
  );
}
