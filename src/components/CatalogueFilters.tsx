import * as React from 'react';
import { Button, Input } from 'reactstrap';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useOutsideClick } from '@/utils/useOutsideClick';
import isEqual from 'lodash.isequal';

const categoriesAdapter = [
  { name: 'AzerothCore Module', label: 'Modules' },
  { name: 'AzerothCore Premium Module', label: 'Premium Modules' },
  { name: 'AzerothCore Tool', label: 'Tools' },
  { name: 'AzerothCore Lua Script', label: 'Lua Scripts' },
];

type Category = {
  databaseId: number;
  name: string;
};

type Filters = {
  search: string;
  categoryIn: number[];
};

type CatalogueFiltersProps = {
  handleSubmit: Function;
  categories: Array<Category>;
  isDesktop: boolean;
  filters: Filters;
};

const CatalogueFilters: React.FC<CatalogueFiltersProps> = ({
  handleSubmit,
  categories,
  filters,
  isDesktop,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState('');

  const filtersRef = React.useRef();
  useOutsideClick(filtersRef, () => setIsOpen(false));

  const handleSubmitButton = () => {
    const categoryIn = selectedCategories
      ? selectedCategories.map(opt => opt.value)
      : [];
    const filters = { search: searchInput.trim(), categoryIn };
    handleSubmit(filters);
    setIsOpen(false);
  };

  const removeFilters = () => {
    setSelectedCategories([]);
    setSearchInput('');
    handleSubmit({ search: '', categoryIn: [] });
  };

  const selectableCategories = React.useMemo(() => {
    const selectable = categories.map(obj => {
      const adapter = categoriesAdapter.find(cat => cat.name === obj.name);
      return { label: adapter.label, value: obj.databaseId };
    });
    return selectable;
  }, [categories]);

  const canRemoveFilters = React.useMemo(
    () => filters.search !== '' || filters.categoryIn.length > 0,
    [filters]
  );

  const canApplyFilters = React.useMemo(
    () =>
      searchInput !== filters.search ||
      !isEqual(
        selectedCategories.map(opt => opt.value).sort(),
        filters.categoryIn.sort()
      ),
    [filters, selectedCategories, searchInput]
  );

  return (
    <>
      <div className="filters-container">
        <div className="filters-content" ref={filtersRef}>
          {!isDesktop && (
            <Button onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon size="sm" icon="filter" /> Filters
            </Button>
          )}
          {(isOpen || isDesktop) && (
            <div className="filter-box">
              <div className="filter-item">
                <label htmlFor="search">Name:</label>
                <Input
                  type="search"
                  name="search"
                  id="search"
                  className="module-search"
                  placeholder="Search a module/tool by name"
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                />
              </div>
              <div className="filter-item">
                <label htmlFor="category+">Category:</label>
                <Select
                  isMulti
                  name="category"
                  id="category"
                  options={selectableCategories}
                  className="acore-multi-select"
                  classNamePrefix="select"
                  value={selectedCategories}
                  onChange={e => setSelectedCategories(e)}
                  isClearable={false}
                />
              </div>
              <div className="filter-item submit-button">
                <Button
                  disabled={!canApplyFilters}
                  onClick={handleSubmitButton}
                >
                  Apply filters
                </Button>
              </div>
              <div className="filter-item reset-button">
                <Button
                  disabled={!canRemoveFilters}
                  color="danger"
                  onClick={removeFilters}
                >
                  Remove filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx global>
        {`
          .acore-multi-select {
            color: #495057;
          }
          .acore-multi-select .select__control.select__control--is-focused {
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          }
          .acore-multi-select .select__control {
            border: 1px solid #ced4da;
          }
          .acore-multi-select .select__control:focus {
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          }
        `}
      </style>
      <style jsx>
        {`
          .filters-container {
            display: flex;
            align-items: flex-start;
            justify-content: ${isDesktop ? 'flex-start' : 'flex-end'};
            height: 100%;
            padding: 0 10px;
            flex-direction: column;
          }
          .filters-content {
            position: ${isDesktop ? 'sticky' : 'relative'};
            top: ${isDesktop ? '70px' : '0'};
          }
          .filter-box {
            width: 300px;
            padding: 15px;
            background-color: #fff;
            position: ${isDesktop ? 'static' : 'absolute'};
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            top: 40px;
            left: 0;
            z-index: 1;
            box-shadow: ${isDesktop ? 'none' : '0 3px 8px rgba(0, 0, 0, 0.25)'};
            border: ${isDesktop ? '1px solid rgba(0, 0, 0, 0.125)' : 'none'};
            border-radius: 0.25rem;
          }
          .filter-item {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
          }
          .filter-item label {
            margin-bottom: 0.2rem;
          }
          .filter-item:last-child {
            margin-bottom: 0;
          }
          .submit-button {
            margin-bottom: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default React.memo(CatalogueFilters);
