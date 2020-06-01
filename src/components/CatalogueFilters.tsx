import * as React from 'react';
import { Button, Input } from 'reactstrap';
import Select from 'react-select';
import { useOutsideClick } from '@/utils/useOutsideClick';

const categories = [
  { value: 'AzerothCore Module', label: 'Modules' },
  { value: 'AzerothCore Premium Module', label: 'Premium Modules' },
  { value: 'AzerothCore Tool', label: 'Tools' },
  { value: 'AzerothCore Lua Script', label: 'Lua Scripts' },
];

type CatalogueFiltersProps = {
  handleSubmit: Function;
};

const CatalogueFilters: React.FC<CatalogueFiltersProps> = ({
  handleSubmit,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>();

  const filtersRef = React.useRef();
  useOutsideClick(filtersRef, () => setIsOpen(false));

  const handleSubmitButton = () => {
    const search = inputRef.current.value;
    const filters = { search };
    handleSubmit(filters);
  };

  return (
    <>
      <div className="filters-container">
        <div className="filters-content" ref={filtersRef}>
          <Button onClick={() => setIsOpen(!isOpen)}>Filters</Button>
          {isOpen && (
            <div className="filter-box">
              <div className="filter-item">
                <label htmlFor="search">Name:</label>
                <Input
                  type="search"
                  name="search"
                  id="search"
                  className="module-search"
                  placeholder="Search a module/tool by name"
                  innerRef={inputRef}
                />
              </div>
              <div className="filter-item">
                <label htmlFor="category+">Category:</label>
                <Select
                  isMulti
                  name="category+"
                  id="category+"
                  options={categories}
                  className="acore-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div className="filter-item submit-button">
                <Button onClick={handleSubmitButton}>Apply filters</Button>
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
            justify-content: flex-end;
            height: 100%;
            padding: 0 10px;
            flex-direction: column;
          }
          .filters-content {
            position: relative;
          }
          .filter-box {
            width: 300px;
            padding: 15px;
            background-color: #fff;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            top: 40px;
            left: 0;
            z-index: 1;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
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
        `}
      </style>
    </>
  );
};

export default CatalogueFilters;
