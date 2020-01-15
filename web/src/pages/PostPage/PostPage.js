import { Link, routes } from '@redwoodjs/router'

import PostCell from 'src/components/PostCell'

const PostPage = ({ id }) => {
  return (
    <>
      <header className="flex justify-between p-4">
        <h1 className="text-xl font-semibold">
          <Link to={routes.posts()} className="underline">
            Posts
          </Link>
        </h1>
        <nav>
          <Link
            to={routes.newPost()}
            className="bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-3 py-2 uppercase tracking-wide rounded"
          >
            + New Post
          </Link>
        </nav>
      </header>
      <main className="p-4">
        <PostCell id={parseInt(id)} />
      </main>
    </>
  )
}

export default PostPage
