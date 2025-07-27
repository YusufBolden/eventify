import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E9D5FF]">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-[#6366F1]">Eventify Frontend Running ✅</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
