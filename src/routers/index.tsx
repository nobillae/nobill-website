import { Route, Routes, createRoutesFromElements } from 'react-router'
import Customer from './customer/customer'
import {Component as Home} from './home/home'
import Terms from './terms/terms'
import OurStory from './our-story/our-story'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// let routes = createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route path="*" lazy={() => import("./a")} />
//     <Route path="b" lazy={() => import("./b")} />
//   </Route>
// );

export default function () {
    // 解决跳转新页面滚动条不在顶部的问题
    const location = useLocation()
    useEffect(() => {
      if (document && location.pathname != '/') {
        if (document?.documentElement || document?.body) {
          document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
      }
    }, [location.pathname]);
  return (
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/customer' element={<Customer />} />
      <Route path='/terms-condition' element={<Terms />} />
      <Route path='/our-story' element={<OurStory />} />
    </Routes>
  )
}


