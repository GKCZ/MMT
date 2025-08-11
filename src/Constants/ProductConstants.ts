export interface ProductIndex {
    id: Number,
    name: string,
    category: string,
    brand: string,
    model: string,
    description: string,
    specification: Record<string, string | Number>
}