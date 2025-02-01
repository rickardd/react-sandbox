import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  available: boolean;
}

interface StoreState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  selectedCategories: string[];
  isDarkMode: boolean;
  fetchProducts: () => Promise<void>;
  setSearchTerm: (term: string) => void;
  setCategories: (category: string[]) => void;
  sortProductsByPrice: (ascending?: boolean) => void;
  resetFilters: () => void;
  setDarkMode: (isDarkMode: boolean) => void;
}

const getFilteredProducts = (state: StoreState) => {
  const { products, searchTerm, selectedCategories } = state;

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  return filteredProducts;
};

export const useStore = create(
  persist<StoreState>(
    (set) => ({
      products: [],
      filteredProducts: [],
      loading: false,
      error: null,
      searchTerm: "",
      selectedCategories: [],
      isDarkMode: false,
      fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          set((state) => {
            const filteredProducts = state.filteredProducts.length ? state.filteredProducts : data;
            return { products: data, filteredProducts, loading: false };
          });
        } catch {
          set({ loading: false, error: "Failed to fetch products" });
        }
      },
      setSearchTerm: (searchTerm: string) => {
        set((state) => ({ ...state, searchTerm }));
        set((state) => ({ ...state, filteredProducts: getFilteredProducts({ ...state }) }));
      },
      setCategories: (selectedCategories: string[]) => {
        set((state) => ({ ...state, selectedCategories }));
        set((state) => ({ ...state, filteredProducts: getFilteredProducts({ ...state }) }));
      },
      sortProductsByPrice: (ascending = true) => {
        set((state) => {
          const sortedFilteredProducts = [...state.filteredProducts].sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
          return { ...state, filteredProducts: sortedFilteredProducts };
        });
      },
      resetFilters: () => {
        set((state) => ({ filteredProducts: state.products, searchTerm: "", selectedCategories: [] }));
      },
      setDarkMode: (isDarkMode: boolean) => {
        set((state) => {
          return { ...state, isDarkMode };
        });
      },
    }),
    {
      name: "product-store",
      // Default storage is localStorage for persisting state
    }
  )
);
