export interface Category {
  icons: string[];
  name: string;
}

export interface CategoryItem {
  items: Category[];
}

export interface CategoriesResponseModel {
  categories: CategoryItem;
}
