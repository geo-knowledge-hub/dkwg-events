/**
 * This file is part of DKWG-Events.
 * 
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 * 
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GEO Knowledge and Knowledge Working Group events agenda',
  description: 'Agenda app for the events organized by the GEO DWKG.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
