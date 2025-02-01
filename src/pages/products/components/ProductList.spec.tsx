import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useStore } from "../store/useStore";
import ProductList from "./ProductList";

vi.mock("../store/useStore");

describe("ProductList", () => {
  it("renders loading state initially", () => {
    useStore.mockImplementation((selector) => {
      const state = {
        filteredProducts: [],
        loading: true,
        error: null,
        fetchProducts: vi.fn(),
      };

      return selector(state); // Call the selector with the state
    });

    render(<ProductList />);
    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("renders error state", () => {
    useStore.mockImplementation((selector) => {
      const state = {
        filteredProducts: [],
        loading: false,
        error: "Failed to fetch products",
        fetchProducts: vi.fn(),
      };

      return selector(state); // Call the selector with the state
    });

    render(<ProductList />);
    expect(screen.getByText("Failed to fetch products")).toBeDefined();
  });

  it("renders products", async () => {
    useStore.mockImplementation((selector) => {
      const state = {
        filteredProducts: [
          { id: 1, title: "Product 1", price: 100, category: "Category 1", available: true },
          { id: 2, title: "Product 2", price: 200, category: "Category 2", available: false },
        ],
        loading: false,
        error: null,
        fetchProducts: vi.fn(),
      };

      return selector(state); // Call the selector with the state
    });

    render(<ProductList />);

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeDefined();
      expect(screen.getByText("Product 2")).toBeDefined();
    });
  });
});
