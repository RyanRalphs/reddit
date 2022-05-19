import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'

function PostBox() {
  const { data: session } = useSession()

  return (
    <form className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2 shadow-sm">
      <div className="flex items-center space-x-3">
        <Avatar seed="RyanJRalphs" />
        <input
          type="text"
          disabled={!session}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          placeholder={
            session
              ? 'Create a post by entering a title'
              : 'Please sign in to make a post'
          }
        />
      </div>
    </form>
  )
}

export default PostBox
