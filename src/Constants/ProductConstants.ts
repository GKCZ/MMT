export interface ProductIndex {
    id: number,
    name: string,
    category: string,
    brand: string,
    model: string,
    description: string,
    specifications: Record<string, string | number>
}

// Strongly-typed list of product types
export const ProductType = [
  'latheMachines',
  'motors',
  'pillarDrillingMachines',
  'woodCuttingMachines',
  'millingMachines',
  'drillingMachines',
] as const;

export type ProductTypeKey = typeof ProductType[number];

// Base path that works in dev and production (respects Vite base)
export const PRODUCT_PATH_BASE_URL: string = `${import.meta.env.BASE_URL}Files/`;

// JSON path per product type
export const ProductPath: Record<ProductTypeKey, string> = {
  latheMachines: `${PRODUCT_PATH_BASE_URL}latheMachines.json`,
  motors: `${PRODUCT_PATH_BASE_URL}motors.json`,
  pillarDrillingMachines: `${PRODUCT_PATH_BASE_URL}pillarDrillingMachines.json`,
  woodCuttingMachines: `${PRODUCT_PATH_BASE_URL}woodCuttingMachines.json`,
  millingMachines: `${PRODUCT_PATH_BASE_URL}millingMachines.json`,
  drillingMachines: `${PRODUCT_PATH_BASE_URL}drillingMachines.json`,
};

export const getProductPath = (type: ProductTypeKey) => ProductPath[type];

export interface ProductListProps {
  productList: ProductIndex[],
  productCategory: string
}
