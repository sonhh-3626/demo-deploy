import ItemsPerPageSelector from "./ItemsPerPageSelector";
import SearchBox from "./SearchBox";
import SortSelector from "./SortSelector";

interface FilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  postsPerPage: number;
  setPostsPerPage: (limit: number) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function Filter({
  searchQuery,
  setSearchQuery,
  postsPerPage,
  setPostsPerPage,
  sortBy,
  setSortBy,
}: FilterProps) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <ItemsPerPageSelector postsPerPage={postsPerPage} setPostsPerPage={setPostsPerPage} />

        <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </div>
  );
}
