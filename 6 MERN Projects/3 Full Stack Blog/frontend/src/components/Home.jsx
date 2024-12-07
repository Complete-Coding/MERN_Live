import BlogList from "./BlogList"
import BlogLoader from "./BlogLoader"

const Home = () => {
  return (
    <BlogLoader>
      <BlogList />
    </BlogLoader>
  )
}

export default Home