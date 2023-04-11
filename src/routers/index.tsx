import { Route, Routes } from 'react-router'
import Customer from './customer/customer'
import Home from './home/home'
import Terms from './terms/terms'
import OurStory from './our-story/our-story'

export default function () {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/customer' element={<Customer />} />
      <Route path='/terms-condition' element={<Terms />} />
      <Route path='/our-story' element={<OurStory />} />
    </Routes>
  )
}
