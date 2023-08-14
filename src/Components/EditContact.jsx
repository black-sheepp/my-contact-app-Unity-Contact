import React from "react";

const EditContact = () => {
  return (
    <div>
      <div>
        <div className='flex justify-center'>
          <div className='flex flex-col w-1/2 bg-[#bee3db] rounded-2xl p-5'>
            <div className='flex justify-center'>
              <h3 className='text-lg font-bold mb-2'>Edit Contact</h3>
            </div>
            <div className='flex'>
              <div className='mr-12 ml-12 text-end text-lg font-semibold text-[#000814]'>
                <p>Name: </p>
                <p>Phone Number: </p>
                <p>Email Address: </p>
                <p>Gender: </p>
                <p>Groups or Categories: </p>
                <p>Address: </p>
                <p>Social Media Profiles: </p>
              </div>
              <div className=' text-lg flex flex-col'>
                <input
                  className='bg-[#bee3db] w-96 text-[#00000]'
                  type='text'
                  placeholder='Shivam Gupta'
                />
                <input
                  className='bg-[#bee3db] w-96 text-[#00000]'
                  type='number'
                  placeholder='9845888500'
                />
                <input
                  className='bg-[#bee3db] w-96 text-[#00000]'
                  type='email'
                  placeholder='shivamguptanitw@gmail.com'
                />
                <input
                  className='bg-[#bee3db] w-96 text-[#00000]'
                  type='text'
                  placeholder='Male'
                />
                <input
                  className='bg-[#bee3db] w-96 text-[#00000]'
                  type='text'
                  placeholder='Colleage'
                />
                <input
                  className='bg-[#bee3db] w-96 text-[#00000]'
                  type='text'
                  placeholder='New Delhi'
                />
                <input
                  className='bg-[#bee3db] w-96 text-[#00000]'
                  type='text'
                  placeholder='facebook.com/shivam'
                />
              </div>
            </div>
            <div className="flex justify-center">
            <button className='button' style={{ width: "100px", background:"#3772ff"}}>
              Save
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
