/**
 * This file is part of DKWG-Events.
 * 
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 * 
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { PrismaClient } from '@prisma/client'
import { withAccelerate } from "@prisma/extension-accelerate"

// Initialize prisma client + prisma accelerate
const prisma = new PrismaClient().$extends(withAccelerate())

// Register prisma
const globalForPrisma = global as unknown as { prisma: typeof prisma }
if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
}

// Export it
export default prisma
