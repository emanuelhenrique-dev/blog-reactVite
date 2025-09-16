import { useEffect, useState } from 'react';

import type { Post } from '../../reducers/posts/reducer';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { FilterContainer } from './Filter.style';
import { filterPosts } from '../../util/FilterPosts';
import { useDebounce } from 'use-debounce';

export function Filter({
  posts,
  onFilter
}: {
  posts: Post[];
  onFilter: (p: Post[]) => void;
}) {
  const [tag, setTag] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');

  // atrasar a mudança do searchTerm
  const [debouncedSearch] = useDebounce(searchTerm, 300);

  useEffect(() => {
    onFilter(filterPosts(tag, debouncedSearch, posts));
  }, [tag, debouncedSearch, posts, onFilter]);

  function handleFilter(newTag: string) {
    setTag(newTag);
  }

  return (
    <FilterContainer>
      <div id="tags-filter">
        <button
          className={tag === 'todas' ? 'selected' : ''}
          onClick={() => handleFilter('todas')}
        >
          Todas
        </button>
        <button
          className={tag === 'Design' ? 'selected' : ''}
          onClick={() => handleFilter('Design')}
        >
          Design
        </button>
        <button
          className={tag === 'Tecnologia' ? 'selected' : ''}
          onClick={() => handleFilter('Tecnologia')}
        >
          Tecnologia
        </button>
        <button
          className={tag === 'Programação' ? 'selected' : ''}
          onClick={() => handleFilter('Programação')}
        >
          Programação
        </button>
        <button
          id="special-concursos"
          className={tag === 'Ti Concursos' ? 'selected' : ''}
          onClick={() => handleFilter('Ti Concursos')}
        >
          Ti Concursos
        </button>
      </div>

      <div className="search">
        <input
          type="search"
          placeholder="Procurar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MagnifyingGlassIcon width={16} height={16} />
      </div>
    </FilterContainer>
  );
}
