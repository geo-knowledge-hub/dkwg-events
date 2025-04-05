/**
 * This file is part of DKWG-Events.
 * 
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 * 
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        GEO DKWG events agenda
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        Application footer
      </footer>
    </div>
  );
}
