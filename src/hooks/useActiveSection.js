import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../store/portfolioSlice';

export const useActiveSection = (sectionIds, threshold = 0.3) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const observerOptions = {
      root: null, // Viewport
      rootMargin: '-20% 0px -40% 0px', // Focus window in the middle of screen
      threshold,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, threshold, dispatch]);
};
export default useActiveSection;
