-- Enable Row Level Security for products table
-- Migration: Enable RLS and create policies
-- Date: 2025-12-22

-- Enable RLS on products table
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (idempotent)
DROP POLICY IF EXISTS "Allow public read access to products" ON products;
DROP POLICY IF EXISTS "Allow authenticated users to insert products" ON products;
DROP POLICY IF EXISTS "Allow authenticated users to update products" ON products;
DROP POLICY IF EXISTS "Allow authenticated users to delete products" ON products;

-- Create policy for public read access
CREATE POLICY "Allow public read access to products"
ON products FOR SELECT
USING (true);

-- Create policy for authenticated users to insert
CREATE POLICY "Allow authenticated users to insert products"
ON products FOR INSERT
TO authenticated
WITH CHECK (true);

-- Create policy for authenticated users to update
CREATE POLICY "Allow authenticated users to update products"
ON products FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Create policy for authenticated users to delete
CREATE POLICY "Allow authenticated users to delete products"
ON products FOR DELETE
TO authenticated
USING (true);

-- Verify RLS is enabled
DO $$
BEGIN
    IF NOT (SELECT relrowsecurity FROM pg_class WHERE relname = 'products') THEN
        RAISE EXCEPTION 'RLS is not enabled on products table!';
    END IF;
    RAISE NOTICE 'RLS successfully enabled on products table';
END $$;
