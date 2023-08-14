import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ContactList = () => {
     return (
          <div className='flex flex-col mt-6 '>
               <div className='flex justify-center m-2'>
                    <div className='flex bg-[#0b132b] justify-center text-white text-2xl w-1/2  py-3 rounded-xl border-solid border-2 border-black'>
                         <h2 className="font-bold">Contact List</h2>
                    </div>
               </div>
               <div className='flex justify-center mb-1 mx-3'>
                    <div className='bg-white w-1/2 justify-between flex px-4 py-2 rounded-xl border-solid border-2 border-[#8338ec]'>
                         <p className='text-lg text-[#ff006e] font-bold w-1/4'>Shivam Kumar Gupta</p>
                         <p className='text-lg text-[#240046] w-1/5'>9845888500</p>
                         <p className=' text-[#240046] w-1/4'>shivamguptanitw@gmail.com</p>
                         <div className='flex justify-between'>
                              <FontAwesomeIcon
                                   icon={faFilePen}
                                   size='xl'
                                   style={{ color: "#ffc300" }}
                                   className='mx-2'
                              />
                              <FontAwesomeIcon icon={faTrash} size='xl' style={{ color: "#ff0054" }} className='mx-2' />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ContactList;
