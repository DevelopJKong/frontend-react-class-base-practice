import { atom, createStore } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { atomWithStorage, loadable } from 'jotai/utils';

const DEBUG_LABEL = 'countAtom';

export const countAtom = atom(0);
countAtom.debugLabel = DEBUG_LABEL;

const idAtom = atom(1);
const [userAtom] = atomsWithQuery((get) => ({
  queryKey: ['users', get(idAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  },
}));

export const atomQuery = loadable(userAtom);

export const loginStorageAtom = atomWithStorage('login', JSON.parse(localStorage.getItem('login') || '{}'));

export const store = createStore();
