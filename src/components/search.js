import React from "react"
import { Link } from "gatsby"
import { Index } from "elasticlunr" 
import { FaSearch } from 'react-icons/fa'

  class Search extends React.Component {
    state = {
      query: "",
      results: [],
      showSearch: false
    }
    getOrCreateIndex = () => {  
        return this.index  
          ? this.index  
          : 
          Index.load(this.props.searchIndex)  
      }  
    search = event => {  
        const query = event.target.value  
        this.index = this.getOrCreateIndex()  
        this.setState({  
          query,  
          results: this.index  
            .search(query, { expand: true })  
            .map(({ ref }) => {  
              return this.index.documentStore.getDoc(ref)  
            }),  
        })  
      }  
      showResults = event => {
          event.preventDefault()
        this.setState({showSearch: true})
      }
    
    render() {  
        return (  
            <div class="search-region">
            <form class="search" id="js-search" role="search">
            <input type="text" placeholder="Search this site" aria-label="search this site" name="search" value={this.state.query} onChange={this.search} />  
            <button type="submit" class="search-button" aria-label="submit" onClick={this.showResults}>
            <FaSearch />
            </button>
            </form>
              {this.state.showSearch ? 
                (<div className="search-results"><div class="search-results-container" role="alert">Search Results:<ul>  
                {this.state.results.map(page => (  
                <li key={page.id}>  
                <Link to={"/" + page.slug}>{page.title}</Link> 
                </li> 
                ))}  
                </ul> 
                </div></div>
                ) : null}
            </div>  
        )  
    }
}
export default Search


