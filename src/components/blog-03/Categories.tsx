'use client';

interface Category {
  name: string;
  count: number;
}

interface CategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  title?: string;
}

const Categories = ({ categories, selectedCategory, onCategoryChange, title = 'Categories' }: CategoriesProps) => {
  return (
    <div>
      <h3 className="text-heading-5">{title}</h3>
      <div className="space-y-2 mt-2.5">
        <button
          onClick={() => onCategoryChange('all')}
          className={`flex items-center justify-between py-1.5 text-tagline-1 w-full text-left transition-colors duration-300 ${
            selectedCategory === 'all' ? 'text-primary-500' : 'hover:text-primary-500 dark:text-accent'
          }`}>
          <span>All</span>
          <span>({categories.reduce((sum, cat) => sum + cat.count, 0)})</span>
        </button>

        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={`flex items-center justify-between py-1.5 text-tagline-1 w-full text-left transition-colors duration-300 ${
              selectedCategory === category.name ? 'text-primary-500' : 'hover:text-primary-500 dark:text-accent'
            }`}>
            <span className="first-letter:uppercase">{category.name}</span>
            <span>({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};
Categories.displayName = 'Categories';
export default Categories;
