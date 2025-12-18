import react, { useCallback, useEffect, useRef, useState } from 'react'

export const InfiniteScroll = () => {
    // const [page, setPage] = useState(1);
    const [records, setRecords] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    //const observer = useRef<IntersectionObserver>(null);
    const [hasMore, setHasMore] = useState(false);
    const [page, lastIndexRef] = useInfiniteScroll(isLoading, hasMore)
    const LIMIT = 10;

    const fetchData = async (page: number) => {
        console.log("inside fetchData");
        setIsLoading(true);
        const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`;
        const res = await fetch(url);
        const data = await res.json();

        setRecords(prev => [...prev, ...data]);
        setIsLoading(false);
        setHasMore(data.length === LIMIT);
    }

    useEffect(() => {
        fetchData(page);
    }, [page])

    // const lastIndexRef = useCallback((node: HTMLElement | null) => {
    //     if (isLoading) return;

    //     if (observer.current) observer.current.disconnect();

    //     observer.current = new IntersectionObserver(entity => {
    //         if(entity[0].isIntersecting && hasMore) {
    //             setPage(p => p + 1);
    //         }
    //     })

    //     if (node) observer.current.observe(node);

    // }, [isLoading])

    return (
        <>
            <div><h1>Infinite Scroll</h1></div>
            <div>
                <ul>
                    {records.map((rec, index) => {
                        if (records.length - 1 === index) {
                            console.log("last index");
                            return <li ref={lastIndexRef} key={Math.random() + rec.id}>{rec.name}</li>
                        }
                        return <li key={Math.random() + rec.id}>{rec.title}</li>

                    })}
                    {isLoading && <div>Loading the data</div>}
                    {!hasMore && <div>No more records</div>}
                </ul>
            </div>
        </>
    )


}

export const useInfiniteScroll = (isLoading: boolean, hasMore: boolean) => {
    const observer = useRef<IntersectionObserver>(null);
    const [page, setPage] = useState<number>(1);

    const lastIndexRef: any = useCallback((node: HTMLElement | null) => {
        if (isLoading) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entity => {
            if (entity[0].isIntersecting && hasMore) {
                setPage(p => p + 1);
            }
        })

        if (node) observer.current.observe(node);

    }, [isLoading])

    return [page, lastIndexRef];

}

// import React, { useCallback, useEffect, useRef, useState } from 'react';

// const LIMIT = 10;

// export function InfiniteScroll() {
//   const [users, setUsers] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   const observer = useRef<IntersectionObserver | null>(null);

//   // Fetch data
//   const fetchUsers = async (pageNumber: number) => {
//     setLoading(true);

//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${LIMIT}`
//     );
//     const data = await res.json();

//     setUsers(prev => [...prev, ...data]);
//     setHasMore(data.length === LIMIT);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchUsers(page);
//   }, [page]);

//   // Observe last element
//   const lastUserRef = (node: HTMLLIElement | null) => {
//     if (loading) return;

//     if (observer.current) observer.current.disconnect();

//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting && hasMore) {
//         setPage(prev => prev + 1);
//       }
//     });

//     if (node) observer.current.observe(node);
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Infinite Scroll</h2>

//       <ul>
//         {users.map((user, index) => {
//           if (index === users.length - 1) {
//             return (
//               <li ref={lastUserRef} key={user.id}>
//                 {user.name}
//               </li>
//             );
//           }
//           return <li key={user.id}>{user.title}</li>;
//         })}
//       </ul>

//       {loading && <p>Loading...</p>}
//       {!hasMore && <p>No more users</p>}
//     </div>
//   );
// }
