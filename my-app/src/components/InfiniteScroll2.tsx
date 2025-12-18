import react, { useCallback, useEffect, useRef, useState } from 'react'



export const InfiniteSCroll2 = () => {

    const [page, setPage] = useState(1);
    const [records, setRecords] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const observer = useRef<IntersectionObserver>(null);
    const [hasMore, setHasMore] = useState(false);
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

    const lastIndexRef = useCallback((node: HTMLElement | null) => {
            if (isLoading) return;
    
            if (observer.current) observer.current.disconnect();
    
            observer.current = new IntersectionObserver(entity => {
                if(entity[0].isIntersecting && hasMore) {
                    setPage(p => p + 1);
                }
            })
    
            if (node) observer.current.observe(node);
    
        }, [isLoading])

    return (
        <>
            <div><h1>Infinite scroll 2</h1></div>
            <div>
                <ul>
                    {records.map((rec, index) => {
                        if (records.length -1 === index) {
                            return <li key={rec.id+Math.random()} ref={lastIndexRef}>{rec.title}</li>
                        }
                        return <li key={rec.id+ Math.random()}>{rec.title}</li>
                    })}
                </ul>
                {isLoading && <div>Loading the content</div>}
                {!hasMore && <div>No more records</div>}
            </div>
        </>
    )

}