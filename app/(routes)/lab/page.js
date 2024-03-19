import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import Header from "@/app/components/header";
import LabTableFull from "@/app/(routes)/lab/labTableFull";

export default function Lab() {
  return (
    <>
      <main className="flex w-full items-center justify-center md:flex-row flex-col bg-white">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full">
          <Header />
          <LabTableFull />
          <Footer />
          <Menu />
        </div>
      </main>
    </>
  );
}
