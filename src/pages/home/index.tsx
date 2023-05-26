import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {}

const Home: FC<IProps> = (props) => {
  const navigate = useNavigate()

  return (
    <div>
      Home
      <div
        onClick={() => {
          navigate(`/page1`)
        }}
      >
        跳转
      </div>
    </div>
  )
}

export default Home
