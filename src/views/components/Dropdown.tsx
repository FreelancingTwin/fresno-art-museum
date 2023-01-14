//@ts-ignore
   import { RxTriangleRight } from 'react-icons/rx'
const Dropdown = () => {
  return (
    <div className='dropdown'>
     <span className="todaysHours">
       <span className="todayText">Today's hours</span>
       <span className="time">10:00 am - 10:00 pm</span></span>
      <button className='dropdownButtons'><h1>Get Tickets</h1></button>
      <button className='dropdownButtons donate'><h1>Donate</h1></button>
      <ul className="ul">
          <li className='list'>
            <p>Visit</p>
            <RxTriangleRight className='redTriangle'/>
          </li>
          <li className='list'><p>Exhibitions</p>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><p>Programs</p>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><p>Collections</p>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><p>Membership</p>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><p>Give</p>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><p>Shop</p>
            <RxTriangleRight className='redTriangle'/></li>
      </ul>

    </div>
  )
}

export default Dropdown
