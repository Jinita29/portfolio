import { lazy, Suspense } from "react";

const HomeBanner = lazy(() => import('./components/HomeBanner'));
const HomeExperience = lazy(() => import('./components/HomeExperience'));
const HomeService = lazy(() => import('./components/HomeService'));
const HomeAboutMe = lazy(() => import('./components/HomeAboutMe'));
const HomeSkill = lazy(() => import('./components/HomeSkill'));
const HomeContact = lazy(() => import('./components/HomeContact'));

const HomePage = () => {
  return(
      <>
        <div className="grid grid-cols-1">
            <Suspense fallback={''}><HomeBanner /></Suspense>
            <Suspense fallback={''}><HomeService /></Suspense>
            <Suspense fallback={''}><HomeAboutMe /></Suspense>
            <Suspense fallback={''}><HomeExperience /></Suspense>
            <Suspense fallback={''}><HomeSkill /></Suspense>
            <Suspense fallback={''}><HomeContact /></Suspense>
        </div>
      </>
  )
}
export default HomePage;