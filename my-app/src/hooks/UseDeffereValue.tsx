import react, { useDeferredValue, useMemo } from 'react';
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

export function UseDefferedValue() {
    const [searchVal, setSearchVal] = useState('');
   // const query = useDeferredValue(searchVal);
    const handleSearch = (e : any) => {
        setSearchVal(e.target.value)
    }
    return (<div>
        <h1>UseDefferedValue</h1>
        <input type='text' value={searchVal} onChange={(e) => handleSearch(e)}/>
        <ShowList query={searchVal}></ShowList>
      
    </div>)
}


interface iQuery {
    query: string;
}

const ShowList = ({ query }: iQuery) => {

    const deferredQuery = useDeferredValue(query);

    useEffect(() => {
        console.log(`query - ${query} \n deferredQuery - ${deferredQuery}`);
    }, [query, deferredQuery])

    const list = Array.from({ length: 20000 }, (_, i) => {   return  `Item ${i + 1} - ${deferredQuery}` });
    


    // const list = useMemo(() => {
    //     return Array.from({ length: 20000 }, (_, i) => {   return  `Item ${i + 1} - ${deferredQuery}` });

    // }, [deferredQuery])

    // const [post, setPost] = useState<any>(null);
    // useEffect(() => {
    //      fetch('https://dummyjson.com/posts/search?q=' + query)
    //     .then(list => list.json())
    //     .then(data => { console.log(data); setPost(data.posts) });
    // console.log(query);
    // }, [query])

   // const filteredList = list.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    return (
        <>
            <h3>Filtered Result: </h3>
            {/* <div>{JSON.stringify(post)}</div> */}
            {/* <div>{post && post?.map((item : any) => <div key={item.id}>{item.title}</div>)}</div> */}
            {deferredQuery && list.map(val => <div key={val}>{val}</div>)}
        </>
    )
}