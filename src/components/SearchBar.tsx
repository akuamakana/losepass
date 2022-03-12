interface SearchBarProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ filter, setFilter }) => {
  return <input value={filter} className="border-b-[0.1px] border-gray-300 focus:outline-none" onChange={(e) => setFilter(e.target.value)} type="text" placeholder="Filter users by name" />;
};
