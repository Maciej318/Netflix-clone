import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import Image from "next/image";

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeSate: any;
  release: number;
  age: number;
  duration: number;
  movieImage: string;
}

export default function PlayVideoModel({
  changeSate,
  overview,
  state,
  title,
  youtubeUrl,
  age,
  duration,
  release,
  movieImage,
}: iAppProps) {
  return (
    <Dialog open={state} onOpenChange={() => changeSate(!state)}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader className="p-2">
          <Image
            src={movieImage}
            alt="movieImage"
            className="w-full rounded-t-lg mb-2"
            height={200}
            width={200}
          />
          <DialogHeader>{title}</DialogHeader>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p>{release}</p>
            <p className="border py-0.5 px-1 border-gray-200 rounded">{age}+</p>
            <p>{duration} godz.</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
}
