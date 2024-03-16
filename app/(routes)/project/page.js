"use client";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import Header from "@/app/components/header";
import ProjectSearch from "./projectSearch";
import ProjectTable from "./projectTable";
import PaginationComponent from "@/app/components/pagination";

export default function Project() {
  return (
    <>
      <main className="flex w-full items-center justify-center md:flex-row flex-col bg-white">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full">
          <Header />
          <ProjectSearch />
          <ProjectTable />
          <div className="mt-8">
            <PaginationComponent totalPages={10} />
          </div>

          <Footer />
          <Menu />
        </div>
      </main>
    </>
  );
}
