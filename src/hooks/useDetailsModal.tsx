import { useEffect, useState } from 'react';
import type { Episode } from '../Types/Types';

export default function useDetailsModal(characterExtraInfo: (url: string) => Promise<any>, episode: [string]) {
      const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setExpanded(false);
    setOpen(false);
  };
  const [characterEpisodeInfo, setCharacterEpisodeInfo] = useState<Episode[]>(
    [],
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const characterEpisodeList: Episode[] = [];
    episode.forEach(async (element) => {
      const episode = await characterExtraInfo(element).then(
        (response) => response,
      );
      console.log(episode);
      characterEpisodeList.push(episode);
    });
    setCharacterEpisodeInfo(characterEpisodeList);
  }, []);

  return {
    open,
    characterEpisodeInfo,
    expanded,
    handleOpen,
    handleClose,
    handleExpandClick,
  }
}