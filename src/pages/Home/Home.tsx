// pages, components
import AnimeCard from 'components/AnimeCard/AnimeCard';

//
import { Link } from 'react-router-dom';


export default function Home() {

  return (
    <main>
      <nav className="bg-slate-800 text-white py-4 flex items-center justify-center">
          <Link to='/' className='mx-4'>Home</Link>
          <Link to='/Test' className='mx-4'>Test</Link>
          <Link to='#' className='mx-4'>Anime</Link>
          <Link to='#' className='mx-4'>Manga</Link>
      </nav>
      <div className="container mx-auto pb-20">
        <div className='grid grid-cols-5 gap-6'>
          <AnimeCard />
        </div>
      </div>
    </main>
  );
}