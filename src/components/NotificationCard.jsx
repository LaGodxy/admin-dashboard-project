import Group21 from "../assets/images/Group21.svg";
import Group22 from "../assets/images/Group22.svg";
import Group23 from "../assets/images/Group23.svg";
import Group24 from "../assets/images/Group24.svg";
import Group25 from "../assets/images/Group25.svg";

const notifications = [
  {
    id: 1,
    name: 'Ellie',
    action: 'joined team developers',
    date: '04 April, 2021',
    time: '04:00 PM',
    image: Group21,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 2,
    name: 'Jenny',
    action: 'joined team HR',
    date: '04 April, 2021',
    time: '04:00 PM',
    image: Group22, 
  },
  {
    id: 3,
    name: 'Adam',
    action: 'got employee of the month',
    date: '03 April, 2021',
    time: '02:00 PM',
    image: Group23, 
  },
  {
    id: 4,
    name: 'Robert',
    action: 'joined team design',
    date: '02 April, 2021',
    time: '02:00 PM',
    image: Group24, 
  },
  {
    id: 5,
    name: 'Jack',
    action: 'joined team design',
    date: '01 April, 2021',
    time: '03:00 PM',
    image: Group25, 
  },
  {
    id: 6,
    name: 'Jack',
    action: 'joined team design',
    date: '01 April, 2021',
    time: '03:00 PM',
    image: Group25, 
  },
 
];

const NotificationCard = () => {
  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg mb-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <a href="#" className="text-sm">view all</a>
      </div>

      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex items-center">
            <div className={`h-12 w-12 rounded-full p-1`}>
              <img
                src={notification.image}
                alt={notification.name}
                className="rounded-full h-full w-full object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium">
                {notification.name} <span className="text-gray-500">{notification.action}</span>
              </p>
              <p className="text-xs text-gray-400">{`${notification.date} | ${notification.time}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCard;
