import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {}

const PageDemo: FC<IProps> = (props) => {
  const navigate = useNavigate()

  return (
    <div>
      PageDemo
      <div
        onClick={() => {
          navigate(-1)
        }}
      >
        返回
      </div>
    </div>
  )
}

export default PageDemo
