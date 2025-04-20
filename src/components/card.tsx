/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

/**
 * Props for rendering a GEO Focus Area card component.
 */
interface GEOFocusAreaCardProps {
  /**
   * Image source for the card.
   * Can be a local `StaticImageData` (Next.js `Image`) or an external URL string.
   */
  image: StaticImageData[] | StaticImageData | string;

  /**
   * Alt text for the image (for accessibility and SEO).
   */
  imageAlt: string;

  /**
   * Title displayed on the card.
   */
  title: string;

  /**
   * Optional link URL. If provided, the entire card becomes clickable.
   */
  href?: string;

  /**
   * Set to `true` if the link should open in a new tab.
   */
  external?: boolean;

  /**
   * Optional Tailwind utility classes to customize the image appearance.
   */
  imageClass?: string;
}

/**
 * Render a GEO Focus Area card with an image, title, and optional link.
 *
 * @param image - The image source (local `StaticImageData` or external URL - multiple supported).
 * @param imageAlt - Alt text for the image (multiple supported).
 * @param title - Title text displayed below the image.
 * @param href - Optional URL to make the card clickable.
 * @param external - If `true`, opens the link in a new tab. Defaults to `false`.
 * @param imageClass - Optional Tailwind CSS classes for customizing the image styling.
 */
/**
 * Render a GEO Focus Area card with support for one or two icons, a title, and optional navigation.
 */
export const GEOFocusAreaCard: React.FC<GEOFocusAreaCardProps> = ({
  image,
  imageAlt,
  title,
  href,
  external = false,
  imageClass = 'h-28 w-28 mb-6',
}) => {
  const images = Array.isArray(image) ? image : [image];
  const alts = Array.isArray(imageAlt) ? imageAlt : [imageAlt];

  const content = (
    <div className="flex h-full w-full cursor-pointer flex-col items-center justify-between rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md">
      <div className={`mb-4 flex items-center justify-center gap-4`}>
        {images.map((img, i) => (
          <div key={i} className={imageClass}>
            <Image
              src={img}
              alt={alts[i] || `Icon ${i + 1}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
      <h3 className="text-center text-sm font-semibold text-gray-900">{title}</h3>
    </div>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="h-full">
        {content}
      </a>
    );
  } else if (href) {
    return (
      <Link href={href} className="h-full">
        {content}
      </Link>
    );
  }

  return content;
};
