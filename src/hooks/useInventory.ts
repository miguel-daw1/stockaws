import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import type { Product } from '../types';

export const useInventory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setProducts(data || []);
    setLoading(false);
  };

  const addProduct = async (product: Product) => {
    const { error } = await supabase.from('products').insert([product]);
    if (!error) fetchProducts();
  };

  const deleteProduct = async (id: string) => {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) fetchProducts();
  };

  const stats = {
    totalProducts: products.length,
    totalValue: products.reduce((acc, p) => acc + (Number(p.price) * Number(p.stock)), 0),
    lowStock: products.filter(p => p.stock < 5).length
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, stats, addProduct, deleteProduct };
};