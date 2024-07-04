"use client";

import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";
import { useState } from "react";
import PlayVideoModel from "./PlayVideoModel";

interface iAppProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
  movieImage: string;
}

export default function MovieButtons({
  age,
  duration,
  id,
  overview,
  releaseDate,
  title,
  youtubeUrl,
  movieImage,
}: iAppProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className="gap-1 text-lg font-medium"
      >
        <Play className="w-5 h-5" /> Odtwórz
      </Button>
      <Button
        onClick={() => setOpen(!open)}
        className="gap-1 text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <Info className="w-5 h-5" /> Wiecej informacji
      </Button>

      <PlayVideoModel
        state={open}
        age={age}
        duration={duration}
        movieImage={movieImage}
        overview={overview}
        changeSate={setOpen}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
        key={id}
      />
    </>
  );
}
