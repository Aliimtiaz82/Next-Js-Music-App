import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={musicProjects} />
    </div>
  );
}

export const musicProjects = [
  {
    title: "Spotify",
    description:
      "A digital music service that gives you access to millions of songs and podcasts from around the world.",
    link: "https://spotify.com",
  },
  {
    title: "SoundCloud",
    description:
      "A platform that empowers artists to share their music and connect directly with fans worldwide.",
    link: "https://soundcloud.com",
  },
  {
    title: "Apple Music",
    description:
      "A music and video streaming service developed by Apple, offering a vast catalog of over 100 million songs.",
    link: "https://music.apple.com",
  },
  {
    title: "Bandcamp",
    description:
      "An online music store and community where artists sell their music and merchandise directly to fans.",
    link: "https://bandcamp.com",
  },
  {
    title: "YouTube Music",
    description:
      "A music streaming service developed by YouTube, providing a tailored experience for discovering and listening to music.",
    link: "https://music.youtube.com",
  },
  {
    title: "Tidal",
    description:
      "A global music streaming service that offers high-fidelity sound quality, hi-def video, and curated editorial.",
    link: "https://tidal.com",
  },
];
