import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import data from './data'

export default function App() {
	const cards = data.map(item => {
		return <Card key={item.key} {...item}/>
	})

	return (
		<div>
			<Navbar />
			<section className="card-list">{cards}</section>
			<Footer />
		</div>
	)
}