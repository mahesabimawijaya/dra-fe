import Navbar from "@/components/navbar";

export default function Home() {
  console.log("helo");
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-3xl font-semibold">HERO SECTION</h1>
      </div>
    </>
  );
}
