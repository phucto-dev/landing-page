'use client';
import Image from "next/image";
import styles from "./page.module.css";
import MainNav from "@/components/layout/MainNav";
import Banner from "@/components/home/Banner";
import Intelligent from "@/components/home/Intelligent";
import Slide from "@/components/home/Slide";
import Platform from "@/components/home/Platform";
export default function Home() {
  return (
    <div className="flex-col bg-white">
      <MainNav />
      <section className="">
        <Banner />
      </section>
      <section className="flex justify-center items-center">
        <Intelligent />
      </section>
      <section className="flex justify-center items-center">
        <Slide />
      </section>
      <section className="flex justify-center items-center">
        <Platform />
      </section>
    </div>
  );
}
