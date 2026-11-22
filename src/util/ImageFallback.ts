import type { SyntheticEvent } from 'react';
import defaultImage from '/src/assets/pexels-jplenio-1103970.jpg';

export { defaultImage };

export function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
  const image = event.currentTarget;

  if (image.dataset.fallbackApplied === 'true') {
    return;
  }

  image.onerror = null;
  image.dataset.fallbackApplied = 'true';
  image.src = defaultImage;
}
