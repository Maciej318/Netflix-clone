"use client";
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import PlayVideoModel from "./PlayVideoModel";
import { useState } from "react";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
  movieImage: string;
}

export default function MovieCard({
  movieId,
  overview,
  title,
  watchList,
  watchListId,
  youtubeUrl,
  age,
  time,
  year,
  movieImage,
}: iAppProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="mb-10">
        <PlayCircle className="h-20 w-20" />
      </button>

      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form action="">
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action="">
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal text-sm border py-0.5 px-1 border-gray-200 rounded">
            {age}+
          </p>
          <p className="font-normal text-sm">{time} godz.</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light mt-1">
          {overview}
        </p>
      </div>

      <PlayVideoModel
        youtubeUrl={youtubeUrl}
        key={movieId}
        title={title}
        overview={overview}
        state={open}
        changeSate={setOpen}
        age={age}
        duration={time}
        release={year}
        movieImage={movieImage}
      />
    </>
  );
}
