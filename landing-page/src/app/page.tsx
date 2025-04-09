'use client';
import Image from "next/image";
import styles from "./page.module.css";
import MainNav from "@/components/layout/MainNav";
import Banner from "@/components/home/Banner";
import Intelligent from "@/components/home/Intelligent";
export default function Home() {
  return (
    <div className="flex-col">
      <MainNav />
      <section className="">
        <Banner />
      </section>
      <section className="">
        <Intelligent />
      </section>
    </div>
  );
}
