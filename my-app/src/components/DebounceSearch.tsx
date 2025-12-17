import react, { useEffect, useMemo, useState } from 'react'

export const DebounceSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState<any[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<any[]>([]);

    // Solution 1 - without hook
    // const [debouncedSearch, setDebouncedSearch] = useState('');
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setDebouncedSearch(searchTerm);
    //     }, 1000)
    //     return () => clearTimeout(timer);
    // }, [searchTerm])


    // Solution 2 - With hook
    const debouncedSearch = useDebounce(searchTerm, 1000);
    const endpoint = 'https://jsonplaceholder.typicode.com/users';

    const fetchUsers = () => {
        fetch(endpoint).then((res) => res.json().then((data) => { setUsers(data); setFilteredUsers(data);}));
    }
    useEffect(() => {
        console.log('effect 1');
        fetchUsers();
    }, [])

    // Solution 1 for search - Recommnded - no use of useEffect and useMemo will give better result.
    const filteredResult = useMemo(() => {
         if (!debouncedSearch) {
            return users;
        }
        return users?.filter(user => user?.name?.toLowerCase().includes(debouncedSearch.toLowerCase()));
    }, [debouncedSearch, users])

    // Solution 2 for search - using useEffect.
    
    // useEffect(() => {
    //     console.log('effect 2');
    //     if (!debouncedSearch) {
    //         setFilteredUsers(users);
    //         return;
    //     }
    //      const result = users?.filter(user => user?.name?.toLowerCase().includes(debouncedSearch.toLowerCase()));
    //      //console.log(result);
    //     setFilteredUsers(result);
    // }, [debouncedSearch, users])

    return (
        <>
            <div><h1>Debounced Search</h1></div>
            <div>
                <input type='text' onChange={c => setSearchTerm(c.target.value)}></input>
            </div>
            <div>Final Value - {debouncedSearch}</div>
            <div>
                {/* <ul>{filteredUsers?.map((item: any) => <li key={item.name}>{item.name}</li>)}</ul> */}
                <ul>{(filteredResult || users)?.map((item: any) => <li key={item.name}>{item.name}</li>)}</ul>
            </div>
        </>
    )
}


const useDebounce = (search: string, delay: any) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(search);
        }, delay)

        return () => clearTimeout(timer);
    }, [search, delay])

    return value;

}