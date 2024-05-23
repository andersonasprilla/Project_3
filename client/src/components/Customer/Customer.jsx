import Dropdown from "../Dropdown/Dropdown";

const customers = [
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    
    
    // More customers...
  ]
  
  const Customer = () => {
    return (   
        <div className="mt-8 flow-root">
          {customers.map((customer, index) => (
            <div key={index} className="  p-5  whitespace-nowrap flex min-w-full sm:px-6 lg:px-8 h-auto space-x-6 text-left font-medium sm:pl-0 mb-3 shadow-lg rounded-3xl">
              <div> 
                    <div className="  mt-1 text-gray-500 ">Hat</div>
                    <div className="mt-2 text-gray-900 ">{customer.hatNumber}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-500 ">Repair Order</div>
                    <div className="mt-2 text-gray-900 ">{customer.repairOrder}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-500">Opened</div>
                    <div className="mt-2 text-gray-900">{customer.openedAt}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-500">Customer Name</div>
                    <div className="mt-2 text-gray-900">{customer.customerName}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-500">Contact</div>
                    <div className="mt-2 text-gray-900">{customer.contact}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-500">Priority</div>
                    <div className="mt-2 text-gray-900">{customer.priority}</div>
              </div>
              <div className="ml-3"> 
                    <Dropdown />
              </div>
              
            </div>
          ))}
        </div>
    );
  };

export default Customer
