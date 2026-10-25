ALTER TABLE "Portfolio"
ADD COLUMN "type" TEXT NOT NULL DEFAULT 'design',
ADD COLUMN "description" TEXT,
ADD COLUMN "demoUrl" TEXT;
