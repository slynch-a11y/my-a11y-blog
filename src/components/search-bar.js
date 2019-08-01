import React from "react"  
import { graphql, StaticQuery } from "gatsby"  
import Search from "./search"  
  
const SearchBar = () => {
 
  return (  
    <StaticQuery  
      query={graphql`  
          query SearchIndexQuery {  
            siteSearchIndex {  
              index  
            }  
          }  
        `}  
      render={data => (  
        <Search searchIndex={data.siteSearchIndex.index}/>  
      )}  
    />  
  )  
}

export default SearchBar