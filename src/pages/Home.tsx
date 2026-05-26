import Hero from '../components/home/Hero'
import Histoire from '../components/home/Histoire'
import Specialites from '../components/home/Specialites'
import RamenSaison from '../components/home/RamenSaison'
import Ambiance from '../components/home/Ambiance'
import Horaires from '../components/home/Horaire'
import Localisation from '../components/home/Localisation'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Histoire />
      <Specialites />
      <RamenSaison />
      <Ambiance />
      <Horaires />
      <Localisation />
    </div>
  )
}