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
            <h1>Visit</h1>
            <RxTriangleRight className='redTriangle'/>
          </li>
          <li className='list'><h1>Exhibitions</h1>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><h1>Programs</h1>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><h1>Collections</h1>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><h1>Membership</h1>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><h1>Give</h1>
            <RxTriangleRight className='redTriangle'/></li>
          <li className='list'><h1>Shop</h1>
            <RxTriangleRight className='redTriangle'/></li>
      </ul>

    </div>
  )
}

export default Dropdown
