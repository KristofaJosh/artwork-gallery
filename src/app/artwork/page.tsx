import { redirect } from 'next/navigation';

/**
 * This does nothing but redirect to the home page
 * @returns {null}
 * @constructor
 */
const Page = () => {
  // if this route is hit, redirect to the home page
  redirect('/');
  return null;
};

export default Page;
