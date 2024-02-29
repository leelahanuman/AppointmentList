import   { useState,useEffect }  from 'react'
import  axios from 'axios';

 const Appointmentlist = () => {
    const baseURL = "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

  const [appointments, setAppoinments] = useState([]);

  const retrieveAppointments = async () => {
    const response = await axios.get(baseURL);
    setAppoinments(response.data.appointments);
 
  };
  useEffect(() => {
    
    retrieveAppointments();
  }, []);
console.log(appointments)

const imageUrls = [
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1240592928.1708876951&semt=sph.jpg',
  'https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6839.jpg',
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1709212090~exp=1709212690~hmac=7157db4b093c4173580c4b046f28983fd7b332b5d9a1792693f5ad07c651b53e.jpg',
  'https://img.freepik.com/premium-photo/3d-character-business-woman_935410-584.jpg',
  'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833562.jpg',
  'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg',

];
  return (
    <div>
      <div>
      <h1 className="title p-4 m-2">Today's Appointment List</h1>
      </div>
      <div className='overflow-auto'>
            <table class="table table-fixed border-spacing-2 table-auto p-3 m-4">
  <thead className="text-blue">
    <tr className='m-4'>
      <th scope="col">PATIENTS</th>
      <th scope="col">DATE</th>
      <th scope="col">TIME</th>
      <th scope="col">DOCTOR</th>
      <th scope="col">INJURY</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
    {appointments.length>0 && appointments.map((appointment,index)=>(
        <tr>
      <td className='d-flex align-items-center text-align-center'>
      <div className="logo">
                <img src={imageUrls[index]} alt={`Image ${index + 1}`} className="avatar-image" />
        {/* <span class="avatar-number">{appointment.patient_name.slice(0,1).toUpperCase()}</span> */}
      </div>
      <div className="details d-flex flex-column">
      <p className="patientName px-2">
        {appointment.patient_name}
        </p>
      <p className='mobileNumber px-2'>+
        {appointment.mobile_number}
        </p>
      </div>
      </td>

      <td className="Date pt-3 "><i class="fa-regular fa-calendar"></i> {appointment.appointment_date}</td>
      <td className="clock pt-3"><i class="fa-regular fa-clock"></i> {appointment.appointment_time}</td>
      <td className="star pt-3"> <i class="fa-solid fa-circle-star"></i> {appointment.doctor}</td>
      <td className='inj pt-3'><button className="Injury width:auto text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-light-gray-100 transition duration-150 ease-in-out p-1">{appointment.injury}</button></td>
      <td className='act pt-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 display-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>
</td>
    </tr>
      ))}
  </tbody>
</table>
</div>

    </div>
  )
}
export default Appointmentlist;