import React from 'react'
import Button from './UI/button/Button'
import Input from './UI/input/Input'

const PostForm = () => {
  return (
    <div>
        <form>
            <Input type="text" placeholder="Type name..." />
            <Input type="text" placeholder="Type desc..." />
            <Button>Post post</Button>
        </form>
    </div>
  )
}

export default PostForm