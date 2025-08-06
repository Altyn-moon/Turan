"use client";
import dynamic from "next/dynamic";

const AnimatedSections = dynamic(() => import("../sections/animated"), {
  ssr: false,
});

export default function ClientApp() {
  return <AnimatedSections />;
}
