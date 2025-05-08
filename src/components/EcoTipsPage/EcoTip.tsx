import ReduceWaste from "./ReduceWaste"
import GreenShopping from "./GreenShopping"
import EnergySaving from "./EnergySaving"
import Composting from "./Composting"
import { Footer } from "../Footer/Footer"
import Sustainability from "./Sustainability"

const EcoTip = () => {
  return (
    <div className="px-4 py-10">
      {/* 2-column grid for eco tips */}
      <section>
        <Sustainability />
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  <section className="p-6 bg-green-50 rounded-md shadow-md" style={{ backgroundImage: "url('/leaf-pattern.png')" }}>
    <ReduceWaste />
  </section>
  <section className="p-6 bg-green-50 rounded-md shadow-md" style={{ backgroundImage: "url('/leaf-pattern.png')" }}>
    <GreenShopping />
  </section>
  <section className="p-6 bg-green-50 rounded-md shadow-md" style={{ backgroundImage: "url('/leaf-pattern.png')" }}>
    <EnergySaving />
  </section>
  <section className="p-6 bg-green-50 rounded-md shadow-md" style={{ backgroundImage: "url('/leaf-pattern.png')" }}>
    <Composting />
  </section>
</div>


      {/* Footer placed below the grid */}
      <Footer />
    </div>
  )
}

export default EcoTip
